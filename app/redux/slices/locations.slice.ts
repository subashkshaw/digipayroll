import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Location operations
export const getLocations = createAsyncThunk(
  "location/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("location/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addLocation = createAsyncThunk(
  "location/create",
  async ({ name, address }: any, { rejectWithValue }: any) => {
    const payload = { name, address };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "location",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateLocation = createAsyncThunk(
  "location/update",
  async ({ locationId, name, address }: any, { rejectWithValue }: any) => {
    const payload = { name, address };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `location/${locationId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteLocation = createAsyncThunk(
  "location/delete",
  async ({ locationId }: any, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.delete<any>(`location/${locationId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Location State Interface
export interface LocationState {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: any[];
}

const initialState: LocationState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

// Location Slice
export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    clearLocationState: () => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(getLocations.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getLocations.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.locations || [],
        })
      )
      .addCase(
        getLocations.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      .addCase(
        addLocation.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: [...state.data, action.payload?.data?.location],
        })
      )
      .addCase(
        updateLocation.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.map((loc: any) =>
            loc.id === action.payload?.data?.location?.id
              ? action.payload?.data?.location
              : loc
          ),
        })
      )
      .addCase(
        deleteLocation.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.filter(
            (loc: any) => loc.id !== action.payload?.data?.locationId
          ),
        })
      );
  },
});

export const { clearLocationState } = locationSlice.actions;
export default locationSlice.reducer;
