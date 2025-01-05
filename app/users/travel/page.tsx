"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import { addTravel, getTravels } from "@/app/redux/slices/travel.slice";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Travel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user, "user data");

  const {
    data: travel,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.travel);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Travel Request");

  const [formData, setFormData] = React.useState({
    eid: "",
    userId: "",
    type: "",
    mode: "",
    doj: "",
    source: "",
    destination: "",
    remarks: "",
    approver: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
      eid: user.eid,
      userId: user.id,
    }));
  };
  console.log(formData, "form ");

  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Travel Request");
  };

  const ip = {
    fields: [
      {
        fieldName: "Travel Type",
        name: "type",
        type: "select",
        placeholder: "Select Type",
        options: [
          { label: "Local", value: "local" },
          { label: "Domestic", value: "domestic" },
          { label: "International", value: "international" },
        ],
        onChange: (value: string) => handleChange("type", value),
      },
      {
        fieldName: "Travel Mode",
        name: "mode",
        type: "select",
        placeholder: "Select Mode",
        options: [
          { label: "Cab", value: "cab" },
          { label: "Bus", value: "bus" },
          { label: "Train", value: "train" },
          { label: "Airline", value: "airline" },
          { label: "Hybrid", value: "hybrid" },
        ],
        onChange: (value: string) => handleChange("mode", value),
      },
      {
        fieldName: "Travelling Date",
        name: "doj",
        type: "date",
        placeholder: "Select Date",
        onChange: (value: string) => handleChange("doj", value),
      },
      {
        fieldName: "Source",
        name: "source",
        type: "select",
        placeholder: "Select Source",
        options: [
          { label: "Kolkata", value: "kolkata" },
          { label: "Hyderabad", value: "hyderabad" },
          { label: "Bangalore", value: "bangalore" },
          { label: "New Delhi", value: "new_delhi" },
          { label: "Mumbai", value: "mumbai" },
          { label: "Pune", value: "pune" },
        ],
        onChange: (value: string) => handleChange("source", value),
      },
      {
        fieldName: "Destination",
        name: "destination",
        type: "select",
        placeholder: "Select Destination",
        options: [
          { label: "Kolkata", value: "kolkata" },
          { label: "Hyderabad", value: "hyderabad" },
          { label: "Bangalore", value: "bangalore" },
          { label: "New Delhi", value: "new_delhi" },
          { label: "Mumbai", value: "mumbai" },
          { label: "Pune", value: "pune" },
        ],
        onChange: (value: string) => handleChange("destination", value),
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
          { label: "Two", value: "Two" },
        ],
        onChange: (value: string) => handleChange("approver", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(addTravel(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  useEffect(() => {
    dispatch(getTravels());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "type", headerName: "Travel Type", sortable: true },
    { field: "mode", headerName: "Mode ", sortable: true },
    { field: "doj", headerName: "D.O.J", sortable: true },
    { field: "source", headerName: "Source", sortable: true },
    { field: "destination", headerName: "Destination", sortable: true },
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
          Travel Request
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={travel}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Travel;
