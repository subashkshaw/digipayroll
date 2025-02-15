import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from "mongoose";

// Thunks for Asset operations
export const getAssets = createAsyncThunk(
  "asset/all",
  async (_, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("asset/all");
      return response.data.asset;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addAsset = createAsyncThunk(
  "asset/create",
  async (
    {
      eid,
      userId,
      organizationId,
      type,
      request_type,
      completion_date,
      location,
      remarks,
      approver,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      eid,
      userID: new Types.ObjectId(userId),
      organizationId: new Types.ObjectId(organizationId),
      type,
      request_type,
      completion_date: new Date(completion_date),
      location,
      remarks,
      approver,
    };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "asset",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateAsset = createAsyncThunk(
  "asset/update",
  async (
    {
      id,
      type,
      request_type,
      completion_date,
      location,
      remarks,
      approver,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      id,
      type,
      request_type,
      completion_date,
      location,
      remarks,
      approver,
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `asset/${id}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteAsset = createAsyncThunk(
  "asset/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await apiClient.delete(`asset/${id}`); // Send ID in URL
      return id; // Return the deleted user's ID
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);
// Asset State Interface
export interface AssetState {
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

const initialState: AssetState = {
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

// Asset Slice
export const assetSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {
    clearAssetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getAssets
      .addCase(getAssets.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getAssets.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getAssets.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle addAssets
      .addCase(addAsset.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(addAsset.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new Asset to the list
      })
      .addCase(addAsset.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add Asset.";
      })

      // Handle updateAssets
      .addCase(updateAsset.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(updateAsset.fulfilled, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        const updatedOrg = action.payload;
        state.data = state.data.map((Asset) =>
          Asset.oid === updatedOrg.oid ? updatedOrg : Asset
        );
      })
      .addCase(updateAsset.rejected, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        state.updatingError =
          action.payload?.message || "Failed to update Asset.";
      })

      // Handle deleteAssets
      .addCase(deleteAsset.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(deleteAsset.fulfilled, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        const deletedId = action.payload.id;
        state.data = state.data.filter((Asset) => Asset.id !== deletedId);
      })
      .addCase(deleteAsset.rejected, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        state.deletingError =
          action.payload?.message || "Failed to delete Asset.";
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearAssetState } = assetSlice.actions;

export default assetSlice.reducer;
