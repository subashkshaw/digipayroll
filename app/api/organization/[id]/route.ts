import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "Organization ID is required" },
        { status: 400 }
      );
    }
    // Check if the organization exists
    const existingOrganization = await prisma.organization.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingOrganization) {
      return NextResponse.json(
        { error: "Organization not found" },
        { status: 404 }
      );
    }
    console.log("Found organization:", existingOrganization);
    // Delete the organization using the converted ObjectId
    const deletedOrganization = await prisma.organization.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted organization:", deletedOrganization);

    return NextResponse.json(
      {
        message: "Organization deleted successfully",
        data: deletedOrganization,
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
