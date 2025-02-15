"use client";
import RightModel from "@/app/components/rightModel";
import React, { useEffect, useState } from "react";
import CustomTable from "@/app/components/customTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux";
import {
  applyLeave,
  deleteLeave,
  getLeaves,
} from "@/app/redux/slices/leave.slice";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Leave = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user, "user data");

  const {
    data: leaves,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.leave);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Apply Leave");

  const [formData, setFormData] = React.useState({
    eid: "",
    userId: "",
    organizationId: "",
    type: "",
    shift: "",
    start_date: "",
    end_date: "",
    duration: 0,
    reason: "",
    remarks: "",
    approver: "",
  });
  // Handlers for input changes
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
    setTitle("Create Leave");
  };

  const ip = {
    fields: [
      {
        fieldName: "Leave Type",
        name: "type",
        type: "select",
        placeholder: "Select Type",
        options: [
          { label: "Casual", value: "casual" },
          { label: "Half Casual", value: "half_casual" },
          { label: "Sick", value: "sick" },
          { label: "Half Sick", value: "half_sick" },
        ],
        onChange: (value: string) => handleChange("type", value),
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
      {
        fieldName: "From",
        name: "start_date",
        type: "date",
        placeholder: "Enter Date",
        onChange: (value: string) => handleChange("start_date", value),
      },
      {
        fieldName: "To",
        name: "end_date",
        type: "date",
        placeholder: "Enter Date",
        onChange: (value: string) => handleChange("end_date", value),
      },
      {
        fieldName: "Duration",
        name: "duration",
        type: "text",
        placeholder: "Enter Duration",
        onChange: (value: string) => handleChange("duration", value),
      },
      {
        fieldName: "Reason",
        name: "reason",
        type: "textarea",
        placeholder: "Enter Reason",
        onChange: (value: string) => handleChange("reason", value),
      },
      {
        fieldName: "Remarks",
        name: "remarks",
        type: "textarea",
        placeholder: "Enter Remarks",
        onChange: (value: string) => handleChange("remarks", value),
      },
      {
        fieldName: "Approver",
        name: "approver",
        type: "select",
        placeholder: "Select Approver",
        options: [
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ],
        onChange: (value: string) => handleChange("approver", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(applyLeave(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding leave:", error);
    }
  };
  // Handle editing a leave
  const handleEdit = (leave: any) => {
    setTitle("Edit Leave");
    setFormData(leave); // Populate form with leave data
    console.log(leave, "sdbh");
    setOpen(true);
  };

  // Handle deleting a leave
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteLeave(id)).unwrap();
      console.log(id, "Leave deleted successfully");
    } catch (error) {
      console.error("Error deleting leave:", error);
    }
  };
  useEffect(() => {
    dispatch(getLeaves());
  }, [dispatch]);

  const columns = [
    { field: "eid", headerName: "Emp.ID", sortable: true },
    { field: "type", headerName: "Leave Type", sortable: true },
    { field: "shift", headerName: "Shift", sortable: true },
    { field: "start_date", headerName: "From", sortable: true },
    { field: "end_date", headerName: "To", sortable: true },
    { field: "duration", headerName: "Duration", sortable: true },
    { field: "reason", headerName: "Reason", sortable: true },
    { field: "remark", headerName: "Remark", sortable: true },
    { field: "approver", headerName: "Approver", sortable: true },
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
          Apply Leave
        </button>
      </div>

      <CustomTable
        columns={columns}
        data={leaves}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Leave;
