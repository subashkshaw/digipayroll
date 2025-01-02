"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import RightModel from "./rightModel";

type Field = {
  name: string;
  label: string;
  state: boolean;
  setter: Dispatch<SetStateAction<boolean>>;
};

type IpType = {
  section: string;
  fields: Field[];
}[];

const AccessController = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Access Controller");
  const [createEmp, setCreateEmp] = useState(false);
  const [createAttendance, setCreateAttendance] = useState(false);
  const [createBulkAttend, setCreateBulkAttend] = useState(false);
  const [createLeave, setCreateLeave] = useState(false);
  const [createLeaveCredit, setCreateLeaveCredit] = useState(false);
  const [createAssets, setCreateAssets] = useState(false);
  const [createPayroll, setCreatePayroll] = useState(false);
  const [createSalary, setCreateSalary] = useState(false);
  const [createTDSonSal, setCreateTDSonSal] = useState(false);
  const [createManageAuth, setCreateManageAuth] = useState(false);
  const [createHoliday, setCreateHoliday] = useState(false);

  const [viewEmp, setViewEmp] = useState(false);
  const [viewEmpDoc, setViewEmpDoc] = useState(false);
  const [viewAttendance, setViewAttendance] = useState(false);
  const [viewBulkAttendance, setViewBulkAttendance] = useState(false);
  const [viewLeaves, setViewLeaves] = useState(false);
  const [viewLeaveCredit, setViewLeaveCredit] = useState(false);
  const [viewReimbursement, setViewReimbursement] = useState(false);
  const [viewTravelReq, setViewTravelReq] = useState(false);
  const [viewAssetReqReturn, setViewAssetReqReturn] = useState(false);
  const [viewPayroll, setViewPayroll] = useState(false);
  const [viewSalary, setViewSalary] = useState(false);
  const [viewITD, setViewITD] = useState(false);
  const [viewMonthSalary, setViewMonthSalary] = useState(false);
  const [viewAnnualSalary, setViewAnnualSalary] = useState(false);
  const [viewTDSsummary, setViewTDSsummary] = useState(false);
  const [viewResignation, setViewResignation] = useState(false);

  const [editEmp, setEditEmp] = useState(false);
  const [editAttendance, setEditAttendance] = useState(false);
  const [editBulkAttendance, setEditBulkAttendance] = useState(false);
  const [editLeaves, setEditLeaves] = useState(false);
  const [editLeaveCredit, setEditLeaveCredit] = useState(false);
  const [editAssetLocation, setEditAssetLocation] = useState(false);
  const [editPayroll, setEditPayroll] = useState(false);
  const [editSalary, setEditSalary] = useState(false);
  const [editManageAuth, setEditManageAuth] = useState(false);

  const [delEmp, setDelEmp] = useState(false);
  const [delDoc, setDelDoc] = useState(false);
  const [delAttendance, setDelAttendance] = useState(false);
  const [delBulkAttendance, setDelBulkAttendance] = useState(false);
  const [delLeaves, setDelLeaves] = useState(false);
  const [delLeaveCredit, setDelLeaveCredit] = useState(false);
  const [delReimbursement, setDelReimbursement] = useState(false);
  const [delTravelReq, setDelTravelReq] = useState(false);
  const [delAssetReqReturn, setDelAssetReqReturn] = useState(false);
  const [delPayroll, setDelPayroll] = useState(false);
  const [delSalary, setDelSalary] = useState(false);
  const [delManageAuth, setDelManageAuth] = useState(false);

  const ip: IpType = [
    {
      section: "Create",
      fields: [
        {
          name: "create_emp",
          label: "Employees",
          state: createEmp,
          setter: setCreateEmp,
        },
        {
          name: "create_attendance",
          label: "Attendance",
          state: createAttendance,
          setter: setCreateAttendance,
        },
        {
          name: "create_bulk_attend",
          label: "Bulk Attendance",
          state: createBulkAttend,
          setter: setCreateBulkAttend,
        },
        {
          name: "create_leave",
          label: "Leaves",
          state: createLeave,
          setter: setCreateLeave,
        },
        {
          name: "create_leave_credit",
          label: "Leaves Credit",
          state: createLeaveCredit,
          setter: setCreateLeaveCredit,
        },
        {
          name: "create_assets",
          label: "Assets & Location",
          state: createAssets,
          setter: setCreateAssets,
        },
        {
          name: "create_payroll",
          label: "Payroll",
          state: createPayroll,
          setter: setCreatePayroll,
        },
        {
          name: "create_salary",
          label: "Salary",
          state: createSalary,
          setter: setCreateSalary,
        },
        {
          name: "create_tds_on_sal",
          label: "TDS On Salary",
          state: createTDSonSal,
          setter: setCreateTDSonSal,
        },
        {
          name: "create_manage_auth",
          label: "Approving Authority",
          state: createManageAuth,
          setter: setCreateManageAuth,
        },
        {
          name: "create_holiday",
          label: "Holidays",
          state: createHoliday,
          setter: setCreateHoliday,
        },
      ],
    },
    {
      section: "View",
      fields: [
        {
          name: "view_emp",
          label: "Employees",
          state: viewEmp,
          setter: setViewEmp,
        },
        {
          name: "view_emp_documents",
          label: "Documents",
          state: viewEmpDoc,
          setter: setViewEmpDoc,
        },
        {
          name: "view_emp_attendance",
          label: "Attendance",
          state: viewAttendance,
          setter: setViewAttendance,
        },
        {
          name: "view_bulk_attendance",
          label: "Bulk Attendance",
          state: viewBulkAttendance,
          setter: setViewBulkAttendance,
        },
        {
          name: "view_emp_leaves",
          label: "Leaves",
          state: viewLeaves,
          setter: setViewLeaves,
        },
        {
          name: "view_leave_credit",
          label: "Leaves Credit",
          state: viewLeaveCredit,
          setter: setViewLeaveCredit,
        },
        {
          name: "view_emp_reimbursement",
          label: "Reimbursements",
          state: viewReimbursement,
          setter: setViewReimbursement,
        },
        {
          name: "view_emp_travel_req",
          label: "Travel Requests",
          state: viewTravelReq,
          setter: setViewTravelReq,
        },
        {
          name: "view_asset_req_return",
          label: "Assets Request & Return",
          state: viewAssetReqReturn,
          setter: setViewAssetReqReturn,
        },
        {
          name: "view_emp_payroll",
          label: "Payroll",
          state: viewPayroll,
          setter: setViewPayroll,
        },
        {
          name: "view_salary",
          label: "Salary",
          state: viewSalary,
          setter: setViewSalary,
        },
        {
          name: "view_emp_itd",
          label: "Income Tax Declaration",
          state: viewITD,
          setter: setViewITD,
        },
        {
          name: "view_month_sal",
          label: "Monthly Salary",
          state: viewMonthSalary,
          setter: setViewMonthSalary,
        },
        {
          name: "view_annual_sal",
          label: "Annual Salary",
          state: viewAnnualSalary,
          setter: setViewAnnualSalary,
        },
        {
          name: "view_tds_summary",
          label: "TDS Summary",
          state: viewTDSsummary,
          setter: setViewTDSsummary,
        },
        {
          name: "view_resign",
          label: "Resignation",
          state: viewResignation,
          setter: setViewResignation,
        },
      ],
    },
    {
      section: "Edit",
      fields: [
        {
          name: "edit_emp",
          label: "Employees",
          state: editEmp,
          setter: setEditEmp,
        },
        {
          name: "edit_attendance",
          label: "Attendance",
          state: editAttendance,
          setter: setEditAttendance,
        },
        {
          name: "edit_bulk_attendance",
          label: "Bulk Attendance",
          state: editBulkAttendance,
          setter: setEditBulkAttendance,
        },
        {
          name: "edit_leaves",
          label: "Leaves",
          state: editLeaves,
          setter: setEditLeaves,
        },
        {
          name: "edit_leave_credit",
          label: "Leaves Credit",
          state: editLeaveCredit,
          setter: setEditLeaveCredit,
        },
        {
          name: "edit_asset_location",
          label: "Assets & Location",
          state: editAssetLocation,
          setter: setEditAssetLocation,
        },
        {
          name: "edit_payroll",
          label: "Payroll",
          state: editPayroll,
          setter: setEditPayroll,
        },
        {
          name: "edit_salary",
          label: "Salary",
          state: editSalary,
          setter: setEditSalary,
        },
        {
          name: "edit_manage_auth",
          label: "Approving Authority",
          state: editManageAuth,
          setter: setEditManageAuth,
        },
      ],
    },
    {
      section: "Delete",
      fields: [
        {
          name: "del_emp",
          label: "Employees",
          state: delEmp,
          setter: setDelEmp,
        },
        {
          name: "del_documents",
          label: "Documents",
          state: delDoc,
          setter: setDelDoc,
        },
        {
          name: "del_attendance",
          label: "Attendance",
          state: delAttendance,
          setter: setDelAttendance,
        },
        {
          name: "del_bulk_attendance",
          label: "Bulk Attendance",
          state: delBulkAttendance,
          setter: setDelBulkAttendance,
        },
        {
          name: "del_leaves",
          label: "Leaves",
          state: delLeaves,
          setter: setDelLeaves,
        },
        {
          name: "del_leave_credit",
          label: "Leaves Credit",
          state: delLeaveCredit,
          setter: setDelLeaveCredit,
        },
        {
          name: "del_reimbursement",
          label: "Reimbursements",
          state: delReimbursement,
          setter: setDelReimbursement,
        },
        {
          name: "del_travel_req",
          label: "Travel Requests",
          state: delTravelReq,
          setter: setDelTravelReq,
        },
        {
          name: "del_asset_req_return",
          label: "Assets Request & Return",
          state: delAssetReqReturn,
          setter: setDelAssetReqReturn,
        },
        {
          name: "del_payroll",
          label: "Payroll",
          state: delPayroll,
          setter: setDelPayroll,
        },
        {
          name: "del_salary",
          label: "Salary",
          state: delSalary,
          setter: setDelSalary,
        },
        {
          name: "del_manage_auth",
          label: "Approving Authority",
          state: delManageAuth,
          setter: setDelManageAuth,
        },
      ],
    },
  ];

  const handleSubmit = async () => {};
  const handleRightModel = () => {
    setOpen(!open);
    setTitle("Access Controller");
  };
  return (
    <>
      {open && <RightModel ip={ip} title={title} submit={handleSubmit} />}
      <div className="flex flex-col items-end">
        <button
          onClick={handleRightModel}
          className="border-2 border-indigo-400 p-2 rounded-md text-xs"
        >
          Access Controller
        </button>
      </div>
    </>
  );
};

export default AccessController;
