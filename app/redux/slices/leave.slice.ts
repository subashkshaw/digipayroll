import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from "mongoose";

// Thunks for Leave operations
export const getLeaves = createAsyncThunk(
  "leave/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get<any>("leave/all");
      console.log(response.data.leave, "leaves", response);

      return response.data.leave;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data.leave || error.message);
    }
  }
);

export const applyLeave = createAsyncThunk(
  "leave/apply",
  async (
    {
      eid,
      userId,
      type,
      shift,
      start_date,
      end_date,
      duration,
      reason,
      remarks,
      approver,
    }: any,
    { rejectWithValue }
  ) => {
    if (
      !eid ||
      !userId ||
      !type ||
      !shift ||
      !start_date ||
      !end_date ||
      !duration ||
      !reason ||
      !approver
    ) {
      return rejectWithValue("Missing required fields");
    }

    const payload = {
      eid,
      userID: new Types.ObjectId(userId),
      type,
      shift,
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      duration: parseInt(duration),
      reason,
      remarks,
      approver,
    };

    try {
      const response = await apiClient.post<any, typeof payload>(
        "leave",
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updateLeave = createAsyncThunk(
  "leave/update",
  async (
    {
      id,
      eid,
      type,
      shift,
      start_date,
      end_date,
      duration,
      reason,
      remarks,
      approver,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      id,
      eid,
      user: eid,
      type,
      shift,
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      duration,
      reason,
      remarks,
      approver,
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `leave/${id}`,
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
export const deleteLeave = createAsyncThunk(
  "leave/delete",
  async ({ id }: any, { rejectWithValue }) => {
    try {
      const response = await apiClient.delete<any>(`leave/${id}`);
      return response.data; // Return the ID for deletion
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
// Leave State Interface
export interface LeaveState {
  isLoading: boolean;
  isError: boolean;
  error: string;

  data: any[];
  others: any;

  isUpdating: boolean;
  updatingError: string;

  isDeleting: boolean;
  deletingError: string;
}

const initialState: LeaveState = {
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

// Leave Slice
export const leaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {
    clearLeaveState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getLeaves
      .addCase(getLeaves.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getLeaves.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getLeaves.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle applyLeave
      .addCase(applyLeave.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(applyLeave.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new role to the list
      })
      .addCase(applyLeave.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add role.";
      })

      // Handle updateLeave
      .addCase(updateLeave.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(updateLeave.fulfilled, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        const updatedRol = action.payload;
        state.data = state.data.map((rol) =>
          rol.oid === updatedRol.oid ? updatedRol : rol
        );
      })
      .addCase(updateLeave.rejected, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        state.updatingError =
          action.payload?.message || "Failed to update role.";
      })

      // Handle deleteLeave
      .addCase(deleteLeave.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(deleteLeave.fulfilled, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        const deletedId = action.payload.id;
        state.data = state.data.filter((leave) => leave.id !== deletedId);
      })
      .addCase(deleteLeave.rejected, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        state.deletingError =
          action.payload?.message || "Failed to delete role.";
      });
  },
});

export const { clearLeaveState } = leaveSlice.actions;

export default leaveSlice.reducer;
