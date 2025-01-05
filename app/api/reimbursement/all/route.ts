import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const reimbursement = await prisma.reimbursement.findMany();
    console.log(reimbursement, "All reimbursement data");
    return NextResponse.json(
      {
        message: "reimbursement fetch successfully",
        data: {
          reimbursement: reimbursement || [],
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
