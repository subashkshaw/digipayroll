import React from "react";

const PaySlip = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">Salary Slip</h1>
        <p className="text-gray-500 text-lg">For the month of December 2024</p>
      </div>

      {/* Employee Details Section */}
      <div className="bg-white border-2 border-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Employee Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Employee Code:</p>
              <p className="font-semibold">AS115</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Name:</p>
              <p className="font-semibold">Subash Kumar Shaw</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Designation:</p>
              <p className="font-semibold">Full Stack Developer</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Department:</p>
              <p className="font-semibold">Piston</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Date of Birth:</p>
              <p className="font-semibold">25/08/1997</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">PAN:</p>
              <p className="font-semibold">JRUPS6000Q</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">UAN:</p>
              <p className="font-semibold">101941863530</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">ESI:</p>
              <p className="font-semibold">12</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Account No:</p>
              <p className="font-semibold">919010072263435</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">IFSC Code:</p>
              <p className="font-semibold">UTIB00003607</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Date of Joining:</p>
              <p className="font-semibold">18/09/2024</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Last Working Day:</p>
              <p className="font-semibold">14/11/2024</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Reason for Leaving:</p>
              <p className="font-semibold">Resignation</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Payable Days:</p>
              <p className="font-semibold">9</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Leave Balance:</p>
              <p className="font-semibold">3</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p className="font-medium">Regime Opted:</p>
              <p className="font-semibold">New Regime (split into two parts)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Earnings & Deductions Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Earnings */}
        <div className="bg-white border-2 border-gradient-to-r from-green-400 via-teal-500 to-green-600 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Earnings
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p>Basic</p>
              <p className="font-semibold">13,362</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>House Rent Allowance</p>
              <p className="font-semibold">6,681</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Medical Allowance</p>
              <p className="font-semibold">6,681</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Special Allowance</p>
              <p className="font-semibold">2,059</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Leave & Travel Allowance</p>
              <p className="font-semibold">2,672</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>PF Employer Contribution</p>
              <p className="font-semibold">1,950</p>
            </div>
          </div>
          <div className="flex justify-between font-semibold border-t mt-4 pt-2 text-gray-700">
            <p>Gross Pay</p>
            <p className="font-bold text-gray-900">26,724</p>
          </div>
        </div>

        {/* Deductions */}
        <div className="bg-white border-2 border-gradient-to-r from-red-400 via-yellow-400 to-orange-500 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Deductions
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <p>PF Employee Contribution</p>
              <p className="font-semibold">1,800</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>PF Employer Contribution</p>
              <p className="font-semibold">1,800</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>PF EDLI & Admin Charges</p>
              <p className="font-semibold">150</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>ESI/Health Insurance</p>
              <p className="font-semibold">130</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Loan Recovery</p>
              <p className="font-semibold">130</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>Professional Tax</p>
              <p className="font-semibold">130</p>
            </div>
          </div>
          <div className="flex justify-between font-semibold border-t mt-4 pt-2 text-gray-700">
            <p>Total Deductions</p>
            <p className="font-bold text-gray-900">3,880</p>
          </div>
        </div>
      </div>

      {/* Net Pay Section */}
      <div className="bg-white border-2 border-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-lg p-6 mt-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Net Pay</h2>
            <p className="text-3xl font-bold text-green-500">22,844</p>
          </div>
          <div className="flex space-x-6">
            <div>
              <p className="font-medium text-gray-600">Gross Pay (A)</p>
              <p className="text-lg font-semibold text-gray-900">26,724</p>
            </div>
            <div>
              <p className="font-medium text-gray-600">Deductions (B)</p>
              <p className="text-lg font-semibold text-gray-900">-3,880</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaySlip;
