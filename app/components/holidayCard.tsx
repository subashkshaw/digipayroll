import React from "react";
import Image from "next/image";

const HolidayCard = () => {
  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 mt-4">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            Upcoming Holidays
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    width={20}
                    height={20}
                    className="w-8 h-8 rounded-full"
                    src="/pic.png"
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Neil Sims
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  $320
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    width={20}
                    height={20}
                    className="w-8 h-8 rounded-full"
                    src="/pic.png"
                    alt="Bonnie image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  $3467
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    width={20}
                    height={20}
                    className="w-8 h-8 rounded-full"
                    src="/pic.png"
                    alt="Michael image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Michael Gough
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  $67
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    width={20}
                    height={20}
                    className="w-8 h-8 rounded-full"
                    src="/pic.png"
                    alt="Lana image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Lana Byrd
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  $367
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    width={20}
                    height={20}
                    className="w-8 h-8 rounded-full"
                    src="/pic.png"
                    alt="Thomas image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Thomes Lean
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  $2367
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HolidayCard;
