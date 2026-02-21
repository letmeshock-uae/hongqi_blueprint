"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VibeButton } from "@/components/shared/vibe-button";
import { SCALE_IN } from "@/lib/motion";

interface LeadModalProps {
  modelId: string;
  modelName: string;
}

type FormState = "input" | "validating" | "success" | "error";

export function LeadModal({ modelId, modelName }: LeadModalProps) {
  const [formState, setFormState] = useState<FormState>("input");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("validating");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, modelId, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong");
      }

      setFormState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to submit");
      setFormState("error");
    }
  };

  return (
    <section id="inquiry" className="px-6 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-2xl">
        <motion.div {...SCALE_IN} className="glass-card rounded-3xl p-8 md:p-12">
          <p className="text-technical mb-3 text-primary">Get In Touch</p>
          <h2 className="text-tight text-3xl font-bold text-foreground md:text-4xl">
            Book a Test Drive
          </h2>
          <p className="mt-3 text-muted">
            Experience the {modelName} in person. Fill out the form and our team will
            contact you shortly.
          </p>

          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex flex-col items-center gap-4 py-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground">Request Submitted</h3>
                <p className="text-muted">
                  Thank you, {name}. Our team will reach out to you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-5"
              >
                <div>
                  <label className="text-technical mb-2 block text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                    className="w-full rounded-xl border border-glass-stroke bg-surface px-4 py-3 text-foreground placeholder-white/30 outline-none transition-colors focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="text-technical mb-2 block text-muted">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    minLength={7}
                    className="w-full rounded-xl border border-glass-stroke bg-surface px-4 py-3 text-foreground placeholder-white/30 outline-none transition-colors focus:border-primary"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="text-technical mb-2 block text-muted">
                    Message (Optional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full resize-none rounded-xl border border-glass-stroke bg-surface px-4 py-3 text-foreground placeholder-white/30 outline-none transition-colors focus:border-primary"
                    placeholder="Any specific requirements..."
                  />
                </div>

                {formState === "error" && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}

                <VibeButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={formState === "validating"}
                  className="mt-2 w-full"
                >
                  {formState === "validating" ? "Submitting..." : "Request Test Drive"}
                </VibeButton>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
