"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";
import { IoMdMore } from "react-icons/io";
import Link from "next/link";

type SidebarContextType = {
  expanded: boolean;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

type SidebarProps = {
  children: ReactNode;
};

const Menu = ({ children }: SidebarProps) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <aside
        className={` ${
          expanded ? "w-64" : "w-16"
        } transition-width duration-300`}
      >
        <nav className="h-full flex flex-col bg-white border-r rounded-md shadow-md">
          <div className="p-4 pb-2 flex justify-between items-center">
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100"
            >
              {expanded ? (
                <CgPushChevronLeft size={20} />
              ) : (
                <CgPushChevronRight size={20} />
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3 items-center">
            <RxAvatar className="w-10 h-10 rounded-md text-gray-600" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold text-gray-600">Subash Shaw</h4>
                <span className="text-xs text-gray-600">
                  subash.k.shaw@gmail.com
                </span>
              </div>
              <IoMdMore size={20} className="ml-2 cursor-pointer" />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Menu;

type ItemProps = {
  icon?: ReactNode;
  text?: string;
  active?: boolean;
  alert?: boolean;
  href: string;
};

export function Item({ icon, text, active, alert, href }: ItemProps) {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Item must be used within a SidebarContext.Provider");
  }

  const { expanded } = context;

  return (
    <Link href={href} passHref>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}
        {!expanded && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
