"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "@/app/redux/slices/users.slice";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const UserControlPanel = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.user);

  const { data: organization } = useSelector(
    (state: RootState) => state.organization
  );
  const { data: roles } = useSelector((state: RootState) => state.role);

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("Create User");

  // Form state for user creation and editing
  const [formData, setFormData] = React.useState({
    id: "", // Added ID field to differentiate between create and update
    eid: "",
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
    marital_status: "",
    doj: "",
    organizationId: "",
    manager: "",
    department: "",
    designation: "",
    mob_number: "",
    employment: "",
    roleId: "",
    city: "",
    state: "",
    pin_code: "",
    profile_pic: "",
    baseSalary: 0,
  });

  // Handler for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Handle opening the form for creating a new user
  const handleRightModel = () => {
    setFormData({
      id: "",
      eid: "",
      name: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      marital_status: "",
      doj: "",
      organizationId: "",
      manager: "",
      department: "",
      designation: "",
      mob_number: "",
      employment: "",
      roleId: "",
      city: "",
      state: "",
      pin_code: "",
      profile_pic: "",
      baseSalary: 0,
    });
    console.log("right model");

    setTitle("Create User");
    setOpen(true);
  };

  // Handle form submission (Create or Edit)
  const handleSubmit = async () => {
    try {
      if (formData.id) {
        await dispatch(updateUser(formData)).unwrap();
      } else {
        await dispatch(addUser(formData)).unwrap();
      }
      setOpen(false);
    } catch (error) {
      console.error("Error submitting user:", error);
    }
  };

  // Handle editing a user
  const handleEdit = (user: any) => {
    setTitle("Edit User");
    setFormData(user); // Populate form with user data
    console.log(user, "sdbh");
    setOpen(true);
  };

  // Handle deleting a user
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteUser(id)).unwrap();
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const ip = {
    fields: [
      {
        fieldName: "Emp. ID",
        name: "eid",
        type: "text",
        placeholder: "Enter Employee ID",
        defaultValue: formData.eid,
        onChange: (value: string) => handleChange("eid", value),
      },
      {
        fieldName: "Name",
        name: "name",
        type: "text",
        placeholder: "Enter Name",
        defaultValue: formData.name,
        onChange: (value: string) => handleChange("name", value),
      },
      {
        fieldName: "Email",
        name: "email",
        type: "text",
        placeholder: "Enter Email",
        defaultValue: formData.email,
        onChange: (value: string) => handleChange("email", value),
      },
      {
        fieldName: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter Password",
        defaultValue: formData.password,
        onChange: (value: string) => handleChange("password", value),
      },
      {
        fieldName: "D.O.B",
        name: "dob",
        type: "date",
        placeholder: "Enter Date Of Birth",
        defaultValue: formData.dob
          ? new Date(formData.dob).toISOString().split("T")[0]
          : "",
        onChange: (value: string) => handleChange("dob", value),
      },
      {
        fieldName: "Gender",
        name: "gender",
        type: "select",
        placeholder: "Select Gender",
        defaultValue: formData.gender,
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Others", value: "others" },
        ],
        onChange: (value: string) => handleChange("gender", value),
      },
      {
        fieldName: "Marital Status",
        name: "marital_status",
        type: "select",
        placeholder: "Select",
        defaultValue: formData.marital_status,
        options: [
          { label: "Single", value: "single" },
          { label: "Married", value: "married" },
        ],
        onChange: (value: string) => handleChange("marital_status", value),
      },
      {
        fieldName: "D.O.J",
        name: "doj",
        type: "date",
        placeholder: "Enter Date Of Joining",
        defaultValue: formData.doj
          ? new Date(formData.doj).toISOString().split("T")[0]
          : "",
        onChange: (value: string) => handleChange("doj", value),
      },
      {
        fieldName: "Employment",
        name: "employment",
        type: "select",
        placeholder: "Select Type",
        defaultValue: formData.employment,
        options: [
          { label: "Full Time", value: "full_time" },
          { label: "Under Probation", value: "under_probation" },
          { label: "Intern", value: "intern" },
          { label: "Contract", value: "contract" },
          { label: "Part-Time", value: "part_time" },
          { label: "Volunteer", value: "volunteer" },
        ],
        onChange: (value: string) => handleChange("employment", value),
      },
      {
        fieldName: "Organization",
        name: "organizationId",
        type: "select",
        placeholder: "Select Type",
        defaultValue: formData.organizationId,
        options: organization.map((org) => ({
          label: org.name,
          value: org.id,
        })),
        onChange: (value: string) => handleChange("organizationId", value),
      },
      {
        fieldName: "Role",
        name: "roleId",
        type: "select",
        placeholder: "Select Type",
        defaultValue: formData.roleId,
        options: roles.map((role) => ({
          label: role.name,
          value: role.id,
        })),
        onChange: (value: string) => handleChange("roleId", value),
      },
    ],
  };

  const columns = [
    { field: "eid", headerName: "Emp.ID", sortable: true },
    { field: "name", headerName: "Name", sortable: true },
    { field: "email", headerName: "Email", sortable: true },
    { field: "dob", headerName: "D.O.B", sortable: true },
    { field: "doj", headerName: "D.O.J", sortable: true },
    { field: "address", headerName: "Address", sortable: true },
    { field: "employment", headerName: "Employment", sortable: true },
    { field: "role", headerName: "Role", sortable: true },
    { field: "manager", headerName: "Manager", sortable: true },
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
          Create
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={users}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default UserControlPanel;
