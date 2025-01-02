"use client";
import React, { useEffect } from "react";
import InputFields from "./input-fields/page";
type IpType = {
  fields: {
    fieldName: string;
    type: string;
    name: string;
    placeholder: string;
    onChange: (value: string) => void;
  }[];
};
type RightModelProps = {
  ip: IpType;
  title: string;
  submit: (event: React.FormEvent) => Promise<void>;
};
const CenterModel = ({ ip, title, submit }: RightModelProps) => {
  useEffect(() => {}, [title]);
  return (
    <>
      <div className="flex min-h-full w-96 items-center justify-center bg-white border-r rounded-l-md shadow-md">
        <div className="px-5 py-3 pb-2 w-80">
          <div className="border-gray-800 border-2 text-center py-2 mb-2">
            {title}
          </div>
          <InputFields ip={ip} />
          <div className="flex justify-center w-full gap-2 mt-4">
            <button
              onClick={submit}
              className="border-2 border-indigo-400 p-2 rounded-md w-1/2"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterModel;
