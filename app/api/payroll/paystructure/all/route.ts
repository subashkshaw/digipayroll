import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const paystructure = await prisma.payStructure.findMany();
    console.log(paystructure, "All pay structure data");
    return NextResponse.json(
      {
        message: "pay structure fetch successfully",
        data: {
          paystructure: paystructure || [],
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
