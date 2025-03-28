import { callApi } from "@/services/http.service";
import { API } from "@/utils/enum";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("📩 API Route Triggered! Processing request...");

  const backendUrl = "https://crm-660080677559.asia-south1.run.app/api/lead/read/leads-without-actions"; // The external backend

  try {
    // Extract request body (query)
    const requestData = await req.json();
    console.log("📊 Forwarding Data to Backend:", requestData);

    const { pagination, ...restPayload } = requestData;
    const payload2 = {
      ...restPayload,
      page: pagination.page,
      limit: pagination.limit
    };

    // Send the request using the callApi function
    const apiResponse = await callApi(backendUrl, API.POST, payload2);

    // Return the response data to the client
    return NextResponse.json(apiResponse, { status: 200 });

  } 
  // catch (error: unknown) {
  //   console.error("❌ Error forwarding request:", error.message);

  //   // Ensure a response is returned on error as well
  //   return NextResponse.json(
  //     { error: "Failed to communicate with backend", details: error.message },
  //     { status: 500 }
  //   );
  // }
  catch (error: unknown) {
  console.error("❌ Error forwarding request:", error);

  let errorMessage = "An unknown error occurred";

  if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  }

  return NextResponse.json(
    { error: "Failed to communicate with backend", details: errorMessage },
    { status: 500 }
  );
}

}
