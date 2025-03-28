import { callApi } from "@/services/http.service";
import { API } from "@/utils/enum";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("📩 API Route Triggered! Processing request...");

  const backendUrl = "https://crm-660080677559.asia-south1.run.app/api/auth/user/login"; // The external backend

  try {
    // Extract request body (query)
    const requestData:{"email":string,"password":string} = await req.json();
    console.log("📊 Forwarding Data to Backend:", requestData);

    // Send the request using the callApi function
    const apiResponse = await callApi(backendUrl, API.POST,requestData);
    console.log("api login response",apiResponse);

    // Return the response data to the client
    return NextResponse.json(apiResponse, { status: 200 });

  } catch (error: any) {
    console.error("❌ Error forwarding request:", error.message);

    // Ensure a response is returned on error as well
    return NextResponse.json(
      { error: "Failed to communicate with backend", details: error.message },
      { status: 500 }
    );
  }
}