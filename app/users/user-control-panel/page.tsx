"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import { addUser, getUsers } from "@/app/redux/slices/users.slice";

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

  // Form state for user creation
  const [formData, setFormData] = React.useState({
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

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  console.log(formData, "form ");

  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Create User");
  };

  const ip = {
    fields: [
      {
        fieldName: "Emp. ID",
        name: "eid",
        type: "text",
        placeholder: "Enter Employee ID",
        onChange: (value: string) => handleChange("eid", value),
      },
      {
        fieldName: "Name",
        name: "name",
        type: "text",
        placeholder: "Enter Name",
        onChange: (value: string) => handleChange("name", value),
      },
      {
        fieldName: "Email",
        name: "email",
        type: "text",
        placeholder: "Enter Email",
        onChange: (value: string) => handleChange("email", value),
      },
      {
        fieldName: "Password",
        name: "password",
        type: "text",
        placeholder: "Enter Password",
        onChange: (value: string) => handleChange("password", value),
      },
      {
        fieldName: "D.O.B",
        name: "dob",
        type: "date",
        placeholder: "Enter Date Of Birth",
        onChange: (value: string) => handleChange("dob", value),
      },
      {
        fieldName: "Gender",
        name: "gender",
        type: "select",
        placeholder: "Select Gender",
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
        onChange: (value: string) => handleChange("doj", value),
      },
      {
        fieldName: "Employment",
        name: "employment",
        type: "select",
        placeholder: "Select Type",
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
        options: organization.map((org) => {
          return { label: org.name, value: org.id };
        }),
        onChange: (value: string) => handleChange("organizationId", value),
      },
      {
        fieldName: "Role",
        name: "roleId",
        type: "select",
        placeholder: "Select Type",
        options: roles.map((role) => {
          return { label: role.name, value: role.id };
        }),
        onChange: (value: string) => handleChange("roleId", value),
      },
    ],
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addUser(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

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
  ];

  return (
    <>
      {open && <RightModel ip={ip} title={title} submit={handleSubmit} />}
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
