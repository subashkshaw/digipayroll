"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import {
  addPayroll,
  deletePayroll,
  getPayroll,
} from "@/app/redux/slices/payroll.slice";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
const Payroll = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const {
    data: payroll,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.payroll);
  console.log(payroll, "data");

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Add Payroll");

  // Form state for user creation
  const [formData, setFormData] = React.useState({
    eid: "",
    userId: "",
    organizationId: "",
    pay_month: "",
    pay_year: "",
    gross_pay: "",
    net_pay: "",
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
    setTitle("Add Payroll");
  };

  const ip = {
    fields: [
      {
        fieldName: "Month",
        name: "pay_month",
        type: "date",
        placeholder: "Select Month",
        onChange: (value: string) => handleChange("pay_month", value),
      },
      {
        fieldName: "Year",
        name: "pay_year",
        type: "text",
        placeholder: "Enter Year",
        onChange: (value: string) => handleChange("pay_year", value),
      },
      {
        fieldName: "Gross Pay",
        name: "gross_pay",
        type: "text",
        placeholder: "Enter Gross Pay",
        onChange: (value: string) => handleChange("gross_pay", value),
      },
      {
        fieldName: "Net Pay",
        name: "net_pay",
        type: "text",
        placeholder: "Enter Net Pay",
        onChange: (value: string) => handleChange("net_pay", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(addPayroll(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding payroll:", error);
    }
  };
  // Handle editing a payroll
  const handleEdit = (payroll: any) => {
    setTitle("Edit Payroll");
    setFormData(payroll); // Populate form with payroll data
    console.log(payroll, "payroll");

    setOpen(true);
  };

  // Handle deleting a payroll
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deletePayroll(id)).unwrap();
      console.log("Payroll deleted successfully");
    } catch (error) {
      console.error("Error deleting payroll:", error);
    }
  };
  useEffect(() => {
    dispatch(getPayroll());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "eid", headerName: "EID", sortable: true },
    { field: "pay_month", headerName: "Payroll Month", sortable: true },
    { field: "pay_year", headerName: "Payroll Year", sortable: true },
    { field: "gross_pay", headerName: "Gross Pay", sortable: true },
    { field: "net_pay", headerName: "Net Pay", sortable: true },
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
          Add Payroll
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={payroll}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Payroll;
