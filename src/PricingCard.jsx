import React from "react";

export default function PricingCard({
  handlePlanSelect,
  title = "Enterprise",
  price = "0",
  currency = "$",
  period = "/ month",
  features = [],
  disabledFeatures = [],
  description = "",
}) {
  return (
    <div className="m-auto my-4 w-64 p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
      <p className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">
        {title}
      </p>
      <p className="text-3xl font-bold text-gray-900 dark:text-white">
        {currency + price}
        <span className="text-sm text-gray-300">{period}</span>
      </p>
      <p className="mt-4 text-xs text-gray-600 dark:text-gray-100">
        {description}
      </p>
      <ul className="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
        {features.map((feature, index) => (
          <li key={index} className="mb-3 flex items-center">
            <svg
              class="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              stroke="currentColor"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            {feature}
          </li>
        ))}
        {disabledFeatures.map((feature, index) => (
          <li key={index} className="mb-3 flex items-center opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              class="w-6 h-6 mr-2"
              fill="red"
              viewBox="0 0 1792 1792"
            >
              <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          handlePlanSelect(title);
        }}
        type="button"
        className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Choose plan
      </button>
    </div>
  );
}
