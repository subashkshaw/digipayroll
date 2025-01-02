import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Reimbursement operations
export const getReimbursements = createAsyncThunk(
  "reimbursement/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("reimbursement/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addReimbursement = createAsyncThunk(
  "reimbursement/create",
  async (
    { amount, description, employeeId }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { amount, description, employeeId };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "reimbursement",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateReimbursement = createAsyncThunk(
  "reimbursement/update",
  async (
    { reimbursementId, amount, description }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { amount, description };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `reimbursement/${reimbursementId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteReimbursement = createAsyncThunk(
  "reimbursement/delete",
  async ({ reimbursementId }: any, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.delete<any>(
        `reimbursement/${reimbursementId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Reimbursement State Interface
export interface ReimbursementState {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: any[];
}

const initialState: ReimbursementState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

// Reimbursement Slice
export const reimbursementSlice = createSlice({
  name: "reimbursement",
  initialState,
  reducers: {
    clearReimbursementState: () => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getReimbursements.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getReimbursements.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.reimbursements || [],
        })
      )
      .addCase(
        getReimbursements.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      .addCase(
        addReimbursement.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: [...state.data, action.payload?.data?.reimbursement],
        })
      )
      .addCase(
        updateReimbursement.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.map((reim: any) =>
            reim.id === action.payload?.data?.reimbursement?.id
              ? action.payload?.data?.reimbursement
              : reim
          ),
        })
      )
      .addCase(
        deleteReimbursement.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.filter(
            (reim: any) => reim.id !== action.payload?.data?.reimbursementId
          ),
        })
      );
  },
});

export const { clearReimbursementState } = reimbursementSlice.actions;
export default reimbursementSlice.reducer;
