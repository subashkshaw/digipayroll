import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const user = await prisma.users.findMany();
    console.log(user, "All user data");
    return NextResponse.json(
      { message: "User fetch successfully", data: { user: user || {} } },
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
