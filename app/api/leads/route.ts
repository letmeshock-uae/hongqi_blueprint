import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = inquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    // In production this would save to a database (Drizzle + PostgreSQL).
    // For MVP, we log and return success.
    console.log("New lead inquiry:", result.data);

    return NextResponse.json({ success: true, message: "Inquiry received" });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
