import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const asset = await prisma.asset.findMany();
    console.log(asset, "All asset data");
    return NextResponse.json(
      {
        message: "asset fetch successfully",
        data: {
          asset: asset || {},
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
