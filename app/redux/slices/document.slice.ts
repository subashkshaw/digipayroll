import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Document operations
export const getDocuments = createAsyncThunk(
  "document/all",
  async (props: undefined, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("user/document/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addDocument = createAsyncThunk(
  "document/create",
  async ({ name, type, fileUrl }: any, { rejectWithValue }: any) => {
    const payload = { name, type, fileUrl };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "user/document",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateDocument = createAsyncThunk(
  "document/update",
  async (
    { documentId, name, type, fileUrl }: any,
    { rejectWithValue }: any
  ) => {
    const payload = { name, type, fileUrl };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `user/document/${documentId}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteDocument = createAsyncThunk(
  "document/delete",
  async ({ documentId }: any, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.delete<any>(`user/document/${documentId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Document State Interface
export interface DocumentState {
  isLoading: boolean;
  isError: boolean;
  error: string;
  data: any[];
}

const initialState: DocumentState = {
  isLoading: false,
  isError: false,
  error: "",
  data: [],
};

// Document Slice
export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    clearDocumentState: () => initialState,
  },
  extraReducers: (builder: any) => {
    builder
      // Get Documents
      .addCase(getDocuments.pending, (state: any) => ({
        ...state,
        isLoading: true,
        isError: false,
        error: "",
      }))
      .addCase(
        getDocuments.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          data: action.payload?.data?.documents || [],
        })
      )
      .addCase(
        getDocuments.rejected,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          isLoading: false,
          isError: true,
          error: action.payload?.message,
        })
      )
      // Add Document
      .addCase(
        addDocument.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: [...state.data, action.payload?.data?.document],
        })
      )
      // Update Document
      .addCase(
        updateDocument.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.map((doc: any) =>
            doc.id === action.payload?.data?.document?.id
              ? action.payload?.data?.document
              : doc
          ),
        })
      )
      // Delete Document
      .addCase(
        deleteDocument.fulfilled,
        (state: any, action: PayloadAction<any>) => ({
          ...state,
          data: state.data.filter(
            (doc: any) => doc.id !== action.payload?.data?.documentId
          ),
        })
      );
  },
});

export const { clearDocumentState } = documentSlice.actions;
export default documentSlice.reducer;
