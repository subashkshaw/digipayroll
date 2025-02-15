import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "Paystructure ID is required" },
        { status: 400 }
      );
    }
    // Check if the paystructure exists
    const existingPaystructure = await prisma.payStructure.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingPaystructure) {
      return NextResponse.json(
        { error: "Paystructure not found" },
        { status: 404 }
      );
    }
    console.log("Found paystructure:", existingPaystructure);
    // Delete the paystructure using the converted ObjectId
    const deletedPaystructure = await prisma.payStructure.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted paystructure:", deletedPaystructure);

    return NextResponse.json(
      {
        message: "Paystructure deleted successfully",
        data: deletedPaystructure,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error during DELETE request:", error);

    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
