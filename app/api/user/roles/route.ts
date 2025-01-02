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

    console.log("Received role data:", body);

    const roles = await prisma.roles.create({
      data: {
        ...body,
      },
    });
    console.log(roles, "All role data");

    // Correct handling of response
    return NextResponse.json(
      {
        message: "role created successfully",
        data: roles || {},
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
