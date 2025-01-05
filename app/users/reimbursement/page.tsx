"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import {
  addReimbursement,
  getReimbursements,
} from "@/app/redux/slices/reimbursement.slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user, "user data");

  const {
    data: reimbursements,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.reimbursement);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Reimbursement Request");

  const [formData, setFormData] = React.useState({
    eid: "",
    userId: "",
    type: "",
    amount: "",
    bill_date: "",
    description: "",
    bill_receipt: "",
    remarks: "",
    approver: "",
    approve_amount: "",
  });
  // Handlers for input changes
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
    setTitle("Reimbursement Request");
  };

  const ip = {
    fields: [
      {
        fieldName: "Reimbursement Type",
        name: "type",
        type: "select",
        placeholder: "Select Type",
        options: [
          { label: "Meal", value: "meal" },
          { label: "Travel", value: "travel" },
          { label: "Accommodation", value: "accommodation" },
        ],
        onChange: (value: string) => handleChange("type", value),
      },
      {
        fieldName: "Amount",
        name: "amount",
        type: "text",
        placeholder: "Enter Amount",
        onChange: (value: string) => handleChange("amount", value),
      },
      {
        fieldName: "Bill Date",
        name: "bill_date",
        type: "date",
        placeholder: "Enter Date",
        onChange: (value: string) => handleChange("bill_date", value),
      },
      {
        fieldName: "Description",
        name: "description",
        type: "textarea",
        placeholder: "Enter Description",
        onChange: (value: string) => handleChange("description", value),
      },
      {
        fieldName: "Bill",
        name: "bill_receipt",
        type: "file",
        placeholder: "Upload Bill",
        onChange: (value: string) => handleChange("bill_receipt", value),
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
      await dispatch(addReimbursement(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  useEffect(() => {
    dispatch(getReimbursements());
  }, [dispatch]);

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

      <CustomTable
        columns={columns}
        data={reimbursements}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Reimbursement;
