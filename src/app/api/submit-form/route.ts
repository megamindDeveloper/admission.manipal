import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.json();
  
    try {
      console.log("Form Data Received:", formData); // Log form data for debugging
  
      const googleScriptUrl = "https://script.google.com/macros/s/AKfycbzswiK78qgK1cqB5-DOK4UqvzTO0gVTCsxe32Qp-HMV9tzdj8CGAkQWZFnM1YH1aO45/exec";
      
      const response = await fetch(googleScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorDetail = await response.text();  // Capture detailed error
        console.error(`Error from Google Apps Script: ${response.statusText}, Detail: ${errorDetail}`);
        throw new Error(`Error from Google Apps Script: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log("Response from Google Script:", result);
  
      return NextResponse.json(result);
    } catch (error) {
      console.error("Error occurred:", error); // Log error details
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });
    }
  }
  