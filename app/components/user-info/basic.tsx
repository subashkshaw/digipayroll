"use client";
import InputFields from "../input-fields/page";
import { updateUser } from "@/app/redux/slices/users.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";

const Basic = ({ isEditing, toggleEdit, handleSave }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: organization } = useSelector(
    (state: RootState) => state.organization
  );
  const { data: roles } = useSelector((state: RootState) => state.role);
  // Form state for user creation
  const [formData, setFormData] = useState({
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
      await dispatch(updateUser(formData)).unwrap();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        {!isEditing ? (
          <CiEdit onClick={toggleEdit} size={30} className="border" />
        ) : (
          <IoSaveOutline onClick={handleSave} size={30} className="border" />
        )}
      </div>
      <div className="grid grid-cols-2 gap-y-1 gap-x-2">
        <InputFields ip={ip} isEditing={isEditing} submit={handleSubmit} />
      </div>
    </div>
  );
};

export default Basic;
