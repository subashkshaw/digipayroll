import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Asset operations
export const getAsset = createAsyncThunk(
  "asset/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("asset/all");
      return response.data;
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
      type,
      request_type,
      completion_date,
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
  async ({ id }: any, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.delete<any>(`asset/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
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
    clearAssetState: () => {
      return { ...initialState };
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getAsset.pending, () => ({
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(getAsset.fulfilled, (state: any, action: PayloadAction<any>) => {
        const { assets, ...rest } = action?.payload?.data || {};

        return {
          ...initialState,
          isLoading: false,
          data: assets || [],
          others: rest,
        };
      })
      .addCase(getAsset.rejected, (state: any, action: PayloadAction<any>) => ({
        isLoading: false,
        isError: true,
        error: action.payload?.message,
      }))
      .addCase(addAsset.pending, () => ({
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        addAsset.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...initialState,
          isLoading: false,
          data: action?.payload?.data?.asset,
        })
      )
      .addCase(addAsset.rejected, (state: any, action: PayloadAction<any>) => ({
        isLoading: false,
        isError: true,
        error: action.payload?.message,
      }))
      .addCase(updateAsset.pending, (state: any) => ({
        ...state,
        isUpdating: true,
        updatingError: "",
      }))
      .addCase(
        updateAsset.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          const { asset, ...rest } = action?.payload?.data || {};

          return {
            ...state,
            isUpdating: false,
            data: asset || [],
            others: rest,
          };
        }
      )
      .addCase(
        updateAsset.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isUpdating: false,
          updatingError: action.payload?.message,
        })
      )
      .addCase(deleteAsset.pending, () => ({
        isDeleting: true,
        deletingError: "",
      }))
      .addCase(
        deleteAsset.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          const { asset, ...rest } = action?.payload?.data || {};

          return {
            ...state,
            isDeleting: false,
            data: asset || [],
            others: rest,
          };
        }
      )
      .addCase(
        deleteAsset.rejected,
        (state: any, action: PayloadAction<any>) => ({
          isDeleting: false,
          deletingError: action.payload?.message,
        })
      );
  },
});

// Action creators are generated for each case reducer function
export const { clearAssetState } = assetSlice.actions;

export default assetSlice.reducer;
