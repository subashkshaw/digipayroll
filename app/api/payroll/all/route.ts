import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const payroll = await prisma.payroll.findMany();
    console.log(payroll, "All payroll data");
    return NextResponse.json(
      {
        message: "payroll fetch successfully",
        data: {
          payroll: payroll || [],
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
