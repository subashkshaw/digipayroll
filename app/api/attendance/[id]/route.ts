import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "Attendance ID is required" },
        { status: 400 }
      );
    }
    // Check if the attendance exists
    const existingAttendance = await prisma.attendance.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingAttendance) {
      return NextResponse.json(
        { error: "Attendance not found" },
        { status: 404 }
      );
    }
    console.log("Found attendance:", existingAttendance);
    // Delete the attendance using the converted ObjectId
    const deletedAttendance = await prisma.attendance.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted attendance:", deletedAttendance);

    return NextResponse.json(
      { message: "Attendance deleted successfully", data: deletedAttendance },
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
