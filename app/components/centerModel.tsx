"use client";
import React, { useEffect } from "react";
import InputFields from "./input-fields/page";
import Link from "next/link";
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
      <div className="flex items-center justify-center bg-white border-r rounded-md shadow-md">
        <div className="p-5 w-80">
          <div className="text-lg font-bold py-2 mb-3">{title}</div>
          <InputFields ip={ip} />
          <div className="flex justify-center w-full gap-2 mt-4 mb-2">
            <button
              onClick={submit}
              className="border-2 border-blue-500 dark:border-blue-400 p-2 rounded-md w-full mt-1"
            >
              Sign In
            </button>
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-500"
          >
            Forgot Password
          </Link>
        </div>
      </div>
    </>
  );
};

export default CenterModel;
