"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import {
  addStructure,
  deleteStructure,
  getStructure,
} from "@/app/redux/slices/paystructure.slice";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
const PayStructure = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const {
    data: paystructure,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.paystructure);
  console.log(paystructure, "vgvhgv");

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Add Structure");

  // Form state for user creation
  const [formData, setFormData] = React.useState({
    organizationId: "",
    component: "",
    percentage: "",
    isTaxable: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
      organizationId: user?.organizationId,
    }));
  };
  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Add Structure");
  };

  const ip = {
    fields: [
      {
        fieldName: "Component",
        name: "component",
        type: "select",
        placeholder: "Select Component",
        options: [
          { label: "Basic", value: "basic" },
          { label: "HRA", value: "hra" },
          { label: "LTA", value: "lta" },
          { label: "PF", value: "pf" },
        ],
        onChange: (value: string) => handleChange("component", value),
      },
      {
        fieldName: "Percentage",
        name: "percentage",
        type: "text",
        placeholder: "Enter Percentage",
        onChange: (value: string) => handleChange("percentage", value),
      },
      {
        fieldName: "IsTaxable",
        name: "isTaxable",
        type: "select",
        placeholder: "Select Taxable",
        options: [
          { label: "Yes", value: "true" },
          { label: "No", value: "false" },
        ],
        onChange: (value: string) => handleChange("isTaxable", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(addStructure(formData)).unwrap();
      setOpen(false);
      // dispatch(getPayStructure());
    } catch (error) {
      console.error("Error adding paystructure:", error);
    }
  };
  // Handle editing a paystructure
  const handleEdit = (paystructure: any) => {
    setTitle("Edit Pay Structure");
    setFormData(paystructure); // Populate form with paystructure data
    console.log(paystructure, "sdbh");

    setOpen(true);
  };

  // Handle deleting a paystructure
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteStructure(id)).unwrap();
      console.log("Paystructure deleted successfully");
    } catch (error) {
      console.error("Error deleting paystructure:", error);
    }
  };
  useEffect(() => {
    console.log("dispath before");

    dispatch(getStructure());
    console.log("dispath after");
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "component", headerName: "Component Name", sortable: true },
    { field: "percentage", headerName: "Percentage", sortable: true },
    {
      field: "isTaxable",
      headerName: "Is Taxable",
      sortable: true,
      renderCell: (params: any) => {
        return params.row.isTaxable ? "Yes" : "No";
      },
    },
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
  console.log(columns, "columns");

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
          Add Structure
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={paystructure}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default PayStructure;
