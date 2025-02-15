"use client";
import CustomTable from "@/app/components/customTable";
import RightModel from "@/app/components/rightModel";
import { AppDispatch, RootState } from "@/app/redux";
import {
  addAsset,
  deleteAsset,
  getAssets,
} from "@/app/redux/slices/asset.slice";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const Asset = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user, "user data");
  const {
    data: asset,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.asset);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Asset Request");
  // Form state for user creation
  const [formData, setFormData] = React.useState({
    eid: "",
    userId: "",
    organizationId: "",
    type: "",
    request_type: "",
    completion_date: "",
    location: "",
    remarks: "",
    approver: "",
  });
  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
      eid: user.eid,
      userId: user.id,
      organizationId: user.organizationId,
    }));
  };
  console.log(formData, "form ");
  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Asset Request");
  };

  const ip = {
    fields: [
      {
        fieldName: "Asset Type",
        name: "type",
        type: "select",
        placeholder: "Select Type",
        options: [
          { label: "Laptop", value: "laptop" },
          { label: "Mouse", value: "mouse" },
          { label: "Keyboard", value: "keyboard" },
        ],
        onChange: (value: string) => handleChange("type", value),
      },
      {
        fieldName: "Request Type",
        name: "request_type",
        type: "select",
        placeholder: "Select Type",
        options: [
          { label: "Request", value: "request" },
          { label: "Return", value: "return" },
        ],
        onChange: (value: string) => handleChange("request_type", value),
      },
      {
        fieldName: "Completion Date",
        name: "completion_date",
        type: "date",
        placeholder: "Select Date",
        onChange: (value: string) => handleChange("completion_date", value),
      },
      {
        fieldName: "Location",
        name: "location",
        type: "select",
        placeholder: "Select Location",
        options: [
          { label: "Kolkata", value: "kolkata" },
          { label: "Hyderabad", value: "hyderabad" },
          { label: "Bangalore", value: "bangalore" },
          { label: "New Delhi", value: "new_delhi" },
          { label: "Mumbai", value: "mumbai" },
          { label: "Pune", value: "pune" },
        ],
        onChange: (value: string) => handleChange("location", value),
      },
      {
        fieldName: "Remarks",
        name: "remarks",
        type: "textarea",
        placeholder: "Enter Remarks",
        onChange: (value: string) => handleChange("remarks", value),
      },
      {
        fieldName: "Approver",
        name: "approver",
        type: "select",
        placeholder: "Select Approver",
        options: [
          { label: "One", value: "one" },
          { label: "Two", value: "Two" },
        ],
        onChange: (value: string) => handleChange("approver", value),
      },
    ],
  };
  const handleSubmit = async () => {
    try {
      await dispatch(addAsset(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding asset:", error);
    }
  };
  // Handle editing a asset
  const handleEdit = (asset: any) => {
    setTitle("Edit Asset");
    setFormData(asset); // Populate form with asset data
    setOpen(true);
  };

  // Handle deleting a asset
  const handleDelete = async (id: string) => {
    try {
      await dispatch(deleteAsset(id)).unwrap();
      console.log("Asset deleted successfully");
    } catch (error) {
      console.error("Error deleting asset:", error);
    }
  };
  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", sortable: true },
    { field: "type", headerName: "Asset Type", sortable: true },
    { field: "request_type", headerName: "Request Type ", sortable: true },
    { field: "completion_date", headerName: "Completion Date", sortable: true },
    { field: "location", headerName: "Location", sortable: true },
    { field: "remarks", headerName: "Remarks", sortable: true },
    { field: "approver", headerName: "Approver", sortable: true },
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
          Asset Request
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={asset}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default Asset;
