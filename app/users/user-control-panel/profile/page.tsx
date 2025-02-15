"use client";
import Bank from "@/app/components/user-info/bank";
import Basic from "@/app/components/user-info/basic";
import Experience from "@/app/components/user-info/experience";
import React, { useState } from "react";
import Identity from "@/app/components/user-info/identity";
import Resignation from "@/app/components/user-info/resignation";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("basic");

  return (
    <div>
      <div className="w-full flex gap-4">
        <div className="w-4/5 p-4 border">
          {activeSection === "basic" && <Basic />}
          {activeSection === "bank" && <Bank />}
          {activeSection === "qualification" && <Resignation />}
          {activeSection === "experience" && <Experience />}
          {activeSection === "identity" && <Identity />}
          {activeSection === "resignation" && <Resignation />}
        </div>

        {/* Sidebar Menu */}
        <div className="w-1/5">
          <ul className="flex flex-col gap-2 border-l">
            {[
              "basic",
              "bank",
              "qualification",
              "experience",
              "identity",
              "resignation",
            ].map((section) => (
              <li
                key={section}
                className="-ml-px flex flex-col items-start gap-2"
              >
                <button
                  className={`pl-5 sm:pl-4 text-gray-600 hover:text-gray-950 ${
                    activeSection === section
                      ? "font-semibold text-gray-950 border-l-2 border-gray-950"
                      : ""
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
