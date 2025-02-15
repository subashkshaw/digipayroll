"use client";
import RightModel from "@/app/components/rightModel";
import React, { useEffect, useState } from "react";
import CustomTable from "@/app/components/customTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux";
import {
  deleteAttendance,
  getAttendance,
  markAttendance,
} from "@/app/redux/slices/attendance.slice";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Attendance = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user, "user data");

  const {
    data: attendance,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.attendance);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Mark Attendance");
  const [formData, setFormData] = React.useState({
    eid: "",
    userId: "",
    organizationId: "",
    location: "",
    shift: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
      eid: user.eid,
      userId: user.id,
      organizationId: user.organizationId,
    }));
  };
  console.log(formData, "form ");
  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Mark Attendance");
  };

  const ip = {
    fields: [
      {
        fieldName: "Clock In",
        name: "clockin",
        type: "date",
        placeholder: "Enter Clock In",
        onChange: (value: string) => handleChange("clockin", value),
      },
      {
        fieldName: "Clock Out",
        name: "clockout",
        type: "date",
        placeholder: "Enter Clock In",
        onChange: (value: string) => handleChange("clockout", value),
      },
      {
        fieldName: "Location",
        name: "location",
        type: "text",
        placeholder: "Enter Location",
        onChange: (value: string) => handleChange("location", value),
      },
      {
        fieldName: "Shift",
        name: "shift",
        type: "select",
        placeholder: "Select Shift",
        options: [
          { label: "Morning", value: "morning" },
          { label: "Day", value: "day" },
          { label: "Evening", value: "evening" },
          { label: "Night", value: "night" },
          { label: "Split", value: "split" },
          { label: "Rotational", value: "rotational" },
          { label: "Flexible", value: "flexible" },
        ],
        onChange: (value: string) => handleChange("shift", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(markAttendance(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding attendance:", error);
    }
  };
  // Handle editing a attendance
  const handleEdit = (attendance: any) => {
    setTitle("Edit Attendance");
    setFormData(attendance); // Populate form with attendance data
    console.log(attendance, "sdbh");

    setOpen(true);
  };
  // Handle deleting a attendance
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteAttendance(id)).unwrap();
      console.log("Attendance deleted successfully");
    } catch (error) {
      console.error("Error deleting attendance:", error);
    }
  };
  useEffect(() => {
    dispatch(getAttendance());
  }, [dispatch]);

  const columns = [
    { field: "eid", headerName: "Emp.ID", sortable: true },
    { field: "clockin", headerName: "Clock In", sortable: true },
    { field: "clockout", headerName: "Clock Out", sortable: true },
    { field: "location", headerName: "Location", sortable: true },
    { field: "shift", headerName: "Shift", sortable: true },
    { field: "status", headerName: "Status", sortable: true },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: (params: any) => (
        <div className="flex items-center space-x-2">
          <CiEdit
            size={20}
            className="cursor-pointer text-blue-600 mr-2"
            onClick={() => handleEdit(params.row)}
          />
          <MdDeleteOutline
            size={20}
            className="cursor-pointer text-red-600"
            onClick={() => handleDelete(params.row.id)}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      {open && (
        <RightModel
          ip={ip}
          title={title}
          submit={handleSubmit}
          close={() => setOpen(false)}
        />
      )}
      <div className="flex flex-col items-end">
        <button
          onClick={handleRightModel}
          className="border-2 border-indigo-400 p-2 rounded-md text-xs"
        >
          Mark Attendance
        </button>
      </div>

      <CustomTable
        columns={columns}
        data={attendance}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Attendance;
