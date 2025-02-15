import AnniversaryCard from "@/app/components/anniversaryCard";
import BirthdayCard from "@/app/components/birthdayCard";
import HolidayCard from "@/app/components/holidayCard";
import InfoCard from "@/app/components/infoCard";
import {
  BsPersonCheck,
  BsPersonX,
  BsPersonSlash,
  BsPersonAdd,
  BsPersonExclamation,
} from "react-icons/bs";
import { PiUsersThree, PiClockUser } from "react-icons/pi";
import {
  LiaUserClockSolid,
  LiaFileContractSolid,
  LiaBusinessTimeSolid,
} from "react-icons/lia";
import { GiShakingHands, GiSandsOfTime } from "react-icons/gi";
import PieChart from "@/app/components/pieChart";
const Dashboard = () => {
  const cards = [
    {
      id: 1,
      icon: <BsPersonCheck />,
      label: "Approved Users",
      value: "approved_users",
      description: "Users who are approved.",
      count: 120,
    },
    {
      id: 2,
      icon: <BsPersonX />,
      label: "Rejected Users",
      value: "rejected_users",
      description: "Users who are rejected.",
      count: 25,
    },
    {
      id: 3,
      icon: <BsPersonSlash />,
      label: "Blocked Users",
      value: "blocked_users",
      description: "Users who are blocked.",
      count: 15,
    },
    {
      id: 4,
      icon: <BsPersonAdd />,
      label: "New Users",
      value: "new_users",
      description: "Users who recently joined.",
      count: 35,
    },
    {
      id: 5,
      icon: <BsPersonExclamation />,
      label: "Pending Users",
      value: "pending_users",
      description: "Users awaiting approval.",
      count: 50,
    },
    {
      id: 6,
      icon: <PiUsersThree />,
      label: "Total Users",
      value: "total_users",
      description: "All registered users.",
      count: 245,
    },
    {
      id: 7,
      icon: <LiaBusinessTimeSolid />,
      label: "Full Time",
      value: "full_time",
      description: "Users employed full-time.",
      count: 80,
    },
    {
      id: 8,
      icon: <GiSandsOfTime />,
      label: "Under Probation",
      value: "under_probation",
      description: "Users currently under probation.",
      count: 10,
    },
    {
      id: 9,
      icon: <PiClockUser />,
      label: "Intern",
      value: "intern",
      description: "Intern users working temporarily.",
      count: 20,
    },
    {
      id: 10,
      icon: <LiaFileContractSolid />,
      label: "Contract",
      value: "contract",
      description: "Users working on a contract basis.",
      count: 30,
    },
    {
      id: 11,
      icon: <LiaUserClockSolid />,
      label: "Part-Time",
      value: "part_time",
      description: "Users employed part-time.",
      count: 40,
    },
    {
      id: 12,
      icon: <GiShakingHands />,
      label: "Volunteer",
      value: "volunteer",
      description: "Users contributing as volunteers.",
      count: 5,
    },
  ];
  return (
    <div className=" space-y-8">
      {/* InfoCard Section (100% Width) */}
      <div className="w-full">
        <InfoCard data={cards} />
      </div>
      <div className="flex w-full gap-4">
        <div className="w-4/6">
          <PieChart data={cards} />
        </div>
        <div className="w-2/6 flex flex-col space-y-4">
          <BirthdayCard />
          <AnniversaryCard />
          <HolidayCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
