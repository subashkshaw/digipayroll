"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineSettings,
  MdOutlinePowerSettingsNew,
} from "react-icons/md";
import { AppDispatch, RootState } from "@/app/redux";
import { logout } from "@/app/redux/slices/auth.slice";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );
  const handleSignOut = () => {
    if (confirm("Are you sure you want to log out?")) {
      dispatch(logout());
    }
    router.push("/login");
  };
  // Redirect to dashboard if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/users/dashboard");
    } else {
      router.push("/login");
    }
  }, [isAuthenticated, router]);
  return (
    <>
      <nav className="bg-white rounded-md ml-3">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-14 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"></div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <IoNotificationsCircleOutline
                  size={20}
                  className="rounded-full text-white"
                />
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <RxAvatar size={28} className="rounded-full text-white" />
                  </button>
                </div>
                {open && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      <MdOutlineAdminPanelSettings className="mr-1" /> Profile
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      <MdOutlineSettings className="mr-1" />
                      Settings
                    </a>
                    <a
                      href="#"
                      onClick={handleSignOut}
                      className="flex items-center px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      <MdOutlinePowerSettingsNew className="mr-1" />
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
