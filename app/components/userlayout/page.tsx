"use client";
import TopNav from "../nav";
import Sidebar from "../sidebar/page";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen p-3">
      <Sidebar />
      <div className={`flex-1 h-screen`}>
        <TopNav />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
