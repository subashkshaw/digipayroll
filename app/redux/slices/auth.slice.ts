import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import apiClient from "@/app/utils/apiClient";

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

// Thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (
    { identifier, password }: { identifier: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiClient.post("auth", {
        identifier,
        password,
      });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.isAuthenticated = false;
        state.user = null;
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
