import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from "mongoose";

// Thunks for Attendance operations
export const getAttendance = createAsyncThunk(
  "attendance/all",
  async (_, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("attendance/all");
      return response.data.attendance;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const markAttendance = createAsyncThunk(
  "attendance/mark",
  async (
    { organizationId, eid, userId, location, shift }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      eid,
      userID: new Types.ObjectId(userId),
      organizationId: new Types.ObjectId(organizationId),
      clockin: new Date(),
      clockout: new Date(),
      location,
      shift,
    };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "attendance",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateAttendance = createAsyncThunk(
  "attendance/update",
  async ({ attendanceId, status }: any, { rejectWithValue }: any) => {
    const payload = { status };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `attendance/${attendanceId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteAttendance = createAsyncThunk(
  "attendance/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await apiClient.delete(`attendance/${id}`); // Send ID in URL
      return id; // Return the deleted user's ID
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
// Attendance State Interface
export interface AttendanceState {
  isLoading: boolean;
  isError: boolean;
  error: string;

  data: any[];
  isUpdating: boolean;
  updatingError: string;

  isDeleting: boolean;
  deletingError: string;
}

const initialState: AttendanceState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
  isUpdating: false,
  updatingError: "",
  isDeleting: false,
  deletingError: "",
};

// Attendance Slice
export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    clearAttendanceState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getAttendance
      .addCase(getAttendance.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getAttendance.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getAttendance.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle markAttendance
      .addCase(markAttendance.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(
        markAttendance.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.data.push(action.payload); // Add the new Attendance to the list
        }
      )
      .addCase(markAttendance.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add Attendance.";
      })

      // Handle updateAttendance
      .addCase(updateAttendance.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(
        updateAttendance.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isUpdating = false;
          const updatedOrg = action.payload;
          state.data = state.data.map((Attend) =>
            Attend.oid === updatedOrg.oid ? updatedOrg : Attend
          );
        }
      )
      .addCase(
        updateAttendance.rejected,
        (state, action: PayloadAction<any>) => {
          state.isUpdating = false;
          state.updatingError =
            action.payload?.message || "Failed to update Attendance.";
        }
      )

      // Handle deleteAttendance
      .addCase(deleteAttendance.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(
        deleteAttendance.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isDeleting = false;
          const deletedId = action.payload.id;
          state.data = state.data.filter((Attend) => Attend.id !== deletedId);
        }
      )
      .addCase(
        deleteAttendance.rejected,
        (state, action: PayloadAction<any>) => {
          state.isDeleting = false;
          state.deletingError =
            action.payload?.message || "Failed to delete Attendance.";
        }
      );
  },
});

export const { clearAttendanceState } = attendanceSlice.actions;

export default attendanceSlice.reducer;
