import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const organization = await prisma.organization.findMany();
    console.log(organization, "All organization data");
    return NextResponse.json(
      {
        message: "organization fetch successfully",
        data: {
          organization: organization || [],
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
