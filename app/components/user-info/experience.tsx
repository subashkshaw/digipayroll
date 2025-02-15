"use client";
import InputFields from "../input-fields/page";
import { addWorkExperience } from "@/app/redux/slices/workExperience.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";

const Experience = ({ isEditing, toggleEdit, handleSave }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  // Form state for experience details
  const [formData, setFormData] = useState({
    organization: "",
    location: "",
    designation: "",
    doj: "",
    dor: "",
    skills: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  console.log(formData, "form ");
  const ip = {
    fields: [
      {
        fieldName: "Organization",
        name: "organization",
        type: "text",
        placeholder: "Enter Organization Name",
        onChange: (value: string) => handleChange("organization", value),
      },
      {
        fieldName: "Location",
        name: "location",
        type: "text",
        placeholder: "Enter Location",
        onChange: (value: string) => handleChange("location", value),
      },
      {
        fieldName: "Designation",
        name: "designation",
        type: "text",
        placeholder: "Enter Designation",
        onChange: (value: string) => handleChange("designation", value),
      },
      {
        fieldName: "Date of Joining",
        name: "doj",
        type: "date",
        placeholder: "Enter Date of Joining",
        onChange: (value: string) => handleChange("doj", value),
      },
      {
        fieldName: "Date of Relieving",
        name: "dor",
        type: "date",
        placeholder: "Enter Date of Relieving",
        onChange: (value: string) => handleChange("dor", value),
      },
      {
        fieldName: "Skills",
        name: "skills",
        type: "text",
        placeholder: "Enter Skills",
        onChange: (value: string) => handleChange("skills", value),
      },
    ],
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addWorkExperience(formData)).unwrap();
    } catch (error) {
      console.error("Error updating experience details:", error);
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

export default Experience;
