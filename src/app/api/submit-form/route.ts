import { NextRequest, NextResponse } from 'next/server';

const allowedOrigin = "https://apply.manipalschool.edu.in"; // Change to your frontend domain

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request: NextRequest) {
  const formData = await request.json();

  try {
    console.log("Form Data Received:", formData);

    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbxrH_MeY_OcoZPm0skObbTuKtgeF4MTqNBqFuA24Of6RZuqRkUx6G0tbBIU7o9X4Ny9YA/exec";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorDetail = await response.text();
      console.error(`Error from Google Apps Script: ${response.statusText}, Detail: ${errorDetail}`);
      throw new Error(`Error from Google Apps Script: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Response from Google Script:", result);

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Error occurred:", error);

    return new NextResponse(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
}
