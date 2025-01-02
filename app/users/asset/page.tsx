"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import { addAsset, getAsset } from "@/app/redux/slices/asset.slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Asset = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: asset,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.asset);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Asset Request");
  // Form state for user creation
  const [formData, setFormData] = React.useState({
    eid: "",
    type: "",
    request_type: "",
    completion_date: "",
    location: "",
    remarks: "",
    approver: "",
  });
  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Asset Request");
  };

  const ip = {
    fields: [
      {
        fieldName: "Asset Type",
        name: "type",
        type: "select",
        placeholder: "Select Type",
        options: ["Laptop", "Mouse", "Keyboard"],
        onChange: (value: string) => handleChange("type", value),
      },
      {
        fieldName: "Request Type",
        name: "request_type",
        type: "select",
        placeholder: "Select Type",
        options: ["Request", "Return"],
        onChange: (value: string) => handleChange("request_type", value),
      },
      {
        fieldName: "Completion Date",
        name: "completion_date",
        type: "text",
        placeholder: "Select Date",
        onChange: (value: string) => handleChange("completion_date", value),
      },
      {
        fieldName: "Location",
        name: "location",
        type: "select",
        placeholder: "Select Location",
        options: [
          "Kolkata",
          "Hyderabad",
          "Bangalore",
          "New Delhi",
          "Mumbai",
          "Pune",
        ],
        onChange: (value: string) => handleChange("location", value),
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
          "Kolkata",
          "Hyderabad",
          "Bangalore",
          "New Delhi",
          "Mumbai",
          "Pune",
        ],
        onChange: (value: string) => handleChange("approver", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(addAsset(formData)).unwrap();
      setOpen(false);
      dispatch(getAsset());
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  useEffect(() => {
    dispatch(getAsset());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "type", headerName: "Asset Type", sortable: true },
    { field: "request_type", headerName: "Request Type ", sortable: true },
    { field: "completion_date", headerName: "Completion Date", sortable: true },
    { field: "location", headerName: "Location", sortable: true },
    { field: "remarks", headerName: "Remarks", sortable: true },
    { field: "approver", headerName: "Approver", sortable: true },
  ];
  return (
    <>
      {open && <RightModel ip={ip} title={title} submit={handleSubmit} />}
      <div className="flex flex-col items-end">
        <button
          onClick={handleRightModel}
          className="border-2 border-indigo-400 p-2 rounded-md text-xs"
        >
          Asset Request
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={asset}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Asset;
