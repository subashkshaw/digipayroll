"use client";

import React from "react";

type Field = {
  fieldName: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (value: string) => void;
  options?: any[];
};

type IpType = {
  fields: Field[];
};

export default function InputFields(props: { ip: IpType }) {
  const { ip } = props;

  return (
    <>
      {ip.fields.map((field, index) => (
        <div key={index} className="form-group mb-2">
          <label
            htmlFor={field.fieldName}
            className="block text-sm/6 font-medium text-gray-900"
          >
            {field.fieldName}
          </label>
          {field.type === "text" && (
            <input
              className="block w-full rounded-md border-0 p-2 mb-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              id={field.fieldName}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
          {field.type === "date" && (
            <input
              className="block w-full rounded-md border-0 p-2 mb-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              id={field.fieldName}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
          {field.type === "email" && (
            <input
              className="block w-full rounded-md border-0 p-2 mb-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              id={field.fieldName}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
          {field.type === "password" && (
            <input
              className="block w-full rounded-md border-0 p-2 mb-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              id={field.fieldName}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
          {field.type === "file" && (
            <input
              className="block w-full rounded-md border-0 p-2 mb-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              id={field.fieldName}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
          {field.type === "textarea" && (
            <textarea
              className="block w-full rounded-md border-0 p-2 mb-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              id={field.fieldName}
              name={field.name}
              placeholder={field.placeholder}
              onChange={(e) => field.onChange(e.target.value)}
            ></textarea>
          )}

          {field.type === "select" && field.options && (
            <select
              className="block w-full rounded-md border-0 p-2 mb-1 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              id={field.fieldName}
              name={field.name}
              onChange={(e) => field.onChange(e.target.value)}
            >
              <option className="text-gray-400 p-3" value="">
                Select Type
              </option>
              {field.options.map((option, optIndex) => (
                <option key={optIndex} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </>
  );
}
