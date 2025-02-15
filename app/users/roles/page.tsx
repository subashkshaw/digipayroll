"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import { addRole, deleteRole, getRoles } from "@/app/redux/slices/roles.slice";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
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
  const { user } = useSelector((state: RootState) => state.auth);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Add Role");

  // Form state for user creation
  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
      organizationId: user.organizationId,
    }));
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
    } catch (error) {
      console.error("Error adding role:", error);
    }
  };
  // Handle editing a role
  const handleEdit = (role: any) => {
    setTitle("Edit Role");
    setFormData(role); // Populate form with role data
    console.log(role, "sdbh");

    setOpen(true);
  };

  // Handle deleting a role
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteRole(id)).unwrap();
      console.log("Role deleted successfully");
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };
  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "name", headerName: "Role Name", sortable: true },
    { field: "description", headerName: "Description", sortable: true },
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
