import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const roles = await prisma.roles.findMany();
    console.log(roles, "All roles data");
    return NextResponse.json(
      {
        message: "roles fetch successfully",
        data: {
          roles: roles || [],
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
