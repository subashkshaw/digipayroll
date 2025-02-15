import CustomTable from "@/app/components/customTable";
import React from "react";

const TDS = () => {
  const columns = [
    { field: "employeeNo", headerName: "Employee No", sortable: true },
    { field: "employeeId", headerName: "Employee ID", sortable: true },
    { field: "name", headerName: "Employee Name", sortable: true },
    { field: "pan", headerName: "PAN", sortable: true },
    { field: "adhoc", headerName: "Adhoc", sortable: true },
    { field: "basic", headerName: "Basic", sortable: true },
    { field: "hra", headerName: "House Rent Allowance", sortable: true },
    {
      field: "specialAllowance",
      headerName: "Special Allowance",
      sortable: true,
    },
    {
      field: "leaveTravelAllowance",
      headerName: "Leave Travel Allowance",
      sortable: true,
    },
    { field: "yearlyBonus", headerName: "Yearly Bonus", sortable: true },
    { field: "arrear", headerName: "Arrear", sortable: true },
    { field: "mealCard", headerName: "Meal Card", sortable: true },
    { field: "grossSalaries", headerName: "Gross Salaries", sortable: true },
    { field: "hraExemption", headerName: "HRA Exemption", sortable: true },
    {
      field: "totalExemptionUs10",
      headerName: "Total Exemption u/s 10",
      sortable: true,
    },
    {
      field: "grossAfterExemption",
      headerName: "Gross Salaries after Exemption u/s 10",
      sortable: true,
    },
    {
      field: "professionalTax",
      headerName: "Professional Tax",
      sortable: true,
    },
    {
      field: "standardDeduction",
      headerName: "Standard Deduction",
      sortable: true,
    },
    {
      field: "totalDeductionUs16",
      headerName: "Total Deduction u/s 16",
      sortable: true,
    },
    {
      field: "incomeFromSalary",
      headerName: "Income from Salary",
      sortable: true,
    },
    {
      field: "grossTotalIncome",
      headerName: "Gross Total Income",
      sortable: true,
    },
    {
      field: "savingsUnder80C",
      headerName: "Savings under 80C",
      sortable: true,
    },
    {
      field: "interestOnHousingLoan80EE",
      headerName: "Interest on Housing Loan-80EE",
      sortable: true,
    },
    {
      field: "interestOnHousingLoan80EEA",
      headerName: "Interest on Housing Loan-80EEA",
      sortable: true,
    },
    {
      field: "medicalInsuranceParents",
      headerName: "Medical Insurance of Parents",
      sortable: true,
    },
    {
      field: "medicalTreatmentSeniorCitizen80DDB",
      headerName: "Medical Treatment for Senior Citizens (80DDB)",
      sortable: true,
    },
    { field: "donations80G", headerName: "Donations-80G", sortable: true },
    {
      field: "employeeNPS80CCD1B",
      headerName: "Employee NPS 80CCD(1B)",
      sortable: true,
    },
    {
      field: "employerNPS80CCD2",
      headerName: "Employer NPS 80CCD(2)",
      sortable: true,
    },
    {
      field: "totalExemptionUcVIA",
      headerName: "Total Exemption u/c VIA",
      sortable: true,
    },
    {
      field: "netTaxableAmount",
      headerName: "Net Taxable Amount",
      sortable: true,
    },
    { field: "rawTax", headerName: "Raw Tax", sortable: true },
    { field: "rebate", headerName: "Rebate u/s 87A", sortable: true },
    { field: "taxAfterRebate", headerName: "Tax after Rebate", sortable: true },
    { field: "surcharge", headerName: "Surcharge", sortable: true },
    {
      field: "taxWithSurcharge",
      headerName: "Tax with Surcharge",
      sortable: true,
    },
    { field: "cess", headerName: "Cess", sortable: true },
    { field: "totalTaxPayable", headerName: "Tax Payable", sortable: true },
  ];

  // Hardcoded data (from the CustomTable component)
  const data = [
    {
      employeeNo: "12345",
      employeeId: "EMP001",
      name: "John Doe",
      pan: "ABCDE1234F",
      adhoc: 5000,
      basic: 150000,
      hra: 10000,
      specialAllowance: 5000,
      leaveTravelAllowance: 3000,
      yearlyBonus: 8000,
      arrear: 2000,
      mealCard: 1500,
      grossSalaries: 60000,
      hraExemption: 4000,
      totalExemptionUs10: 5000,
      grossAfterExemption: 55000,
      professionalTax: 2500,
      standardDeduction: 5000,
      totalDeductionUs16: 7500,
      incomeFromSalary: 47500,
      grossTotalIncome: 47500,
      savingsUnder80C: 15000,
      interestOnHousingLoan80EE: 2000,
      interestOnHousingLoan80EEA: 1500,
      medicalInsuranceParents: 2000,
      medicalTreatmentSeniorCitizen80DDB: 3000,
      donations80G: 1000,
      employeeNPS80CCD1B: 5000,
      employerNPS80CCD2: 3000,
      totalExemptionUcVIA: 21500,
      netTaxableAmount: 26000,
      rawTax: 5200,
      rebate: 2500,
      taxAfterRebate: 2700,
      surcharge: 100,
      taxWithSurcharge: 2800,
      cess: 56,
      totalTaxPayable: 2856,
    },
    {
      employeeNo: "67890",
      employeeId: "EMP002",
      name: "Jane Smith",
      pan: "FGHIJ5678K",
      adhoc: 6000,
      basic: 35000,
      hra: 12000,
      specialAllowance: 7000,
      leaveTravelAllowance: 4000,
      yearlyBonus: 9000,
      arrear: 3000,
      mealCard: 2000,
      grossSalaries: 70000,
      hraExemption: 4500,
      totalExemptionUs10: 6000,
      grossAfterExemption: 65000,
      professionalTax: 3000,
      standardDeduction: 5000,
      totalDeductionUs16: 8000,
      incomeFromSalary: 57000,
      grossTotalIncome: 57000,
      savingsUnder80C: 20000,
      interestOnHousingLoan80EE: 2500,
      interestOnHousingLoan80EEA: 2000,
      medicalInsuranceParents: 2500,
      medicalTreatmentSeniorCitizen80DDB: 3500,
      donations80G: 1200,
      employeeNPS80CCD1B: 6000,
      employerNPS80CCD2: 3500,
      totalExemptionUcVIA: 23300,
      netTaxableAmount: 33700,
      rawTax: 6740,
      rebate: 2700,
      taxAfterRebate: 4040,
      surcharge: 120,
      taxWithSurcharge: 4160,
      cess: 83.2,
      totalTaxPayable: 4243.2,
    },
  ];

  // Tax calculation logic
  const calculateTax = (row: any) => {
    const grossSalaries =
      row.basic +
      row.hra +
      row.specialAllowance +
      row.leaveTravelAllowance +
      row.yearlyBonus +
      row.arrear +
      row.mealCard;

    const hraExemption = Math.min(row.hra, row.basic * 0.4);
    const totalExemptionUs10 =
      hraExemption + row.leaveTravelAllowance + row.mealCard;
    const grossAfterExemption = grossSalaries - totalExemptionUs10;

    const totalDeductionUs16 = row.professionalTax + row.standardDeduction;
    const incomeFromSalary = grossAfterExemption - totalDeductionUs16;

    const grossTotalIncome = incomeFromSalary;

    const totalExemptionUcVIA =
      row.savingsUnder80C +
      row.interestOnHousingLoan80EE +
      row.medicalInsuranceParents +
      row.medicalTreatmentSeniorCitizen80DDB +
      row.donations80G +
      row.employeeNPS80CCD1B +
      row.employerNPS80CCD2;

    const netTaxableAmount = grossTotalIncome - totalExemptionUcVIA;
    const rawTax = netTaxableAmount * 0.1; // Assuming 10% tax rate
    const rebate = Math.min(12500, rawTax);
    const taxAfterRebate = Math.max(rawTax - rebate, 0);
    const surcharge = taxAfterRebate > 5000000 ? taxAfterRebate * 0.1 : 0;
    const taxWithSurcharge = taxAfterRebate + surcharge;
    const cess = taxWithSurcharge * 0.04;
    const totalTaxPayable = taxWithSurcharge + cess;

    return {
      grossSalaries,
      hraExemption,
      totalExemptionUs10,
      grossAfterExemption,
      totalDeductionUs16,
      incomeFromSalary,
      grossTotalIncome,
      totalExemptionUcVIA,
      netTaxableAmount,
      rawTax,
      rebate,
      taxAfterRebate,
      surcharge,
      taxWithSurcharge,
      cess,
      totalTaxPayable,
    };
  };

  // Transform data by applying tax calculations
  const taxCalculations = data.map((row) => ({
    ...row,
    ...calculateTax(row),
  }));

  return (
    <div>
      <CustomTable columns={columns} data={taxCalculations} />
    </div>
  );
};

export default TDS;
