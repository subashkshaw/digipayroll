import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from "mongoose";

// Thunks for Reimbursement operations
export const getReimbursements = createAsyncThunk(
  "reimbursement/all",
  async (_, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("reimbursement/all");
      console.log(response.data.reimbursement, "All reimbursement data");

      return response.data.reimbursement;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addReimbursement = createAsyncThunk(
  "reimbursement/create",
  async (
    {
      eid,
      userId,
      organizationId,
      type,
      amount,
      bill_date,
      description,
      bill_receipt,
      remarks,
      approver,
      approve_amount,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      eid,
      userID: new Types.ObjectId(userId),
      organizationId: new Types.ObjectId(organizationId),
      type,
      amount: parseFloat(amount),
      bill_date: new Date(bill_date),
      description,
      bill_receipt,
      remarks,
      approver,
      approve_amount: parseFloat(approve_amount),
    };
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
    {
      id,
      userId,
      type,
      amount,
      bill_date,
      description,
      bill_receipt,
      remarks,
      approver,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      id,
      userId,
      type,
      amount,
      bill_date,
      description,
      bill_receipt,
      remarks,
      approver,
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `reimbursement/${id}`,
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
  async (id: string, { rejectWithValue }: any) => {
    try {
      await apiClient.delete(`reimbursement/${id}`); // Send ID in URL
      return id;
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
  others: any;

  isUpdating: boolean;
  updatingError: string;

  isDeleting: boolean;
  deletingError: string;
}

const initialState: ReimbursementState = {
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

// Reimbursement Slice
export const reimbursenentSlice = createSlice({
  name: "reimbursenent",
  initialState,
  reducers: {
    clearReimbursementState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getReimbursements
      .addCase(getReimbursements.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(
        getReimbursements.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.data = action.payload || [];
        }
      )
      .addCase(
        getReimbursements.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload?.message || "An error occurred.";
        }
      )

      // Handle addReimbursements
      .addCase(addReimbursement.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(
        addReimbursement.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.data.push(action.payload); // Add the new Reimbursement to the list
        }
      )
      .addCase(
        addReimbursement.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.error =
            action.payload?.message || "Failed to add Reimbursement.";
        }
      )

      // Handle updateReimbursements
      .addCase(updateReimbursement.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(
        updateReimbursement.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isUpdating = false;
          const updatedOrg = action.payload;
          state.data = state.data.map((Reimb) =>
            Reimb.oid === updatedOrg.oid ? updatedOrg : Reimb
          );
        }
      )
      .addCase(
        updateReimbursement.rejected,
        (state, action: PayloadAction<any>) => {
          state.isUpdating = false;
          state.updatingError =
            action.payload?.message || "Failed to update Reimbursement.";
        }
      )

      // Handle deleteReimbursements
      .addCase(deleteReimbursement.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(
        deleteReimbursement.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isDeleting = false;
          const deletedId = action.payload.id;
          state.data = state.data.filter((Reimb) => Reimb.id !== deletedId);
        }
      )
      .addCase(
        deleteReimbursement.rejected,
        (state, action: PayloadAction<any>) => {
          state.isDeleting = false;
          state.deletingError =
            action.payload?.message || "Failed to delete Reimbursement.";
        }
      );
  },
});

export const { clearReimbursementState } = reimbursenentSlice.actions;
export default reimbursenentSlice.reducer;
