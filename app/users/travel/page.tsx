"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
const Travel = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Travel Request");
  const [success, setSuccess] = useState(false);
  const [travel, setTravel] = useState([]);

  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Travel Request");
  };
  const [type, setTravelType] = useState("");
  const [mode, setTravelMode] = useState("");
  const [doj, setTravelDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [approver, setApprover] = useState("");

  // Handlers for input changes
  const handleTravelType = (value: string) => setTravelType(value);
  const handleTravelMode = (value: string) => setTravelMode(value);
  const handleTravelDate = (value: string) => setTravelDate(value);
  const handleSource = (value: string) => setSource(value);
  const handleDestination = (value: string) => setDestination(value);
  const handleRemarks = (value: string) => setRemarks(value);
  const handleApprover = (value: string) => setApprover(value);

  const ip: IpType = {
    fields: [
      {
        fieldName: "Travel Type",
        name: "type",
        type: "select",
        placeholder: "Select Type",
        options: ["Local", "Domestic", "International"],
        onChange: handleTravelType,
      },
      {
        fieldName: "Travel Mode",
        name: "mode",
        type: "select",
        placeholder: "Select Mode",
        options: ["Cab", "Bus", "Train", "Airline", "Hybrid"],
        onChange: handleTravelMode,
      },
      {
        fieldName: "Travelling Date",
        name: "doj",
        type: "text",
        placeholder: "Select Date",
        onChange: handleTravelDate,
      },
      {
        fieldName: "Source",
        name: "source",
        type: "select",
        placeholder: "Select Source",
        options: [
          "Kolkata",
          "Hyderabad",
          "Bangalore",
          "New Delhi",
          "Mumbai",
          "Pune",
        ],
        onChange: handleSource,
      },
      {
        fieldName: "Destination",
        name: "destination",
        type: "select",
        placeholder: "Select Destination",
        options: [
          "Kolkata",
          "Hyderabad",
          "Bangalore",
          "New Delhi",
          "Mumbai",
          "Pune",
        ],
        onChange: handleDestination,
      },
      {
        fieldName: "Remarks",
        name: "remarks",
        type: "textarea",
        placeholder: "Enter Remarks",
        onChange: handleRemarks,
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
        onChange: handleApprover,
      },
    ],
  };
  const eid = "";
  const handleSubmit = async () => {
    const travelData = {
      eid,
      type,
      mode,
      doj,
      source,
      destination,
      remarks,
      approver,
    };
    console.log("Sending payload:", travelData);
    try {
      setSuccess(false);
      await axios.post("/api/travel", travelData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.error("Error creating travel request:", error);
    }
  };
  const fetchData = async () => {
    try {
      setSuccess(false);
      const response = await axios.get("/api/travel/all");
      console.log(response.data.travel, "Data");
      setTravel(response.data.travel);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.error("Error creating user:", error);
    }
  };
  useEffect(() => {
    fetchData();
    setOpen(false);
  }, []);
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
      <CustomTable columns={columns} data={travel} success={success} />
    </>
  );
};

export default Travel;
