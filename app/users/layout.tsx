"use client";
import UserLayout from "@/app/components/userLayout";
import React from "react";
const User = ({ children }: { children: React.ReactNode }) => {
  return <UserLayout>{children}</UserLayout>;
};

export default User;
