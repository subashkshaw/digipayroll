import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "Leave ID is required" },
        { status: 400 }
      );
    }
    // Check if the leave exists
    const existingLeave = await prisma.leave.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingLeave) {
      return NextResponse.json({ error: "Leave not found" }, { status: 404 });
    }
    console.log("Found leave:", existingLeave);
    // Delete the leave using the converted ObjectId
    const deletedLeave = await prisma.leave.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted leave:", deletedLeave);

    return NextResponse.json(
      { message: "Leave deleted successfully", data: deletedLeave },
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
