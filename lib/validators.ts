import { z } from "zod/v4";

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  preferredDealer: z.string().optional(),
  modelId: z.string().min(1, "Please select a model"),
  message: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
