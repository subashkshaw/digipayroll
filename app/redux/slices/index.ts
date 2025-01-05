import { combineReducers } from "@reduxjs/toolkit";
import assetReducer from "./asset.slice";
import attendanceReducer from "./attendance.slice";
import bankReducer from "./bank.slice";
import documentReducer from "./document.slice";
import leaveReducer from "./leave.slice";
import locationReducer from "./locations.slice";
import organizationReducer from "./organization.slice";
// import payrollReducer from "./payroll.slice";
import reimbursementReducer from "./reimbursement.slice";
import resignationReducer from "./resignation.slice";
import roleReducer from "./roles.slice";
import travelReducer from "./travel.slice";
import userReducer from "./users.slice";
import workExperienceReducer from "./workExperience.slice";
import authReducer from "./auth.slice";

const rootReducer = combineReducers({
  auth: authReducer,
  asset: assetReducer,
  attendance: attendanceReducer,
  bank: bankReducer,
  document: documentReducer,
  leave: leaveReducer,
  location: locationReducer,
  organization: organizationReducer,
  // payroll: payrollReducer,
  reimbursement: reimbursementReducer,
  resignation: resignationReducer,
  role: roleReducer,
  travel: travelReducer,
  user: userReducer,
  workExperience: workExperienceReducer,
});

export default rootReducer;
