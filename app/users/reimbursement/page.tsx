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
const Reimbursement = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Reimbursement Request");
  const [success, setSuccess] = useState(false);
  const [reimbursement, setReimbursement] = useState([]);
  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Reimbursement Request");
  };
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [bill_date, setBillDate] = useState("");
  const [description, setDescription] = useState("");
  const [bill_receipt, setReceipt] = useState("");
  const [remarks, setRemarks] = useState("");
  const [approver, setApprover] = useState("");
  // Handlers for input changes
  const handleType = (value: string) => setType(value);
  const handleAmount = (value: string) => setAmount(value);
  const handleBillDate = (value: string) => setBillDate(value);
  const handleDescription = (value: string) => setDescription(value);
  const handleReceipt = (value: string) => setReceipt(value);
  const handleRemarks = (value: string) => setRemarks(value);
  const handleApprover = (value: string) => setApprover(value);
  const ip: IpType = {
    fields: [
      {
        fieldName: "Reimbursement Type",
        name: "type",
        type: "select",
        placeholder: "Select Type",
        options: ["Meal", "Travel", "Accommodation"],
        onChange: handleType,
      },
      {
        fieldName: "Amount",
        name: "amount",
        type: "text",
        placeholder: "Enter Amount",
        onChange: handleAmount,
      },
      {
        fieldName: "Bill Date",
        name: "bill_date",
        type: "text",
        placeholder: "Enter Date",
        onChange: handleBillDate,
      },
      {
        fieldName: "Description",
        name: "",
        type: "textarea",
        placeholder: "Enter Description",
        onChange: handleDescription,
      },
      {
        fieldName: "Bill",
        name: "bill_receipt",
        type: "file",
        placeholder: "Upload Bill",
        onChange: handleReceipt,
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
        options: ["One", "Two"],
        onChange: handleApprover,
      },
    ],
  };
  const eid = "";
  const handleSubmit = async () => {
    const reimbursementData = {
      eid,
      type,
      amount,
      bill_date,
      description,
      bill_receipt,
      remarks,
      approver,
    };
    console.log("Sending payload:", reimbursementData);
    try {
      setSuccess(false);
      await axios.post("/api/reimbursement", reimbursementData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.error("Error creating reimbursement:", error);
    }
  };
  const fetchData = async () => {
    try {
      setSuccess(false);
      const response = await axios.get("/api/reimbursement/all");
      console.log(response.data.reimbursement, "Data");
      setReimbursement(response.data.reimbursement);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.error("Error creating reimbursement:", error);
    }
  };
  useEffect(() => {
    fetchData();
    setOpen(false);
  }, []);
  const columns = [
    { field: "eid", headerName: "Emp.ID", sortable: true },
    { field: "type", headerName: "Reimburdsement Type", sortable: true },
    { field: "amount", headerName: "Amount", sortable: true },
    { field: "bill_date", headerName: "Bill Date", sortable: true },
    { field: "description", headerName: "Description", sortable: true },
    { field: "bill_receipt", headerName: "Bill Receipt", sortable: true },
    { field: "remark", headerName: "Remark", sortable: true },
    { field: "approver", headerName: "Approver", sortable: true },
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
          Reimbursement
        </button>
      </div>

      <CustomTable columns={columns} data={reimbursement} success={success} />
    </>
  );
};

export default Reimbursement;
