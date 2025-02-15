import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "@/app/utils/apiClient";
import { Types } from "mongoose";

export const getPayroll = createAsyncThunk(
  "payroll/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get<any>("payroll/all");

      return response.data.payroll;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data.payroll || error.message);
    }
  }
);

export const addPayroll = createAsyncThunk(
  "payroll/create",
  async (
    {
      eid,
      userId,
      organizationId,
      pay_month,
      pay_year,
      gross_pay,
      net_pay,
    }: any,
    { rejectWithValue }
  ) => {
    const payload = {
      eid,
      userID: new Types.ObjectId(userId),
      organizationId: new Types.ObjectId(organizationId),
      pay_month: new Date(pay_month),
      pay_year: parseInt(pay_year),
      gross_pay: parseFloat(gross_pay),
      net_pay: parseFloat(net_pay),
    };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "payroll",
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updatePayroll = createAsyncThunk(
  "payroll/update",
  async (
    { id, eid, userId, pay_month, pay_year, gross_pay, net_pay }: any,
    { rejectWithValue }
  ) => {
    const payload = {
      id,
      eid,
      userID: new Types.ObjectId(userId),
      pay_month: new Date(pay_month),
      pay_year: parseInt(pay_year),
      gross_pay: parseFloat(gross_pay),
      net_pay: parseFloat(net_pay),
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        "payroll",
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const deletePayroll = createAsyncThunk(
  "payroll/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await apiClient.delete(`payroll/${id}`); // Send ID in URL
      return id;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export interface PayrollState {
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

const initialState: PayrollState = {
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

export const payrollSlice = createSlice({
  name: "payroll",
  initialState,
  reducers: {
    clearPayrollState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getPayroll
      .addCase(getPayroll.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getPayroll.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getPayroll.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle addPayroll
      .addCase(addPayroll.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(addPayroll.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new payroll to the list
      })
      .addCase(addPayroll.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add payroll.";
      })

      // Handle updatePayroll
      .addCase(updatePayroll.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(updatePayroll.fulfilled, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        const updatedOrg = action.payload;
        state.data = state.data.map((pay) =>
          pay.oid === updatedOrg.oid ? updatedOrg : pay
        );
      })
      .addCase(updatePayroll.rejected, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        state.updatingError =
          action.payload?.message || "Failed to update payroll.";
      })

      // Handle deletePayroll
      .addCase(deletePayroll.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(deletePayroll.fulfilled, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        const deletedId = action.payload.id;
        state.data = state.data.filter((pay) => pay.id !== deletedId);
      })
      .addCase(deletePayroll.rejected, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        state.deletingError =
          action.payload?.message || "Failed to delete payroll.";
      });
  },
});

export const { clearPayrollState } = payrollSlice.actions;

export default payrollSlice.reducer;
