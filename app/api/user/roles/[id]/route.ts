import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "Role ID is required" },
        { status: 400 }
      );
    }
    // Check if the role exists
    const existingRole = await prisma.roles.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingRole) {
      return NextResponse.json({ error: "Role not found" }, { status: 404 });
    }
    console.log("Found role:", existingRole);
    // Delete the role using the converted ObjectId
    const deletedRole = await prisma.roles.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted role:", deletedRole);

    return NextResponse.json(
      {
        message: "Role deleted successfully",
        data: deletedRole,
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
