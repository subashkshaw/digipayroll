import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "@/app/utils/apiClient";

export const getOrganization = createAsyncThunk(
  "organization/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get<any>("organization/all");

      return response.data.organization;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data.organization || error.message
      );
    }
  }
);

export const addOrganization = createAsyncThunk(
  "organization/create",
  async ({ oid, name, address, logo }: any, { rejectWithValue }) => {
    const payload = {
      oid,
      name,
      address,
      logo,
    };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "organization",
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updateOrganization = createAsyncThunk(
  "organization/update",
  async ({ oid, name, address, logo }: any, { rejectWithValue }) => {
    const payload = {
      oid,
      name,
      address,
      logo,
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        "organization",
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const deleteOrganization = createAsyncThunk(
  "organization/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      await apiClient.delete(`organization/${id}`); // Send ID in URL
      return id;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export interface OrganizationState {
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

const initialState: OrganizationState = {
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

export const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    clearOrganizationState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getOrganization
      .addCase(getOrganization.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(
        getOrganization.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.data = action.payload || [];
        }
      )
      .addCase(
        getOrganization.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload?.message || "An error occurred.";
        }
      )

      // Handle addOrganization
      .addCase(addOrganization.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(
        addOrganization.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.data.push(action.payload); // Add the new organization to the list
        }
      )
      .addCase(
        addOrganization.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isError = true;
          state.error =
            action.payload?.message || "Failed to add organization.";
        }
      )

      // Handle updateOrganization
      .addCase(updateOrganization.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(
        updateOrganization.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isUpdating = false;
          const updatedOrg = action.payload;
          state.data = state.data.map((org) =>
            org.oid === updatedOrg.oid ? updatedOrg : org
          );
        }
      )
      .addCase(
        updateOrganization.rejected,
        (state, action: PayloadAction<any>) => {
          state.isUpdating = false;
          state.updatingError =
            action.payload?.message || "Failed to update organization.";
        }
      )

      // Handle deleteOrganization
      .addCase(deleteOrganization.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(
        deleteOrganization.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isDeleting = false;
          const deletedId = action.payload.id;
          state.data = state.data.filter((org) => org.id !== deletedId);
        }
      )
      .addCase(
        deleteOrganization.rejected,
        (state, action: PayloadAction<any>) => {
          state.isDeleting = false;
          state.deletingError =
            action.payload?.message || "Failed to delete organization.";
        }
      );
  },
});

export const { clearOrganizationState } = organizationSlice.actions;

export default organizationSlice.reducer;
