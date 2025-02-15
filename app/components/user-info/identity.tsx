"use client";
import InputFields from "../input-fields/page";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux";
import { useState } from "react";
import { addIdentity } from "@/app/redux/slices/identity.slice";
import { CiEdit } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";

const Identity = ({ isEditing, toggleEdit, handleSave }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  // Form state for identity details
  const [formData, setFormData] = useState({
    aadhaar: "",
    pan: "",
    uan: "",
    esi: "",
    voter_id: "",
    driving_licence: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  console.log(formData, "form ");
  const ip = {
    fields: [
      {
        fieldName: "Aadhaar Number",
        name: "aadhaar",
        type: "text",
        placeholder: "Enter Aadhaar Number",
        onChange: (value: string) => handleChange("aadhaar", value),
      },
      {
        fieldName: "PAN Number",
        name: "pan",
        type: "text",
        placeholder: "Enter PAN Number",
        onChange: (value: string) => handleChange("pan", value),
      },
      {
        fieldName: "UAN Number",
        name: "uan",
        type: "text",
        placeholder: "Enter UAN Number",
        onChange: (value: string) => handleChange("uan", value),
      },
      {
        fieldName: "ESI Number",
        name: "esi",
        type: "text",
        placeholder: "Enter ESI Number",
        onChange: (value: string) => handleChange("esi", value),
      },
      {
        fieldName: "Voter ID",
        name: "voter_id",
        type: "text",
        placeholder: "Enter Voter ID",
        onChange: (value: string) => handleChange("voter_id", value),
      },
      {
        fieldName: "Driving Licence",
        name: "driving_licence",
        type: "text",
        placeholder: "Enter Driving Licence Number",
        onChange: (value: string) => handleChange("driving_licence", value),
      },
    ],
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addIdentity(formData)).unwrap();
    } catch (error) {
      console.error("Error updating identity details:", error);
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

export default Identity;
