import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body, "body data");
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "Request body is empty" },
        { status: 400 }
      );
    }

    console.log("Received asset data:", body);

    const asset = await prisma.asset.create({
      data: {
        ...body,
      },
    });
    console.log(asset, "All asset data");

    // Correct handling of response
    return NextResponse.json(
      {
        message: "asset created successfully",
        asset: asset || {},
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the create request" },
      { status: 500 }
    );
  }
}
