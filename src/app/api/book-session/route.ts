import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, mobile } = await request.json();

    if (!name || !mobile) {
      return NextResponse.json(
        { error: "Name and Mobile number are required" },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.warn("GOOGLE_SCRIPT_URL environment variable is not set.");
      return NextResponse.json({
        status: "success",
        message: "Development mode: GOOGLE_SCRIPT_URL is not set. Data logged locally.",
        data: { name, mobile },
      });
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, mobile }),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned status ${response.status}`);
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Session booking error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to submit session request" },
      { status: 500 }
    );
  }
}
