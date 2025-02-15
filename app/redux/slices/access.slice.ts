import apiClient from "@/app/utils/apiClient";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks for Access operations
export const getAccesss = createAsyncThunk(
  "access/all",
  async (_, { rejectWithValue }: any) => {
    try {
      const response = await apiClient.get<any>("user/user-permissions/all");
      return response.data.access;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addAccess = createAsyncThunk(
  "access/create",
  async (
    {
      viewEmp,
      viewAttendance,
      viewLeaves,
      viewReimbursement,
      viewTravel,
      viewAsset,
      viewDocuments,
      viewPayroll,
      viewSalary,
      viewItd,
      viewMonthSalary,
      viewAnnualSalary,
      viewTdsSummary,
      viewBulkAttendance,
      viewLeaveCredit,
      viewApprovAuth,
      viewResignation,
      viewAndEditRoles,
      createUser,
      createSalary,
      createPayroll,
      createLeave,
      createLeaveCredit,
      createAttendance,
      createBulkAttend,
      createAssets,
      createApprovAuth,
      createTds,
      createHoliday,
      editUser,
      editAttendance,
      editLeaves,
      editPayroll,
      editSalary,
      editLeaveCredit,
      editBulkAttendance,
      editManageAuth,
      editAssetLocation,
      delUser,
      delDocument,
      delAttendance,
      delLeaves,
      delReimbursement,
      delTravel,
      delAsset,
      delResignation,
      delHoliday,
      delPayroll,
      delSalary,
      delLeaveCredit,
      delBulkAttendance,
      delTdsSummary,
      delApprovAuth,
      managePermissions,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      viewEmp: Boolean(viewEmp),
      viewAttendance: Boolean(viewAttendance),
      viewLeaves: Boolean(viewLeaves),
      viewReimbursement: Boolean(viewReimbursement),
      viewTravel: Boolean(viewTravel),
      viewAsset: Boolean(viewAsset),
      viewDocuments: Boolean(viewDocuments),
      viewPayroll: Boolean(viewPayroll),
      viewSalary: Boolean(viewSalary),
      viewItd: Boolean(viewItd),
      viewMonthSalary: Boolean(viewMonthSalary),
      viewAnnualSalary: Boolean(viewAnnualSalary),
      viewTdsSummary: Boolean(viewTdsSummary),
      viewBulkAttendance: Boolean(viewBulkAttendance),
      viewLeaveCredit: Boolean(viewLeaveCredit),
      viewApprovAuth: Boolean(viewApprovAuth),
      viewResignation: Boolean(viewResignation),
      viewAndEditRoles: Boolean(viewAndEditRoles),
      createUser: Boolean(createUser),
      createSalary: Boolean(createSalary),
      createPayroll: Boolean(createPayroll),
      createLeave: Boolean(createLeave),
      createLeaveCredit: Boolean(createLeaveCredit),
      createAttendance: Boolean(createAttendance),
      createBulkAttend: Boolean(createBulkAttend),
      createAssets: Boolean(createAssets),
      createApprovAuth: Boolean(createApprovAuth),
      createTds: Boolean(createTds),
      createHoliday: Boolean(createHoliday),
      editUser: Boolean(editUser),
      editAttendance: Boolean(editAttendance),
      editLeaves: Boolean(editLeaves),
      editPayroll: Boolean(editPayroll),
      editSalary: Boolean(editSalary),
      editLeaveCredit: Boolean(editLeaveCredit),
      editBulkAttendance: Boolean(editBulkAttendance),
      editManageAuth: Boolean(editManageAuth),
      editAssetLocation: Boolean(editAssetLocation),
      delUser: Boolean(delUser),
      delDocument: Boolean(delDocument),
      delAttendance: Boolean(delAttendance),
      delLeaves: Boolean(delLeaves),
      delReimbursement: Boolean(delReimbursement),
      delTravel: Boolean(delTravel),
      delAsset: Boolean(delAsset),
      delResignation: Boolean(delResignation),
      delHoliday: Boolean(delHoliday),
      delPayroll: Boolean(delPayroll),
      delSalary: Boolean(delSalary),
      delLeaveCredit: Boolean(delLeaveCredit),
      delBulkAttendance: Boolean(delBulkAttendance),
      delTdsSummary: Boolean(delTdsSummary),
      delApprovAuth: Boolean(delApprovAuth),
      managePermissions: Boolean(managePermissions),
    };
    try {
      const response = await apiClient.post<any, typeof payload>(
        "user/user-permissions",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateAccess = createAsyncThunk(
  "access/update",
  async (
    {
      id,
      viewEmp,
      viewAttendance,
      viewLeaves,
      viewReimbursement,
      viewTravel,
      viewAsset,
      viewDocuments,
      viewPayroll,
      viewSalary,
      viewItd,
      viewMonthSalary,
      viewAnnualSalary,
      viewTdsSummary,
      viewBulkAttendance,
      viewLeaveCredit,
      viewApprovAuth,
      viewResignation,
      viewAndEditRoles,
      createUser,
      createSalary,
      createPayroll,
      createLeave,
      createLeaveCredit,
      createAttendance,
      createBulkAttend,
      createAssets,
      createApprovAuth,
      createTds,
      createHoliday,
      editUser,
      editAttendance,
      editLeaves,
      editPayroll,
      editSalary,
      editLeaveCredit,
      editBulkAttendance,
      editManageAuth,
      editAssetLocation,
      delUser,
      delDocument,
      delAttendance,
      delLeaves,
      delReimbursement,
      delTravel,
      delAsset,
      delResignation,
      delHoliday,
      delPayroll,
      delSalary,
      delLeaveCredit,
      delBulkAttendance,
      delTdsSummary,
      delApprovAuth,
      managePermissions,
    }: any,
    { rejectWithValue }: any
  ) => {
    const payload = {
      id,
      viewEmp: Boolean(viewEmp),
      viewAttendance: Boolean(viewAttendance),
      viewLeaves: Boolean(viewLeaves),
      viewReimbursement: Boolean(viewReimbursement),
      viewTravel: Boolean(viewTravel),
      viewAsset: Boolean(viewAsset),
      viewDocuments: Boolean(viewDocuments),
      viewPayroll: Boolean(viewPayroll),
      viewSalary: Boolean(viewSalary),
      viewItd: Boolean(viewItd),
      viewMonthSalary: Boolean(viewMonthSalary),
      viewAnnualSalary: Boolean(viewAnnualSalary),
      viewTdsSummary: Boolean(viewTdsSummary),
      viewBulkAttendance: Boolean(viewBulkAttendance),
      viewLeaveCredit: Boolean(viewLeaveCredit),
      viewApprovAuth: Boolean(viewApprovAuth),
      viewResignation: Boolean(viewResignation),
      viewAndEditRoles: Boolean(viewAndEditRoles),
      createUser: Boolean(createUser),
      createSalary: Boolean(createSalary),
      createPayroll: Boolean(createPayroll),
      createLeave: Boolean(createLeave),
      createLeaveCredit: Boolean(createLeaveCredit),
      createAttendance: Boolean(createAttendance),
      createBulkAttend: Boolean(createBulkAttend),
      createAssets: Boolean(createAssets),
      createApprovAuth: Boolean(createApprovAuth),
      createTds: Boolean(createTds),
      createHoliday: Boolean(createHoliday),
      editUser: Boolean(editUser),
      editAttendance: Boolean(editAttendance),
      editLeaves: Boolean(editLeaves),
      editPayroll: Boolean(editPayroll),
      editSalary: Boolean(editSalary),
      editLeaveCredit: Boolean(editLeaveCredit),
      editBulkAttendance: Boolean(editBulkAttendance),
      editManageAuth: Boolean(editManageAuth),
      editAssetLocation: Boolean(editAssetLocation),
      delUser: Boolean(delUser),
      delDocument: Boolean(delDocument),
      delAttendance: Boolean(delAttendance),
      delLeaves: Boolean(delLeaves),
      delReimbursement: Boolean(delReimbursement),
      delTravel: Boolean(delTravel),
      delAsset: Boolean(delAsset),
      delResignation: Boolean(delResignation),
      delHoliday: Boolean(delHoliday),
      delPayroll: Boolean(delPayroll),
      delSalary: Boolean(delSalary),
      delLeaveCredit: Boolean(delLeaveCredit),
      delBulkAttendance: Boolean(delBulkAttendance),
      delTdsSummary: Boolean(delTdsSummary),
      delApprovAuth: Boolean(delApprovAuth),
      managePermissions: Boolean(managePermissions),
    };
    try {
      const response = await apiClient.put<any, typeof payload>(
        `access/${id}`,
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Access State Interface
export interface AccessState {
  isLoading: boolean;
  isError: boolean;
  error: string;

  data: any[];
  others: any;

  isUpdating: boolean;
  updatingError: string;
}

const initialState: AccessState = {
  isLoading: false,
  isError: false,
  error: "",

  data: [],
  others: {},

  isUpdating: false,
  updatingError: "",
};

// Access Slice
export const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    clearAccessState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Handle getAccesss
      .addCase(getAccesss.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(getAccesss.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload || [];
      })
      .addCase(getAccesss.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "An error occurred.";
      })

      // Handle addAccesss
      .addCase(addAccess.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(addAccess.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data.push(action.payload); // Add the new Access to the list
      })
      .addCase(addAccess.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message || "Failed to add Access.";
      })

      // Handle updateAccesss
      .addCase(updateAccess.pending, (state) => {
        state.isUpdating = true;
        state.updatingError = "";
      })
      .addCase(updateAccess.fulfilled, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        const updatedAccess = action.payload;
        state.data = state.data.map((Access) =>
          Access.id === updatedAccess.id ? updatedAccess : Access
        );
      })
      .addCase(updateAccess.rejected, (state, action: PayloadAction<any>) => {
        state.isUpdating = false;
        state.updatingError =
          action.payload?.message || "Failed to update Asset.";
      });
  },
});

// Action creators are generated for each case reducer function
export const { clearAccessState } = accessSlice.actions;

export default accessSlice.reducer;
