import UserLayout from "@/app/components/userlayout/page";
import React from "react";
const Users = ({ children }: { children: React.ReactNode }) => {
  return <UserLayout>{children}</UserLayout>;
};

export default Users;
