import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const { identifier, password } = await request.json();
    console.log("Received identifier:", identifier);
    console.log("Received password:", password);

    // Find user by email or mobile number
    const user = await prisma.users.findFirst({
      where: {
        OR: [{ email: identifier }, { mob_number: identifier }],
      },
    });

    if (!user) {
      console.log("User not found");
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    console.log("User found:", user);

    // Check password
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    console.log("Password is valid:", passwordIsValid);

    if (!passwordIsValid) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "your-secret-key",
      {
        expiresIn: 86400, // 24 hours
      }
    );

    return NextResponse.json(
      {
        id: user.id,
        eid: user.eid || "",
        name: user.name || "",
        email: user.email,
        mob_number: user.mob_number,
        accessToken: token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the login request" },
      { status: 500 }
    );
  }
}
