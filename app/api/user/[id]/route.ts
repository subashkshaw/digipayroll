import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }
    // Check if the user exists
    const existingUser = await prisma.users.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.log("Found user:", existingUser);
    // Delete the user using the converted ObjectId
    const deletedUser = await prisma.users.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted user:", deletedUser);

    return NextResponse.json(
      { message: "User deleted successfully", data: deletedUser },
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
