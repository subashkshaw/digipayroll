"use client";
import InputFields from "../input-fields/page";
import { addResignation } from "@/app/redux/slices/resignation.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";

const Resignation = ({ isEditing, toggleEdit, handleSave }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  // Form state for resignation details
  const [formData, setFormData] = useState({
    dor: "",
    end_date: "",
    subject: "",
    reason: "",
    approver: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  console.log(formData, "form ");
  const ip = {
    fields: [
      {
        fieldName: "Date of Resignation",
        name: "dor",
        type: "date",
        placeholder: "Enter Date of Resignation",
        onChange: (value: string) => handleChange("dor", value),
      },
      {
        fieldName: "End Date",
        name: "end_date",
        type: "date",
        placeholder: "Enter End Date",
        onChange: (value: string) => handleChange("end_date", value),
      },
      {
        fieldName: "Subject",
        name: "subject",
        type: "text",
        placeholder: "Enter Subject",
        onChange: (value: string) => handleChange("subject", value),
      },

      {
        fieldName: "Approver",
        name: "approver",
        type: "select",
        placeholder: "Select Approver",
        options: [
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ],
        onChange: (value: string) => handleChange("approver", value),
      },
      {
        fieldName: "Reason",
        name: "reason",
        type: "textarea",
        placeholder: "Enter Reason",
        onChange: (value: string) => handleChange("reason", value),
      },
    ],
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addResignation(formData)).unwrap();
    } catch (error) {
      console.error("Error updating resignation details:", error);
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

export default Resignation;
