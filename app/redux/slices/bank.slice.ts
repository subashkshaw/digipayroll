import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Bank operations
export const getBanks = createAsyncThunk(
  "bank/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("user/bank/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addBank = createAsyncThunk(
  "bank/create",
  async (
    { accountName, accountNumber, ifscCode, bankName }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { accountName, accountNumber, ifscCode, bankName };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "user/bank",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateBank = createAsyncThunk(
  "bank/update",
  async (
    { bankId, accountName, accountNumber, ifscCode, bankName }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { accountName, accountNumber, ifscCode, bankName };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `user/bank/${bankId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBank = createAsyncThunk(
  "bank/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await apiClient.delete(`user/bank/${id}`); // Send ID in URL
      return id; // Return the deleted user's ID
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
// Bank State Interface
export interface BankState {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: any[];
}

const initialState: BankState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

// Bank Slice
export const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    clearBankState: () => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      // Get Banks
      .addCase(getBanks.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getBanks.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.banks || [],
        })
      )
      .addCase(getBanks.rejected, (state: any, action: PayloadAction<any>) => ({
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload?.message,
      }))
      // Add Bank
      .addCase(addBank.fulfilled, (state: any, action: PayloadAction<any>) => ({
        ...state,
        data: [...state.data, action.payload?.data?.bank],
      }))
      // Update Bank
      .addCase(
        updateBank.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.map((bank: any) =>
            bank.id === action.payload?.data?.bank?.id
              ? action.payload?.data?.bank
              : bank
          ),
        })
      )
      // Delete Bank
      .addCase(
        deleteBank.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.filter(
            (bank: any) => bank.id !== action.payload?.data?.bankId
          ),
        })
      );
  },
});

export const { clearBankState } = bankSlice.actions;
export default bankSlice.reducer;
