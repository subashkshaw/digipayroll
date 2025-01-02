"use client";

import { useState } from "react";
import CenterModel from "../components/centerModel";
import axios from "axios";

type Field = {
  fieldName: string;
  type: string;
  name: string;
  placeholder: string;
  onChange: (value: string) => void;
};

type IpType = {
  fields: Field[];
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handlers for input changes
  const handleEmail = (value: string) => setEmail(value);
  const handlePassword = (value: string) => setPassword(value);

  const ip: IpType = {
    fields: [
      {
        fieldName: "Email",
        type: "email",
        name: "email",
        placeholder: "Enter email",
        onChange: handleEmail,
      },
      {
        fieldName: "Password",
        type: "password",
        name: "password",
        placeholder: "Enter password",
        onChange: handlePassword,
      },
    ],
  };
  const eid = "";
  const handleSubmit = async () => {
    const loginData = {
      eid,
      email,
      password,
    };
    console.log("Sending payload:", loginData);
    try {
      await axios.post("/api/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error unable to login:", error);
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <CenterModel ip={ip} title={"Login"} submit={handleSubmit} />
    </div>
  );
}
