import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";
import { Types } from "mongoose";

// Async actions for Structure Management
export const getStructure = createAsyncThunk(
  "paystructure/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get<any>("payroll/paystructure/all");
      return response.data.paystructure;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data.paystructure || error.message
      );
    }
  }
);

export const addStructure = createAsyncThunk(
  "paystructure/create",
  async (
    { organizationId, component, percentage, isTaxable }: any,
    { rejectWithValue }
  ) => {
    const payload = {
      organizationId: new Types.ObjectId(organizationId),
      component,
      percentage: parseFloat(percentage),
      isTaxable: Boolean(isTaxable),
    };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "payroll/paystructure",
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updateStructure = createAsyncThunk(
  "paystructure/update",
  async (
    { id, component, percentage, isTaxable }: any,
    { rejectWithValue }
  ) => {
    const payload = {
      id,
      component,
      percentage,
      isTaxable,
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `payroll/paystructure`,
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const deleteStructure = createAsyncThunk(
  "paystructure/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await apiClient.delete(`payroll/paystructure/${id}`); // Send ID in URL
      return id; // Return the ID for deletion
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Structure State Interface
export interface StructureState {
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

const initialState: StructureState = {
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

export const paystructureSlice = createSlice({
  name: "paystructure",
  initialState,
  reducers: {
    clearStructureState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getStructure
      .addCase(getStructure.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getStructure.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getStructure.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle addStructure
      .addCase(addStructure.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(addStructure.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new paystructure to the list
      })
      .addCase(addStructure.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add paystructure.";
      })

      // Handle updateStructure
      .addCase(updateStructure.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(
        updateStructure.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isUpdating = false;
          const updatedRol = action.payload;
          state.data = state.data.map((rol) =>
            rol.oid === updatedRol.oid ? updatedRol : rol
          );
        }
      )
      .addCase(
        updateStructure.rejected,
        (state, action: PayloadAction<any>) => {
          state.isUpdating = false;
          state.updatingError =
            action.payload?.message || "Failed to update paystructure.";
        }
      )

      // Handle deleteStructure
      .addCase(deleteStructure.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(
        deleteStructure.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isDeleting = false;
          const deletedId = action.payload.id;
          state.data = state.data.filter((pay) => pay.id !== deletedId);
        }
      )
      .addCase(
        deleteStructure.rejected,
        (state, action: PayloadAction<any>) => {
          state.isDeleting = false;
          state.deletingError =
            action.payload?.message || "Failed to delete paystructure.";
        }
      );
  },
});

// Action creators are generated for each case reducer function
export const { clearStructureState } = paystructureSlice.actions;

export default paystructureSlice.reducer;
