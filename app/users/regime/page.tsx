import React from "react";

const Regime = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 border border border-gray-300 bg-white">
      <h1 className="text-xl font-bold mb-6 text-center">
        Salary Details Form
      </h1>

      <form>
        {/* Personal Details */}
        <div className="border border-gray-400 p-4 mb-6">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium mb-1">Name:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Designation:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium mb-1">
                Permanent Account No. (PAN):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Date of Birth:</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium mb-1">
                Gender (Male/Female/Senior Citizen):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Residential Address:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Contact Number:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                New Regime/Old Regime:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        {/* Salary Details Section */}
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">1. Salary Details</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (a) Salary as per provisions contained in section 17(1):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (b) Value of perquisites under section 17(2):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (c) Profits in lieu of salary under section 17(3):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">(d) Total:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (e) Reported total amount of salary received from other
                employer(s):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">Total Salary (a + b) </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        {/* Exemptions Section */}
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            2. LESS: Allowances to the extent exempt under Section 10
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (a) Travel concession or assistance under section 10(5):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (b) Death-cum-retirement gratuity under section 10(10):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (c) Commuted value of pension under section 10(10A):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (d) Cash equivalent of leave salary encashment under section
                10(10AA):
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-1">
              <label className="font-medium">
                (e) HRA to the extent exempt under section 10:
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">
                    (i) Actual amount of HRA received:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">
                    (ii) Rent paid in excess of 10% of salary:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="grid grid-cols-2 items-center">
                  <label className="font-medium">(iii) 40% of salary:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (f) Amount of any other exemption under section 10 - FTA:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (g) Amount of any other exemption under section 10 - WA/UA:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (h) Amount of any other exemption under section 10 - Others:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center">
              <label className="font-medium">
                (i) Total amount of exemption claimed under section
                10[2(a)+2(b)+2(c)+2(d)+2(e)+2(f)+2(g)+2(h)]
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        {/* Additional Deductions Section */}
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            3. Total Amount of Salary Received from Current Employer
          </h2>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">Total (1(d) - 2(i)):</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            4. Less: Deductions under Section 16
          </h2>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">
              (a) Standard deduction under section 16(ia)(Exempted upto
              `.75000/-- New Regime) ( `. 50000/- - Old Regime )
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">
              (b) Entertainment allowance under section 16(ii):
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">
              (c) Tax on employment under section 16(iii):
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            5. Total Amount of Deductions under Section 16
          </h2>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">Total (4(a) + 4(b) + 4(c)):</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            6. Income Chargeable Under the Head &quot;Salaries&quot;
          </h2>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">Total (3 + 1(e) - 5):</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            7. Add: Any Other Income Reported by the Employee (Section 192)(2B)
          </h2>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">
              (a) Income (Fixed Deposit - Interest):
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">(b) Interest on NSC, etc.:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">
              (c) Income from House Property:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">
              (d) Income - Interest Earned on Deposits in a Savings Bank:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">Total (a + b + c + d):</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            8. Less: Interest on Housing Loan
          </h2>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">
              (Self Occupied House only) Max ₹2 Lakhs:
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">9. Gross Total Income</h2>
          <div className="grid grid-cols-2 items-center">
            <label className="font-medium">Total (6 + 7 - 8):</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="border border-gray-400 p-4 mb-6">
          <h2 className="text-lg font-semibold mb-4">
            10. LESS: Deductions under Chapter VI-A
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <label className="font-medium">
              (a) Deduction in respect of life insurance premia, contributions
              to provident fund etc. under section 80C
            </label>
            <div className="pl-4">
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">(i) G.P.F. Subscription:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">(ii) U.T.G.E.G.I.S:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">
                  (iii) Group Savings Linked Insurance Scheme (GSLIS – LIC):
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">
                  (iv) Group Personal Accident Insurance Cover Scheme (GPAICS –
                  NIC):
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">
                  (v) Tuition fees paid (for 2 children only):
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">
                  (vi) Life Insurance Premium (L.I.C.):
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">
                  (vii) Subscription to Mutual Fund:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">
                  (viii) Housing loan repayment to authorized Institution
                  (Principal):
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">
                  (ix) Investment in NSS/ PPF/ NSC:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">
                  (x) Fixed Deposit (for a mini period of 5 yrs in SBI or PSB or
                  Sch Bank or post Office 5 yr time Deposit (80C 80CCC, 80CCD)
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">(xi) Others </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="grid grid-cols-2 items-center mb-2">
                <label className="font-medium">Total (i – xi) </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <label className="font-medium">
                (b) Contribution to certain specified Pension Funds of LIC/other
                insurer by an Individual (Subject to certain conditions). Up to
                1,00,000 (Subject to overall limit of Rs. 1,50,000 under Section
                80C, 80CCC and 80CCD).
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Amount:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (c) Deduction in respect of contribution by taxpayer to pension
                scheme under section 80CCD(1) subject to Max. of 10% of Salary
                u/s.80-CCD(1) NPS
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Amount:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (d) Total deduction under section 80C, 80CCC and 80CCD(1) (a + b
                + c) (Max. amount eligible for Savings `.1.5 Lakh ) Evidence
                should be produced for all deduction
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Amount:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (e) Deductions in respect of amount paid/deposited to notified
                pension scheme under section 80CCD (1B)
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Amount:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (f) Deduction in respect of contribution by Employer to pension
                scheme under section 80CCD(2)
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Amount:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (g) Deduction in respect of health insurance premia under
                section 80D
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">For Self:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">For Senior Citizen:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Overall Rs. 50000/-:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (h) Deduction in respect of interest on loan taken for higher
                education under section 80E
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Interest Paid:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (i) Total Deduction in respect of donations to certain funds,
                charitable institutions, Flag Day etc. under section 80G
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Donation Amount:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (j) Deduction in respect of interest on deposits in savings
                account under section 80TTA
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Interest Amount:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (k) Amount deductible under any other provision(s) of Chapter
                VI-A
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">
                    (a) Physically Handicapped (Self) up to 75,000 & Rs.1,25,000
                    if severe disability (80-U):
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">
                    (b) 80EE - Interest payable on loan taken up to Rs. 35 lakhs
                    for residential house (Subject to conditions):
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">
                    (c) Sec.80-TTB SB/FD/RD Interest for Senior citizen.
                    Exemption Limit Rs.50,000/-:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">
                    (d) 80DDB - Medical treatment expenses (specified diseases)
                    up to Rs. 40,000 (Rs. 1,00,000 for senior citizens):
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">
                    (e) 80DD - Medical treatment, training, and rehabilitation
                    of a dependent with disability Rs. 75,000 (Rs. 1,25,000 for
                    severe disability):
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (l) Total of amount deductible under any other provision(s) of
                Chapter VI-A (k(a) + k(b) + k(c) + k(d) + k(e))
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Total:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>

              <label className="font-medium">
                (m) Total Deductions 10 (d + e + f + g + h + i + j + l)
              </label>
              <div className="pl-4">
                <div className="grid grid-cols-2 items-center mb-2">
                  <label className="font-medium">Total Deductions:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <h3 className="text-md font-semibold mb-2">Notes:</h3>
          <p className="mb-2">
            <strong>NOTE 1:</strong> 80DD & 80DDB (Medical treatment/expenditure
            for handicapped dependant): Employer has no power to allow
            deduction. The employer has to deduct tax and the employee has to
            file return along with Form No.10-I and expenses details to the
            Assessing Officer and get refund.
          </p>
          <div>
            <strong>NOTE 2:</strong> Conditions for 80EE:
            <ol className="list-decimal ml-6">
              <li>
                The home loan should have been sanctioned during FY 2016-17.
              </li>
              <li>Loan amount should be less than Rs 35 lakhs.</li>
              <li>
                The value of the house should not be more than Rs 50 Lakh.
              </li>
              <li>
                The home buyer should not have any other existing residential
                house in his name at time of purchase/sanctioned.
              </li>
            </ol>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            11. TOTAL TAXABLE INCOME (9 – 10(m)) (rounded off to the nearest of
            Ten Rupees)
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Total Taxable Income:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            12.(a) INCOME TAX THEREON OLD REGIME ON TOTAL INCOME (COL NO:11)
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Upto Rs. 2,50,000:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                value="Nil"
                readOnly
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">
                Rs. 2,50,001 to Rs. 5,00,000:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">
                Rs. 5,00,001 to Rs. 10,00,000:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Above Rs. 10,00,000:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            12.(b) INCOME TAX THEREON NEW REGIME GROSS SALARY (COL NO 1)
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Upto Rs. 3,00,000:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
                value="Nil"
                readOnly
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">
                Rs. 3,00,001 to Rs. 7,00,000:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">
                Rs. 7,00,001 to Rs. 10,00,000:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">
                Rs. 10,00,001 to Rs. 12,00,000:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">
                Rs. 12,00,001 to Rs. 15,00,000:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Above Rs. 15,00,001:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            13. Deduct a tax rebate up to 12500/- for individuals having total
            taxable income 5 Lakhs in old regime.
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Rebate:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            14. Tax after 87-A rebate (Whichever is Less) - 13
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Tax:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            15. Add: Education Cess 4% to be charged before claiming relief
            u/s.89(1)
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Cess:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">16. Less: Relief u/s.89(1)</label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Relief:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">17. TAX PAYABLE (14 + 15 - 16)</label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Tax Payable:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            18. INCOME-TAX SO FAR DEDUCTED MARCH 2024, JULY 2024, APRIL 2024,
            AUGUST 2024, MAY 2024, SEPTEMBER 2024, JUNE 2024, OCTOBER 2024
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">March 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">April 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">May 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">June 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">July 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">August 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">September 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">October 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            19. BALANCE TO BE DEDUCTED (17 - 18)
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">Balance to be Deducted:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">
            20. I hereby authorize the Drawing & Disbursing Officer to deduct
            the balance amount of tax from my monthly salary as detailed below:
          </label>
          <div className="pl-4">
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">November 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">December 2024:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">January 2025:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="grid grid-cols-2 items-center mb-2">
              <label className="font-medium">February 2025:</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mt-6">
          <label className="font-medium">CERTIFICATE</label>
          <p>
            Certified that I am contributing a sum of{" "}
            <input
              type="text"
              className="border border-gray-300 rounded-md p-1 w-24"
              placeholder="Amount towards PPF"
            />{" "}
            towards PPF and a sum of{" "}
            <input
              type="text"
              className="border border-gray-300 rounded-md p-1 w-24"
              placeholder="Amount towards LIC Premium"
            />{" "}
            towards LIC Premium and the policies are kept alive.
          </p>
          <p>
            Certified that I have purchased/intend to purchase NSC/NSS
            <input
              type="text"
              className="border border-gray-300 rounded-md p-1 w-24"
              placeholder="NSC/NSS Amount"
            />
            (Certified Nos.{" "}
            <input
              type="text"
              className="border border-gray-300 rounded-md p-1 w-24"
              placeholder="Nos"
            />
            )
          </p>
          <p>
            Certified that I have purchased/intend to purchase infrastructure
            bonds
            <input
              type="text"
              className="border border-gray-300 rounded-md p-1 w-24"
              placeholder="Infrastructure Bonds Amount"
            />
            (Certificate{" "}
            <input
              type="text"
              className="border border-gray-300 rounded-md p-1 w-24"
              placeholder="Certificate"
            />
            )
          </p>
          <p>
            Certified that the particulars furnished above by me are correct.
          </p>

          <p>Place: Puducherry</p>
          <p>
            Date:{" "}
            <input
              type="date"
              className="border border-gray-300 rounded-md p-1 w-full"
            />
          </p>
          <p>
            Signature of Assessee:{" "}
            <input
              type="text"
              className="border border-gray-300 rounded-md p-1 w-full"
              placeholder="Signature"
            />
          </p>
          <p>
            Name & Designation:{" "}
            <input
              type="text"
              className="border border-gray-300 rounded-md p-1 w-full"
              placeholder="Name & Designation"
            />
          </p>

          <div>
            <strong>Please Note:</strong>
            <ul className="list-disc pl-6">
              <li>
                Deduction under section 80C + 80CCC + 80CCD(1) can’t exceed Rs
                150,000/- (Section 80CCE).
              </li>
              <li>
                Deduction of Rs. 50,000/- under section 80CCD(1B) is over &
                above deduction under section 80CCD(1). Thus Section 80CCE in
                point 1. above will not apply to this deduction.
              </li>
              <li>
                Provided no deduction under section 80CCD(1B) shall be allowed
                in respect of the amount on which a deduction has been claimed
                and allowed u/s 80CCD(1).
              </li>
              <li>
                Deduction u/s 80D shall be allowed only if the payment is made
                by any mode other than cash. Exception is only for amounts paid
                for Preventive health check-ups.
              </li>
              <li>
                Maximum Deduction u/s 80D shall be allowed only up to Rs
                25,000/- (Indl/others), Rs 50,000/- (Sr Citizen).
              </li>
              <li>
                For Interest on housing loan: provided such acquisition or
                construction is completed within three years from the end of the
                financial year in which capital was borrowed.
              </li>
              <li>
                Original Rent Receipts every month (with Revenue Stamp above `.
                4999/-`) or Rent Agreement. Receipt should contain PAN of the
                landlord if Rent for the year exceeds one lakh.
              </li>
            </ul>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Regime;
