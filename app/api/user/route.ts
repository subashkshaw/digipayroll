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

    console.log("Received user data:", body);

    const user = await prisma.users.create({
      data: {
        ...body,
      },
    });
    console.log(user, "All usert data");

    // Correct handling of response
    return NextResponse.json(
      { message: "User created successfully", data: user || {} },
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
export async function GET(request: NextRequest) {
  const body = await request.json();
  try {
    const user = await prisma.users.findFirst({
      where: {
        OR: [{ email: body.email }, { mob_number: body.mob_number }],
        password: body.password,
      },
    });

    console.log(user, "User data");
    return NextResponse.json(
      { message: "User fetch successfully", user: user || {} },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during GET request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the fetch request" },
      { status: 500 }
    );
  }
}
