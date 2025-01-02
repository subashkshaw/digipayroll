"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import {
  addOrganization,
  getOrganization,
} from "@/app/redux/slices/organization.slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Organization = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: organization,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.organization);
  console.log(organization, "data");

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Add Organization");

  // Form state for user creation
  const [formData, setFormData] = React.useState({
    oid: "",
    name: "",
    address: "",
    logo: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Add Organization");
  };

  const ip = {
    fields: [
      {
        fieldName: "OID",
        name: "oid",
        type: "text",
        placeholder: "Enter ID",
        onChange: (value: string) => handleChange("oid", value),
      },
      {
        fieldName: "Organization Name",
        name: "name",
        type: "text",
        placeholder: "Enter Name",
        onChange: (value: string) => handleChange("name", value),
      },
      {
        fieldName: "Address",
        name: "address",
        type: "textarea",
        placeholder: "Enter Address",
        onChange: (value: string) => handleChange("address", value),
      },
      {
        fieldName: "Upload Logo",
        name: "logo",
        type: "file",
        placeholder: "Upload File",
        onChange: (value: string) => handleChange("logo", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(addOrganization(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding organization:", error);
    }
  };

  useEffect(() => {
    dispatch(getOrganization());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "oid", headerName: "OID", sortable: true },
    { field: "name", headerName: "Organization Name", sortable: true },
    { field: "address", headerName: "Address", sortable: true },
    { field: "logo", headerName: "Logo", sortable: true },
  ];
  return (
    <>
      {open && <RightModel ip={ip} title={title} submit={handleSubmit} />}
      <div className="flex flex-col items-end">
        <button
          onClick={handleRightModel}
          className="border-2 border-indigo-400 p-2 rounded-md text-xs"
        >
          Add Organization
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={organization}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Organization;
