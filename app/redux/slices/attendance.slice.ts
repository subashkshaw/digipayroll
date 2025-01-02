import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Attendance operations
export const getAttendance = createAsyncThunk(
  "attendance/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("attendance/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const markAttendance = createAsyncThunk(
  "attendance/mark",
  async ({ userId, date, status }: any, { rejectWithValue }: any) => {
    const payload = { userId, date, status };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "attendance/mark",
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
        `attendance/update/${attendanceId}`,
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
  async ({ attendanceId }: any, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.delete<any>(
        `attendance/delete/${attendanceId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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
  extraReducers: (builder: any) => {
    builder
      // Get Attendance
      .addCase(getAttendance.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getAttendance.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.attendance || [],
        })
      )
      .addCase(
        getAttendance.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      // Mark Attendance
      .addCase(markAttendance.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        markAttendance.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: [...state.data, action.payload?.data?.attendance],
        })
      )
      .addCase(
        markAttendance.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      // Update Attendance
      .addCase(updateAttendance.pending, (state: any) => ({
        ...state,
        isUpdating: true,
        updatingError: "",
      }))
      .addCase(
        updateAttendance.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isUpdating: false,
          data: state.data.map((attendance: any) =>
            attendance.id === action.payload?.data?.attendance?.id
              ? action.payload?.data?.attendance
              : attendance
          ),
        })
      )
      .addCase(
        updateAttendance.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isUpdating: false,
          updatingError: action.payload?.message,
        })
      )
      // Delete Attendance
      .addCase(deleteAttendance.pending, (state: any) => ({
        ...state,
        isDeleting: true,
        deletingError: "",
      }))
      .addCase(
        deleteAttendance.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isDeleting: false,
          data: state.data.filter(
            (attendance: any) =>
              attendance.id !== action.payload?.data?.attendanceId
          ),
        })
      )
      .addCase(
        deleteAttendance.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isDeleting: false,
          deletingError: action.payload?.message,
        })
      );
  },
});

export const { clearAttendanceState } = attendanceSlice.actions;

export default attendanceSlice.reducer;
