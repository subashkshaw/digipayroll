import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop()?.trim(); // Extract ID from URL

    if (!id) {
      return NextResponse.json(
        { error: "Asset ID is required" },
        { status: 400 }
      );
    }
    // Check if the asset exists
    const existingAsset = await prisma.asset.findUnique({
      where: { id: id }, // Prisma still expects a string, but it's stored as ObjectId
      select: { id: true },
    });

    if (!existingAsset) {
      return NextResponse.json({ error: "Asset not found" }, { status: 404 });
    }
    console.log("Found asset:", existingAsset);
    // Delete the asset using the converted ObjectId
    const deletedAsset = await prisma.asset.delete({
      where: { id: id }, // Use the same ID format used in findUnique()
    });

    console.log("Deleted asset:", deletedAsset);

    return NextResponse.json(
      { message: "Asset deleted successfully", data: deletedAsset },
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
