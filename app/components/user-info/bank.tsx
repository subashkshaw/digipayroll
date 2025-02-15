"use client";
import InputFields from "../input-fields/page";
import { updateBank } from "@/app/redux/slices/bank.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";

const BankDetails = ({ isEditing, toggleEdit, handleSave }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  // Form state for bank details
  const [formData, setFormData] = useState({
    bank: "",
    branch: "",
    acc_num: "",
    ifsc: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  console.log(formData, "form ");
  const ip = {
    fields: [
      {
        fieldName: "Bank Name",
        name: "bank",
        type: "text",
        placeholder: "Enter Bank Name",
        onChange: (value: string) => handleChange("bank", value),
      },
      {
        fieldName: "Branch",
        name: "branch",
        type: "text",
        placeholder: "Enter Branch",
        onChange: (value: string) => handleChange("branch", value),
      },
      {
        fieldName: "Account Number",
        name: "acc_num",
        type: "text",
        placeholder: "Enter Account Number",
        onChange: (value: string) => handleChange("acc_num", value),
      },
      {
        fieldName: "IFSC Code",
        name: "ifsc",
        type: "text",
        placeholder: "Enter IFSC Code",
        onChange: (value: string) => handleChange("ifsc", value),
      },
    ],
  };

  const handleSubmit = async () => {
    try {
      await dispatch(updateBank(formData)).unwrap();
    } catch (error) {
      console.error("Error updating bank details:", error);
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

export default BankDetails;
