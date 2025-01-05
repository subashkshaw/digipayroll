import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

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

    // Hash the password before saving
    const hashedPassword = bcrypt.hashSync(body.password, 8);

    const user = await prisma.users.create({
      data: {
        ...body,
        password: hashedPassword, // Save the hashed password
      },
    });
    console.log(user, "All user data");

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
