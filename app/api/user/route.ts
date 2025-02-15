import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(body, "body data");
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "Request body is empty" },
        { status: 400 }
      );
    }

    console.log("Received user data:", body);

    // Hash the password before saving
    const hashedPassword = bcrypt.hashSync(body.password, 8);

    const user = await prisma.users.create({
      data: {
        ...body,
        password: hashedPassword, // Save the hashed password
      },
    });
    console.log(user, "All user data");

    // Correct handling of response
    return NextResponse.json(
      { message: "User created successfully", data: user || {} },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the create request" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    console.log(body, "body data");
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "Request body is empty" },
        { status: 400 }
      );
    }

    console.log("Received user data:", body);
    const hashedPassword = bcrypt.hashSync(body.password, 8);

    const updateUser = await prisma.users.update({
      where: {
        id: body.id,
      },
      data: {
        eid: body.eid,
        name: body.name,
        email: body.email,
        password: hashedPassword,
        dob: body.dob,
        gender: body.gender,
        marital_status: body.marital_status,
        doj: body.doj,
        organizationId: body.organizationId,
        manager: body.manager,
        department: body.department,
        designation: body.designation,
        mob_number: body.mob_number,
        employment: body.employment,
        roleId: body.roleId,
        city: body.city,
        state: body.state,
        pin_code: body.pin_code,
        profile_pic: body.profile_pic,
        baseSalary: body.baseSalary,
      },
    });

    console.log("Updated user:", updateUser);

    return NextResponse.json(
      { message: "User updated successfully", data: updateUser || {} },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during PUT request:", error);
    return NextResponse.json(
      { error: "An error occurred while processing the update request" },
      { status: 500 }
    );
  }
}
