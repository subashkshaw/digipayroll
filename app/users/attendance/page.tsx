"use client";
import RightModel from "@/app/components/rightModel";
import React, { useEffect, useState } from "react";
import CustomTable from "@/app/components/customTable";
import axios from "axios";
type Field = {
  fieldName: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (value: string) => void;
  options?: string[];
};

type IpType = {
  fields: Field[];
};
const Attendance = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Edit Attendance");
  const [success, setSuccess] = useState(false);
  const [attendance, setAttendance] = useState([]);

  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Edit Attendance");
  };
  const [clockin, setClockIn] = useState("");
  const [clockout, setClockOut] = useState("");
  const [location, setLocation] = useState("");
  const [shift, setShift] = useState("");

  // Handlers for input changes
  const handleClockIn = (value: string) => setClockIn(value);
  const handleClockOut = (value: string) => setClockOut(value);
  const handleLocation = (value: string) => setLocation(value);
  const handleShift = (value: string) => setShift(value);

  const ip: IpType = {
    fields: [
      {
        fieldName: "Clock In",
        name: "clockin",
        type: "text",
        placeholder: "Enter Clock In",
        onChange: handleClockIn,
      },
      {
        fieldName: "Clock Out",
        name: "clockout",
        type: "text",
        placeholder: "Enter Clock In",
        onChange: handleClockOut,
      },
      {
        fieldName: "Location",
        name: "location",
        type: "text",
        placeholder: "Enter Location",
        onChange: handleLocation,
      },
      {
        fieldName: "Shift",
        name: "",
        type: "select",
        placeholder: "Select Shift",
        options: [
          "Morning",
          "Day",
          "Evening",
          "Night",
          "Split",
          "Rotational",
          "Flexible",
        ],
        onChange: handleShift,
      },
    ],
  };
  const eid = "";
  const handleSubmit = async () => {
    const attendanceData = {
      eid,
      clockin,
      clockout,
      location,
      shift,
    };
    console.log("Sending payload:", attendanceData);
    try {
      setSuccess(false);
      await axios.post("/api/attendance", attendanceData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.error("Error creating attendance:", error);
    }
  };
  const fetchData = async () => {
    try {
      setSuccess(false);
      const response = await axios.get("/api/attendance/all");
      console.log(response.data.attendance, "Data");
      setAttendance(response.data.attendance);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.error("Error creating attendance:", error);
    }
  };
  useEffect(() => {
    fetchData();
    setOpen(false);
  }, []);
  const columns = [
    { field: "eid", headerName: "Emp.ID", sortable: true },
    { field: "clockin", headerName: "Clock In", sortable: true },
    { field: "clockout", headerName: "Clock Out", sortable: true },
    { field: "location", headerName: "Location", sortable: true },
    { field: "shift", headerName: "Shift", sortable: true },
    { field: "status", headerName: "Status", sortable: true },
  ];
  return (
    <>
      {open && <RightModel ip={ip} title={title} submit={handleSubmit} />}
      <div className="flex flex-col items-end">
        <button
          onClick={handleRightModel}
          className="border-2 border-indigo-400 p-2 rounded-md text-xs"
        >
          Edit Attendance
        </button>
      </div>

      <CustomTable columns={columns} data={attendance} success={success} />
    </>
  );
};

export default Attendance;
