import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRoles = createAsyncThunk(
  "user/login",
  async (_, { rejectWithValue }) => {
    try {
      console.log("before");

      const response = await apiClient.get<any>("user");
      console.log(response.data.roles, "after");

      return response.data.roles;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
