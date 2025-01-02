"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import { addRole, getRoles } from "@/app/redux/slices/roles.slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Roles = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: roles,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.role);
  console.log(roles, "vgvhgv");

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Add Role");

  // Form state for user creation
  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Add Role");
  };

  const ip = {
    fields: [
      {
        fieldName: "Role Name",
        name: "name",
        type: "text",
        placeholder: "Enter Name",
        onChange: (value: string) => handleChange("name", value),
      },
      {
        fieldName: "Description",
        name: "description",
        type: "textarea",
        placeholder: "Enter Description",
        onChange: (value: string) => handleChange("description", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(addRole(formData)).unwrap();
      setOpen(false);
      // dispatch(getRoles());
    } catch (error) {
      console.error("Error adding role:", error);
    }
  };

  useEffect(() => {
    console.log("dispath before");

    dispatch(getRoles());
    console.log("dispath after");
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "name", headerName: "Role Name", sortable: true },
    { field: "description", headerName: "Description", sortable: true },
  ];
  console.log(columns, "columns");

  return (
    <>
      {open && <RightModel ip={ip} title={title} submit={handleSubmit} />}
      <div className="flex flex-col items-end">
        <button
          onClick={handleRightModel}
          className="border-2 border-indigo-400 p-2 rounded-md text-xs"
        >
          Add Role
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={roles}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Roles;
