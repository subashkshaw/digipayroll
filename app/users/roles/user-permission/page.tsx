"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import { AppDispatch, RootState } from "@/app/redux";
import { addAccess } from "@/app/redux/slices/access.slice";
import RightModel from "@/app/components/rightModel";
import CustomTable from "@/app/components/customTable";
import { CiEdit } from "react-icons/ci";
import { getUsers } from "@/app/redux/slices/users.slice";

const UserPermission = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user, "user data");
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useSelector((state: RootState) => state.user);
  console.log(users, "users data");

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Access Controller");

  const [formData, setFormData] = React.useState({
    viewEmp: "",
    viewAttendance: "",
    viewLeaves: "",
    viewReimbursement: "",
    viewTravel: "",
    viewAsset: "",
    viewDocuments: "",
    viewPayroll: "",
    viewSalary: "",
    viewItd: "",
    viewMonthSalary: "",
    viewAnnualSalary: "",
    viewTdsSummary: "",
    viewBulkAttendance: "",
    viewLeaveCredit: "",
    viewApprovAuth: "",
    viewResignation: "",
    viewAndEditRoles: "",
    createUser: "",
    createSalary: "",
    createPayroll: "",
    createLeave: "",
    createLeaveCredit: "",
    createAttendance: "",
    createBulkAttend: "",
    createAssets: "",
    createApprovAuth: "",
    createTds: "",
    createHoliday: "",
    editUser: "",
    editAttendance: "",
    editLeaves: "",
    editPayroll: "",
    editSalary: "",
    editLeaveCredit: "",
    editBulkAttendance: "",
    editManageAuth: "",
    editAssetLocation: "",
    delUser: "",
    delDocument: "",
    delAttendance: "",
    delLeaves: "",
    delReimbursement: "",
    delTravel: "",
    delAsset: "",
    delResignation: "",
    delHoliday: "",
    delPayroll: "",
    delSalary: "",
    delLeaveCredit: "",
    delBulkAttendance: "",
    delTdsSummary: "",
    delApprovAuth: "",
    managePermissions: "",
  });
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
      eid: user.eid,
      userId: user.id,
    }));
  };

  const ip = {
    fields: [
      {
        fieldName: "Create Employees",
        name: "create_emp",
        type: "checkbox",
        placeholder: "Enable Employees creation",
        onChange: (value: any) => handleChange("create_emp", value),
      },
      {
        fieldName: "Create Attendance",
        name: "create_attendance",
        type: "checkbox",
        placeholder: "Enable Attendance creation",
        onChange: (value: any) => handleChange("create_attendance", value),
      },
      {
        fieldName: "Create Bulk Attendance",
        name: "create_bulk_attend",
        type: "checkbox",
        placeholder: "Enable Bulk Attendance creation",
        onChange: (value: any) => handleChange("create_bulk_attend", value),
      },
      {
        fieldName: "Create Leaves",
        name: "create_leave",
        type: "checkbox",
        placeholder: "Enable Leaves creation",
        onChange: (value: any) => handleChange("create_leave", value),
      },
      {
        fieldName: "Create Leaves Credit",
        name: "create_leave_credit",
        type: "checkbox",
        placeholder: "Enable Leaves Credit creation",
        onChange: (value: any) => handleChange("create_leave_credit", value),
      },
      {
        fieldName: "Create Assets & Location",
        name: "create_assets",
        type: "checkbox",
        placeholder: "Enable Assets & Location creation",
        onChange: (value: any) => handleChange("create_assets", value),
      },
      {
        fieldName: "Create Payroll",
        name: "create_payroll",
        type: "checkbox",
        placeholder: "Enable Payroll creation",
        onChange: (value: any) => handleChange("create_payroll", value),
      },
      {
        fieldName: "Create Salary",
        name: "create_salary",
        type: "checkbox",
        placeholder: "Enable Salary creation",
        onChange: (value: any) => handleChange("create_salary", value),
      },
      {
        fieldName: "Create TDS",
        name: "create_tds_on_sal",
        type: "checkbox",
        placeholder: "Enable TDS On Salary creation",
        onChange: (value: any) => handleChange("create_tds_on_sal", value),
      },
      {
        fieldName: "Create Approving Authority",
        name: "create_manage_auth",
        type: "checkbox",
        placeholder: "Enable Approving Authority creation",
        onChange: (value: any) => handleChange("create_manage_auth", value),
      },
      {
        fieldName: "Create Holidays",
        name: "create_holiday",
        type: "checkbox",
        placeholder: "Enable Holidays creation",
        onChange: (value: any) => handleChange("create_holiday", value),
      },

      {
        fieldName: "View Employees",
        name: "view_emp",
        type: "checkbox",
        placeholder: "Enable Employees view",
        onChange: (value: any) => handleChange("view_emp", value),
      },
      {
        fieldName: "View Documents",
        name: "view_emp_documents",
        type: "checkbox",
        placeholder: "Enable Documents view",
        onChange: (value: any) => handleChange("view_emp_documents", value),
      },
      {
        fieldName: "View Attendance",
        name: "view_emp_attendance",
        type: "checkbox",
        placeholder: "Enable Attendance view",
        onChange: (value: any) => handleChange("view_emp_attendance", value),
      },
      {
        fieldName: "View Bulk Attendance",
        name: "view_bulk_attendance",
        type: "checkbox",
        placeholder: "Enable Bulk Attendance view",
        onChange: (value: any) => handleChange("view_bulk_attendance", value),
      },
      {
        fieldName: "View Leaves",
        name: "view_emp_leaves",
        type: "checkbox",
        placeholder: "Enable Leaves view",
        onChange: (value: any) => handleChange("view_emp_leaves", value),
      },
      {
        fieldName: "View Leaves Credit",
        name: "view_leave_credit",
        type: "checkbox",
        placeholder: "Enable Leaves Credit view",
        onChange: (value: any) => handleChange("view_leave_credit", value),
      },
      {
        fieldName: "View Reimbursements",
        name: "view_emp_reimbursement",
        type: "checkbox",
        placeholder: "Enable Reimbursements view",
        onChange: (value: any) => handleChange("view_emp_reimbursement", value),
      },
      {
        fieldName: "View Travel Requests",
        name: "view_emp_travel_req",
        type: "checkbox",
        placeholder: "Enable Travel Requests view",
        onChange: (value: any) => handleChange("view_emp_travel_req", value),
      },
      {
        fieldName: "View Assets Request & Return",
        name: "view_asset_req_return",
        type: "checkbox",
        placeholder: "Enable Assets Request & Return view",
        onChange: (value: any) => handleChange("view_asset_req_return", value),
      },
      {
        fieldName: "View Payroll",
        name: "view_emp_payroll",
        type: "checkbox",
        placeholder: "Enable Payroll view",
        onChange: (value: any) => handleChange("view_emp_payroll", value),
      },
      {
        fieldName: "View Monthly Salary",
        name: "view_month_sal",
        type: "checkbox",
        placeholder: "Enable Monthly Salary view",
        onChange: (value: any) => handleChange("view_month_sal", value),
      },
      {
        fieldName: "View Annual Salary",
        name: "view_annual_sal",
        type: "checkbox",
        placeholder: "Enable Annual Salary view",
        onChange: (value: any) => handleChange("view_annual_sal", value),
      },
      {
        fieldName: "View TDS Summary",
        name: "view_tds_summary",
        type: "checkbox",
        placeholder: "Enable TDS Summary view",
        onChange: (value: any) => handleChange("view_tds_summary", value),
      },
      {
        fieldName: "View Resignation",
        name: "view_resign",
        type: "checkbox",
        placeholder: "Enable Resignation view",
        onChange: (value: any) => handleChange("view_resign", value),
      },
      {
        fieldName: "View Approving Authority",
        name: "view_approv_auth",
        type: "checkbox",
        placeholder: "Enable viewing approving authority",
        onChange: (value: any) => handleChange("view_approv_auth", value),
      },
      {
        fieldName: "View ITD",
        name: "view_itd",
        type: "checkbox",
        placeholder: "Enable viewing ITD",
        onChange: (value: any) => handleChange("view_itd", value),
      },
      {
        fieldName: "View Employees and Edit Roles",
        name: "view_and_edit_roles",
        type: "checkbox",
        placeholder: "Enable viewing and editing roles",
        onChange: (value: any) => handleChange("view_and_edit_roles", value),
      },

      {
        fieldName: "Edit Employees",
        name: "edit_emp",
        type: "checkbox",
        placeholder: "Enable Employees edit",
        onChange: (value: any) => handleChange("edit_emp", value),
      },
      {
        fieldName: "Edit Attendance",
        name: "edit_attendance",
        type: "checkbox",
        placeholder: "Enable Attendance edit",
        onChange: (value: any) => handleChange("edit_attendance", value),
      },
      {
        fieldName: "Edit Bulk Attendance",
        name: "edit_bulk_attendance",
        type: "checkbox",
        placeholder: "Enable Bulk Attendance edit",
        onChange: (value: any) => handleChange("edit_bulk_attendance", value),
      },
      {
        fieldName: "Edit Leaves",
        name: "edit_leaves",
        type: "checkbox",
        placeholder: "Enable Leaves edit",
        onChange: (value: any) => handleChange("edit_leaves", value),
      },
      {
        fieldName: "Edit Leaves Credit",
        name: "edit_leave_credit",
        type: "checkbox",
        placeholder: "Enable Leaves Credit edit",
        onChange: (value: any) => handleChange("edit_leave_credit", value),
      },
      {
        fieldName: "Edit Assets & Location",
        name: "edit_asset_location",
        type: "checkbox",
        placeholder: "Enable Assets & Location edit",
        onChange: (value: any) => handleChange("edit_asset_location", value),
      },
      {
        fieldName: "Edit Payroll",
        name: "edit_payroll",
        type: "checkbox",
        placeholder: "Enable Payroll edit",
        onChange: (value: any) => handleChange("edit_payroll", value),
      },
      {
        fieldName: "Edit Salary",
        name: "edit_salary",
        type: "checkbox",
        placeholder: "Enable Salary edit",
        onChange: (value: any) => handleChange("edit_salary", value),
      },

      {
        fieldName: "Delete Employees",
        name: "del_emp",
        type: "checkbox",
        placeholder: "Enable Employees deletion",
        onChange: (value: any) => handleChange("del_emp", value),
      },
      {
        fieldName: "Delete Documents",
        name: "del_documents",
        type: "checkbox",
        placeholder: "Enable Documents deletion",
        onChange: (value: any) => handleChange("del_documents", value),
      },
      {
        fieldName: "Delete Attendance",
        name: "del_attendance",
        type: "checkbox",
        placeholder: "Enable Attendance deletion",
        onChange: (value: any) => handleChange("del_attendance", value),
      },
      {
        fieldName: "Delete Bulk Attendance",
        name: "del_bulk_attendance",
        type: "checkbox",
        placeholder: "Enable Bulk Attendance deletion",
        onChange: (value: any) => handleChange("del_bulk_attendance", value),
      },
      {
        fieldName: "Delete Leaves",
        name: "del_leaves",
        type: "checkbox",
        placeholder: "Enable Leaves deletion",
        onChange: (value: any) => handleChange("del_leaves", value),
      },
      {
        fieldName: "Delete Leaves Credit",
        name: "del_leave_credit",
        type: "checkbox",
        placeholder: "Enable Leaves Credit deletion",
        onChange: (value: any) => handleChange("del_leave_credit", value),
      },
      {
        fieldName: "Delete Reimbursements",
        name: "del_reimbursement",
        type: "checkbox",
        placeholder: "Enable Reimbursements deletion",
        onChange: (value: any) => handleChange("del_reimbursement", value),
      },
      {
        fieldName: "Delete Travel Requests",
        name: "del_travel_req",
        type: "checkbox",
        placeholder: "Enable Travel Requests deletion",
        onChange: (value: any) => handleChange("del_travel_req", value),
      },
      {
        fieldName: "Delete Assets Request & Return",
        name: "del_asset_req_return",
        type: "checkbox",
        placeholder: "Enable Assets Request & Return deletion",
        onChange: (value: any) => handleChange("del_asset_req_return", value),
      },
      {
        fieldName: "Delete Payroll",
        name: "del_payroll",
        type: "checkbox",
        placeholder: "Enable Payroll deletion",
        onChange: (value: any) => handleChange("del_payroll", value),
      },
      {
        fieldName: "Delete Salary",
        name: "del_salary",
        type: "checkbox",
        placeholder: "Enable Salary deletion",
        onChange: (value: any) => handleChange("del_salary", value),
      },
      {
        fieldName: "Delete ITD",
        name: "del_tds_summary",
        type: "checkbox",
        placeholder: "Enable deletion of ITD",
        onChange: (value: any) => handleChange("del_tds_summary", value),
      },
      {
        fieldName: "Delete Approving Authority",
        name: "del_approv_auth",
        type: "checkbox",
        placeholder: "Enable deletion of approving authority",
        onChange: (value: any) => handleChange("del_approv_auth", value),
      },
      {
        fieldName: "Delete Holidays",
        name: "del_holiday",
        type: "checkbox",
        placeholder: "Enable deletion of holidays",
        onChange: (value: any) => handleChange("del_holiday", value),
      },
      {
        fieldName: "Delete Resignation",
        name: "del_resignation",
        type: "checkbox",
        placeholder: "Enable deletion of resignation",
        onChange: (value: any) => handleChange("del_resignation", value),
      },
      {
        fieldName: "Manage Permissions",
        name: "manage_permissions",
        type: "checkbox",
        placeholder: "Enable managing permissions",
        onChange: (value: any) => handleChange("manage_permissions", value),
      },
    ],
  };

  const handleSubmit = async () => {
    try {
      await dispatch(addAccess(formData)).unwrap();
      setOpen(false);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  const handleEdit = (rowId: any) => {
    console.log("Editing row with ID:", rowId); // Use rowId
    setOpen(!open);
    setTitle("Access Controller");
  };
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const columns = [
    { field: "eid", headerName: "Emp.ID", sortable: true },
    { field: "name", headerName: "Name", sortable: true },
    { field: "email", headerName: "Email", sortable: true },
    { field: "role", headerName: "Role", sortable: true },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      renderCell: (params: any) => {
        console.log("Render Cell Params:", params); // Debugging
        const rowId = params.row?.id; // Ensure id is accessible
        // console.log("Row ID:", rowId); // Debugging

        return (
          <div className="flex items-center space-x-2">
            <CiEdit
              size={20}
              className="cursor-pointer text-blue-600 mr-2"
              onClick={() => handleEdit(rowId)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <>
      {open && (
        <RightModel
          ip={ip}
          title={title}
          submit={handleSubmit}
          close={() => setOpen(false)}
        />
      )}
      <CustomTable
        columns={columns}
        data={users}
        success={!isLoading && !isError}
        error={error}
      />
    </>
  );
};

export default UserPermission;
