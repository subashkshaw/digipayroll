import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Identity operations
export const getIdentitys = createAsyncThunk(
  "identity/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("user/identity/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addIdentity = createAsyncThunk(
  "identity/create",
  async ({ name, type, fileUrl }: any, { rejectWithValue }: any) => {
    const payload = { name, type, fileUrl };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "user/identity",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateIdentity = createAsyncThunk(
  "identity/update",
  async (
    { identityId, name, type, fileUrl }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { name, type, fileUrl };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `user/identity/${identityId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteIdentity = createAsyncThunk(
  "identity/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await apiClient.delete(`identity/bank/${id}`); // Send ID in URL
      return id; // Return the deleted user's ID
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Identity State Interface
export interface IdentityState {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: any[];
}

const initialState: IdentityState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

// Identity Slice
export const identitySlice = createSlice({
  name: "identity",
  initialState,
  reducers: {
    clearIdentityState: () => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      // Get Identitys
      .addCase(getIdentitys.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getIdentitys.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.identitys || [],
        })
      )
      .addCase(
        getIdentitys.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      // Add Identity
      .addCase(
        addIdentity.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: [...state.data, action.payload?.data?.identity],
        })
      )
      // Update Identity
      .addCase(
        updateIdentity.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.map((doc: any) =>
            doc.id === action.payload?.data?.identity?.id
              ? action.payload?.data?.identity
              : doc
          ),
        })
      )
      // Delete Identity
      .addCase(
        deleteIdentity.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.filter(
            (doc: any) => doc.id !== action.payload?.data?.identityId
          ),
        })
      );
  },
});

export const { clearIdentityState } = identitySlice.actions;
export default identitySlice.reducer;
