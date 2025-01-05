"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import CenterModel from "../components/centerModel";
import { login } from "@/app/redux/slices/auth.slice";
import { AppDispatch, RootState } from "../redux";

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );

  // Form state for login
  const [formData, setFormData] = useState({
    identifier: "", // This will be used for both email and mobile number
    password: "",
  });

  // Handlers for input changes
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const ip = {
    fields: [
      {
        fieldName: "Email or Mobile Number",
        type: "text",
        name: "identifier",
        placeholder: "Enter email or mobile number",
        onChange: (value: string) => handleChange("identifier", value),
      },
      {
        fieldName: "Password",
        type: "password",
        name: "password",
        placeholder: "Enter password",
        onChange: (value: string) => handleChange("password", value),
      },
    ],
  };

  const handleSubmit = async () => {
    const loginData = {
      identifier: formData.identifier,
      password: formData.password,
    };
    console.log("Sending payload:", loginData);
    try {
      await dispatch(login(loginData)).unwrap();
    } catch (error) {
      console.error("Error unable to login:", error);
    }
  };

  // Redirect to dashboard if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/users/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="">
        {error && <p className="text-red-500 text-center">{error}</p>}
        {isAuthenticated && (
          <p className="text-green-500 text-center">Login successful!</p>
        )}
        <br />
        <CenterModel
          ip={ip}
          title={"Sign in to your account"}
          submit={handleSubmit}
        />
      </div>
    </div>
  );
}
