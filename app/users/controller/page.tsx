import LineChart from "@/app/components/lineChart";
import PieChart from "@/app/components/pieChart";
import React from "react";
import {
  PiUserCircleGear,
  PiCassetteTapeLight,
  PiClockCountdownFill,
} from "react-icons/pi";
import {
  MdOutlineSupervisedUserCircle,
  MdOutlineLockPerson,
} from "react-icons/md";
import { BsCalendar2Week, BsReceiptCutoff } from "react-icons/bs";
import { RiRefund2Line } from "react-icons/ri";
import { LiaFileInvoiceDollarSolid, LiaChartPieSolid } from "react-icons/lia";
import { GiAirplaneDeparture } from "react-icons/gi";
import { LuCalendarRange } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { HiOutlineIdentification } from "react-icons/hi2";
import { TbCashRegister } from "react-icons/tb";
import Link from "next/link";

const Controller = () => {
  const cards2 = [
    { id: 1, label: "Approved Users", count: 120 },
    { id: 2, label: "Rejected Users", count: 25 },
    { id: 3, label: "Blocked Users", count: 15 },
    { id: 4, label: "New Users", count: 35 },
    { id: 5, label: "Pending Users", count: 50 },
    { id: 6, label: "Total Users", count: 245 },
    { id: 7, label: "Full Time", count: 80 },
    { id: 8, label: "Under Probation", count: 10 },
    { id: 9, label: "Intern", count: 20 },
    { id: 10, label: "Contract", count: 30 },
    { id: 11, label: "Part-Time", count: 40 },
    { id: 12, label: "Volunteer", count: 5 },
  ];

  const cards = [
    { id: 1, title: "User", icon: <PiUserCircleGear />, link: "" },
    { id: 2, title: "Asset", icon: <PiCassetteTapeLight />, link: "" },
    {
      id: 3,
      title: "Roles",
      icon: <MdOutlineSupervisedUserCircle />,
      link: "./roles",
    },
    { id: 4, title: "Leave", icon: <BsCalendar2Week />, link: "" },
    { id: 5, title: "Attendance", icon: <PiClockCountdownFill />, link: "" },
    { id: 6, title: "Payroll", icon: <LiaFileInvoiceDollarSolid />, link: "" },
    { id: 7, title: "Reimbursement", icon: <RiRefund2Line />, link: "" },
    { id: 8, title: "Travel", icon: <GiAirplaneDeparture />, link: "" },
    {
      id: 9,
      title: "Organisation",
      icon: <GoOrganization />,
      link: "./organization",
    },
    { id: 10, title: "Holidays", icon: <LuCalendarRange />, link: "" },
    {
      id: 11,
      title: "User Permission",
      icon: <MdOutlineLockPerson />,
      link: "./roles/user-permission",
    },
    { id: 12, title: "Documents", icon: <HiOutlineIdentification />, link: "" },
    { id: 13, title: "TDS", icon: <BsReceiptCutoff />, link: "" },
    { id: 14, title: "Regime", icon: <TbCashRegister />, link: "./regime" },
    {
      id: 15,
      title: "PayStructure",
      icon: <LiaChartPieSolid />,
      link: "./payroll/paystructure",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* 80% Section */}
      <div className="w-4/5 p-4 bg-white">
        <div className="flex space-x-4">
          {/* Line Chart */}
          <div className="w-3/5 shadow-md rounded-lg p-4 bg-white">
            <LineChart />
          </div>
          {/* Pie Chart */}
          <div className="w-2/5 shadow-md rounded-lg bg-white">
            <PieChart data={cards2} />
          </div>
        </div>
      </div>

      {/* 20% Section */}
      <div className="w-1/5 p-4 bg-white overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Manage</h3>
        <div className="space-y-2">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="flex items-center p-3 bg-white shadow-md rounded-lg border border-gray-300"
            >
              <div className="text-2xl mr-3">{card.icon}</div>
              <div className="text-base font-medium">{card.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Controller;
