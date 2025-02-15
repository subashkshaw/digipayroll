import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "Travel ID is required" },
        { status: 400 }
      );
    }
    // Check if the travel exists
    const existingTravel = await prisma.travel.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingTravel) {
      return NextResponse.json({ error: "Travel not found" }, { status: 404 });
    }
    console.log("Found travel:", existingTravel);
    // Delete the travel using the converted ObjectId
    const deletedTravel = await prisma.travel.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted travel:", deletedTravel);

    return NextResponse.json(
      {
        message: "Travel deleted successfully",
        data: deletedTravel,
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
