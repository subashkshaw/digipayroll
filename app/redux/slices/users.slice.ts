import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import apiClient from "../../utils/apiClient";
import { Types } from "mongoose";

// Async actions for User Management
export const getUsers = createAsyncThunk(
  "user/all",
  async (_, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("user/all");
      return response.data.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  "user",
  async (
    {
      eid,
      name,
      email,
      password,
      dob,
      gender,
      marital_status,
      doj,
      useranizationId,
      manager,
      department,
      designation,
      mob_number,
      employment,
      roleId,
      city,
      state,
      pin_code,
      profile_pic,
      baseSalary,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      eid, // Employee ID
      name, // Employee Name
      email, // Employee Email
      password, // Employee Password
      dob: new Date(dob), // Date of Birth
      gender, // Gender (should be string: "Male", "Female", "Others")
      marital_status, // Marital Status
      doj: new Date(doj), // Date of Joining
      useranizationId: new Types.ObjectId(useranizationId), // MongoDB ObjectId for useranization (make sure it's valid)
      manager, // Manager's Name/ID (Optional, string)
      department, // Department (Optional, string)
      designation, // Designation (Optional, string)
      mob_number, // Mobile Number (Optional, string)
      employment, // Employment Type (Optional, string)
      roleId: new Types.ObjectId(roleId), // MongoDB ObjectId for role (make sure it's valid)
      city, // City (Optional, string)
      state, // State (Optional, string)
      pin_code, // Postal Code (Optional, string)
      profile_pic, // Profile Picture (Optional, string)
      baseSalary, // Base Salary (Float)
    };

    try {
      const response = await apiClient.post<any, typeof payload>(
        "user",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "user/update",
  async ({ id, name, email, role }: any, { rejectWithValue }: any) => {
    const payload = {
      name,
      email,
      role,
    };

    try {
      const response = await apiClient.put<any, typeof payload>(
        `user/${id}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/delete",
  async ({ id }: any, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.delete<any>(`user/${id}`); // Assuming delete also uses GET here
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// User State Interface
export interface UserState {
  isLoading: boolean;
  isError: boolean;
  error: string;

  data: any;
  others: any;

  isUpdating: boolean;
  updatingError: string;

  isDeleting: boolean;
  deletingError: string;
}

const initialState: UserState = {
  isLoading: false,
  isError: false,
  error: "",

  data: [],
  others: {},

  isUpdating: false,
  updatingError: "",

  isDeleting: false,
  deletingError: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserState: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      // Handle getUsers
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getUsers.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle addUser
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(addUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new useranization to the list
      })
      .addCase(addUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add useranization.";
      })

      // Handle updateUser
      .addCase(updateUser.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        const updatedUser = action.payload;
        state.data = state.data.map((user: any) =>
          user.oid === updatedUser.oid ? updatedUser : user
        );
      })
      .addCase(updateUser.rejected, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        state.updatingError =
          action.payload?.message || "Failed to update useranization.";
      })

      // Handle deleteUser
      .addCase(deleteUser.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        const deletedId = action.payload.id;
        state.data = state.data.filter((user: any) => user.id !== deletedId);
      })
      .addCase(deleteUser.rejected, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        state.deletingError =
          action.payload?.message || "Failed to delete useranization.";
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearUserState } = userSlice.actions;

export default userSlice.reducer;
