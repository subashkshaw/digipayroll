import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Resignation operations
export const getResignations = createAsyncThunk(
  "resignation/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("user/resignation/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addResignation = createAsyncThunk(
  "resignation/create",
  async (
    { employeeId, reason, lastWorkingDay }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { employeeId, reason, lastWorkingDay };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "user/resignation",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateResignation = createAsyncThunk(
  "resignation/update",
  async (
    { resignationId, reason, lastWorkingDay }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { reason, lastWorkingDay };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `user/resignation/${resignationId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteResignation = createAsyncThunk(
  "resignation/delete",
  async ({ id }: any, { rejectWithValue }: any) => {
    try {
      await apiClient.delete(`user/resignation/${id}`); // Send ID in URL
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Resignation State Interface
export interface ResignationState {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: any[];
}

const initialState: ResignationState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

// Resignation Slice
export const resignationSlice = createSlice({
  name: "resignation",
  initialState,
  reducers: {
    clearResignationState: () => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getResignations.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getResignations.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.resignations || [],
        })
      )
      .addCase(
        getResignations.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      .addCase(
        addResignation.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: [...state.data, action.payload?.data?.resignation],
        })
      )
      .addCase(
        updateResignation.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.map((res: any) =>
            res.id === action.payload?.data?.resignation?.id
              ? action.payload?.data?.resignation
              : res
          ),
        })
      )
      .addCase(
        deleteResignation.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.filter(
            (res: any) => res.id !== action.payload?.data?.resignationId
          ),
        })
      );
  },
});

export const { clearResignationState } = resignationSlice.actions;
export default resignationSlice.reducer;
