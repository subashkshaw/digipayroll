"use client";
import TopNav from "./nav";
import Sidebar from "./sidebar/page";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen p-3">
      <Sidebar />
      <main className="flex-1 h-screen overflow-hidden">
        <TopNav />
        <div className="p-4 overflow-auto h-full">{children}</div>
      </main>
    </div>
  );
};

export default UserLayout;
