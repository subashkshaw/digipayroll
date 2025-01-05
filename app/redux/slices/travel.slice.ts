import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Types } from "mongoose";

// Thunks for Travel operations
export const getTravels = createAsyncThunk(
  "travel/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("travel/all");
      console.log(response.data.travel, "All travel data");

      return response.data.travel;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTravel = createAsyncThunk(
  "travel/create",
  async (
    {
      eid,
      userId,
      type,
      mode,
      doj,
      source,
      destination,
      remarks,
      approver,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      eid,
      userID: new Types.ObjectId(userId),
      type,
      mode,
      doj: new Date(doj),
      source,
      destination,
      remarks,
      approver,
    };
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
    { id, type, mode, doj, source, destination, remarks, approver }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      id,
      type,
      mode,
      doj,
      source,
      destination,
      remarks,
      approver,
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `travel/${id}`,
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
  async ({ id }: any, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.delete<any>(`travel/${id}`);
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
  others: any;

  isUpdating: boolean;
  updatingError: string;

  isDeleting: boolean;
  deletingError: string;
}

const initialState: TravelState = {
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

// Travel Slice
export const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    clearTravelState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getTravels
      .addCase(getTravels.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getTravels.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getTravels.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle addTravels
      .addCase(addTravel.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(addTravel.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new Travel to the list
      })
      .addCase(addTravel.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add Travel.";
      })

      // Handle updateTravels
      .addCase(updateTravel.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(updateTravel.fulfilled, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        const updatedOrg = action.payload;
        state.data = state.data.map((Trav) =>
          Trav.oid === updatedOrg.oid ? updatedOrg : Trav
        );
      })
      .addCase(updateTravel.rejected, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        state.updatingError =
          action.payload?.message || "Failed to update Travel.";
      })

      // Handle deleteTravels
      .addCase(deleteTravel.pending, (state) => {
        state.isDeleting = true;
        state.deletingError = "";
      })
      .addCase(deleteTravel.fulfilled, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        const deletedId = action.payload.id;
        state.data = state.data.filter((Trav) => Trav.id !== deletedId);
      })
      .addCase(deleteTravel.rejected, (state, action: PayloadAction<any>) => {
        state.isDeleting = false;
        state.deletingError =
          action.payload?.message || "Failed to delete Travel.";
      });
  },
});

export const { clearTravelState } = travelSlice.actions;
export default travelSlice.reducer;
