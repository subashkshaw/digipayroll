import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Work Experience
export const getWorkExperiences = createAsyncThunk(
  "work-experirnce/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("user/work-experirnce/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addWorkExperience = createAsyncThunk(
  "work-experirnce/create",
  async (
    { employeeId, companyName, role, startDate, endDate }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { employeeId, companyName, role, startDate, endDate };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "user/work-experirnce",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateWorkExperience = createAsyncThunk(
  "work-experirnce/update",
  async (
    { experienceId, companyName, role, startDate, endDate }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { companyName, role, startDate, endDate };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `user/work-experirnce/${experienceId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteWorkExperience = createAsyncThunk(
  "work-experirnce/delete",
  async ({ id }: any, { rejectWithValue }: any) => {
    try {
      await apiClient.delete(`user/work-experirnce/${id}`); // Send ID in URL
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Work Experience State Interface
export interface WorkExperienceState {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: any[];
}

const initialState: WorkExperienceState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

// Work Experience Slice
export const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    clearWorkExperienceState: () => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getWorkExperiences.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getWorkExperiences.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.workExperiences || [],
        })
      )
      .addCase(
        getWorkExperiences.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      .addCase(
        addWorkExperience.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: [...state.data, action.payload?.data?.workExperience],
        })
      )
      .addCase(
        updateWorkExperience.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.map((exp: any) =>
            exp.id === action.payload?.data?.workExperience?.id
              ? action.payload?.data?.workExperience
              : exp
          ),
        })
      )
      .addCase(
        deleteWorkExperience.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.filter(
            (exp: any) => exp.id !== action.payload?.data?.experienceId
          ),
        })
      );
  },
});

export const { clearWorkExperienceState } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;
