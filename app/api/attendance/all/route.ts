import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const attendance = await prisma.attendance.findMany();
    console.log(attendance, "All attendance data");
    return NextResponse.json(
      {
        message: "attendance fetch successfully",
        data: {
          attendance: attendance || [],
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
