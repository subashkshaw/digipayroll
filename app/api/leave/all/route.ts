import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const leave = await prisma.leave.findMany();
    console.log(leave, "All leave data");
    return NextResponse.json(
      {
        message: "leave fetch successfully",
        data: {
          leave: leave || [],
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during GET request:", error);
    return NextResponse.json(
      {
        error: "An error occurred while processing the fetch request",
      },
      { status: 500 }
    );
  }
}
