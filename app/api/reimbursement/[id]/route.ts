import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "Reimbursement ID is required" },
        { status: 400 }
      );
    }
    // Check if the reimbursement exists
    const existingReimbursement = await prisma.reimbursement.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingReimbursement) {
      return NextResponse.json(
        { error: "Reimbursement not found" },
        { status: 404 }
      );
    }
    console.log("Found reimbursement:", existingReimbursement);
    // Delete the reimbursement using the converted ObjectId
    const deletedReimbursement = await prisma.reimbursement.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted reimbursement:", deletedReimbursement);

    return NextResponse.json(
      {
        message: "Reimbursement deleted successfully",
        data: deletedReimbursement,
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
