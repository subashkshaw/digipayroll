import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "../../utils/apiClient";

// Async actions for Role Management
export const getRoles = createAsyncThunk(
  "roles/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiClient.get<any>("user/roles/all");
      return response.data.roles;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data.roles || error.message);
    }
  }
);

export const addRole = createAsyncThunk(
  "roles/create",
  async ({ name, description }: any, { rejectWithValue }) => {
    const payload = {
      name,
      description,
    };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "user/roles",
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const updateRole = createAsyncThunk(
  "roles/update",
  async ({ id, name, description }: any, { rejectWithValue }) => {
    const payload = {
      id,
      name,
      description,
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `user/roles`,
        payload
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

export const deleteRole = createAsyncThunk(
  "roles/delete",
  async ({ id }: any, { rejectWithValue }) => {
    try {
      const response = await apiClient.delete<any>(`user/roles/${id}`);
      return response.data; // Return the ID for deletion
    } catch (error: any) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Role State Interface
export interface RoleState {
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

const initialState: RoleState = {
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

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    clearRoleState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getRoles
      .addCase(getRoles.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getRoles.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getRoles.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle addRole
      .addCase(addRole.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(addRole.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new role to the list
      })
      .addCase(addRole.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add role.";
      })

      // Handle updateRole
      .addCase(updateRole.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(updateRole.fulfilled, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        const updatedRol = action.payload;
        state.data = state.data.map((rol) =>
          rol.oid === updatedRol.oid ? updatedRol : rol
        );
      })
      .addCase(updateRole.rejected, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        state.updatingError =
          action.payload?.message || "Failed to update role.";
      })

      // Handle deleteRole
      .addCase(deleteRole.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(deleteRole.fulfilled, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        const deletedId = action.payload.id;
        state.data = state.data.filter((org) => org.id !== deletedId);
      })
      .addCase(deleteRole.rejected, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        state.deletingError =
          action.payload?.message || "Failed to delete role.";
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearRoleState } = roleSlice.actions;

export default roleSlice.reducer;
