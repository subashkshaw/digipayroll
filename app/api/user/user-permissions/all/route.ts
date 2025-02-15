import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const access = await prisma.userPermissions.findMany();
    console.log(access, "All access data");
    return NextResponse.json(
      {
        message: "access fetch successfully",
        data: {
          access: access || [],
        },
      },
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
