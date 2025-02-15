"use client";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { PiClockCountdownFill, PiGameControllerLight } from "react-icons/pi";
import { BsCalendar2Week, BsReceiptCutoff } from "react-icons/bs";
import { LuCalendarRange } from "react-icons/lu";
import { RiRefund2Line } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { PiUserCircleGear } from "react-icons/pi";
import Menu, { Item } from "./items/page";

const Sidebar = () => {
  return (
    <>
      <Menu>
        <Item
          icon={<MdOutlineDashboardCustomize size={20} />}
          text="Dashboard"
          active
          href="/users/dashboard"
        />
        <Item
          icon={<PiUserCircleGear size={20} />}
          text="Manage"
          href="/users/user-control-panel"
        />
        <Item
          icon={<PiGameControllerLight size={20} />}
          text="Controller"
          href="/users/controller"
        />
        <Item
          icon={<PiClockCountdownFill size={20} />}
          text="Attendance"
          alert
          href="/users/attendance"
        />
        <Item
          icon={<BsCalendar2Week size={20} />}
          text="Leave"
          href="/users/leave"
        />
        <Item
          icon={<RiRefund2Line size={20} />}
          text="Reimbursement"
          href="/users/reimbursement"
        />
        <Item
          icon={<BsCalendar2Week size={20} />}
          text="Asset"
          href="/users/asset"
        />
        <Item
          icon={<GiAirplaneDeparture size={20} />}
          text="Travel"
          href="/users/travel"
        />
        <Item
          icon={<LiaFileInvoiceDollarSolid size={20} />}
          text="Payroll"
          href="/users/payroll"
        />
        <Item
          icon={<BsReceiptCutoff size={20} />}
          text="TDS"
          href="/users/tds"
        />
        <Item
          icon={<LuCalendarRange size={20} />}
          text="Holidays"
          href="/users/holiday"
        />
      </Menu>
    </>
  );
};

export default Sidebar;
