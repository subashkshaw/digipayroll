import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Travel operations
export const getTravels = createAsyncThunk(
  "travel/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("travel/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTravel = createAsyncThunk(
  "travel/create",
  async (
    { employeeId, destination, startDate, endDate, purpose }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { employeeId, destination, startDate, endDate, purpose };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "travel",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateTravel = createAsyncThunk(
  "travel/update",
  async (
    { travelId, destination, startDate, endDate, purpose }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { destination, startDate, endDate, purpose };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `travel/${travelId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTravel = createAsyncThunk(
  "travel/delete",
  async ({ travelId }: any, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.delete<any>(`travel/${travelId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Travel State Interface
export interface TravelState {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: any[];
}

const initialState: TravelState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

// Travel Slice
export const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    clearTravelState: () => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getTravels.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getTravels.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.travels || [],
        })
      )
      .addCase(
        getTravels.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      .addCase(
        addTravel.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: [...state.data, action.payload?.data?.travel],
        })
      )
      .addCase(
        updateTravel.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.map((trav: any) =>
            trav.id === action.payload?.data?.travel?.id
              ? action.payload?.data?.travel
              : trav
          ),
        })
      )
      .addCase(
        deleteTravel.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.filter(
            (trav: any) => trav.id !== action.payload?.data?.travelId
          ),
        })
      );
  },
});

export const { clearTravelState } = travelSlice.actions;
export default travelSlice.reducer;
