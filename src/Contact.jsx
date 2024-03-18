import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact({ selectedPlan }) {
  const [cleaningPlan, setCleaningPlan] = useState(selectedPlan);
  const [isSending, setIsSending] = useState(false); // For spinner
  const [submissionCompleted, setSubmissionCompleted] = useState(false); // To track submission status

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Start sending (show spinner)

    emailjs
      .sendForm(
        "service_htnmq5b",
        "template_ygo3j7o",
        e.target,
        "hDfUIXlvtr5OsYZKg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false); // Stop spinner
          setSubmissionCompleted(true); // Show submission completed message
        },
        (error) => {
          console.log(error.text);
          setIsSending(false); // In case of error, stop spinner and maybe handle error state
          alert("Failed to send the message, please try again.");
        }
      );
  };

  const handlePlanChange = (event) => {
    setCleaningPlan(event.target.value);
  };

  useEffect(() => {
    setCleaningPlan(selectedPlan);
  }, [selectedPlan]);

  if (submissionCompleted) {
    return (
      <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800 text-center">
        <p className="text-2xl font-light text-gray-800 dark:text-white">
          Submission Completed! Thanks, we'll get back shortly.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form class="flex w-full max-w-sm space-x-3" onSubmit={sendEmail}>
        <div class="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us !
          </div>

          <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2">
              <span className="text-gray-700">Select Cleaning Plan:</span>
              <div className="flex flex-col mt-2">
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="cleaningPlan"
                    value="Regular Cleaning"
                    checked={cleaningPlan === "Regular Cleaning"}
                    onChange={handlePlanChange}
                  />
                  <span className="ml-2">Regular Cleaning</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="cleaningPlan"
                    value="Deep Clean"
                    checked={cleaningPlan === "Deep Clean"}
                    onChange={handlePlanChange}
                  />
                  <span className="ml-2">Deep Clean</span>
                </label>
                <label className="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    className="form-radio"
                    name="cleaningPlan"
                    value="Move In/Move Out Cleaning"
                    checked={cleaningPlan === "Move In/Move Out Cleaning"}
                    onChange={handlePlanChange}
                  />
                  <span className="ml-2">Move In/Move Out Cleaning</span>
                </label>
              </div>
            </div>

            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name"
                  name="from_name"
                />
              </div>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <div class=" relative ">
                <input
                  type="text"
                  id="contact-form-email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  name="email"
                />
              </div>
            </div>
            <div class="col-span-2 ">
              <div class=" relative ">
                <input
                  type="text"
                  id="contact-form-phone"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Phone"
                  name="phone"
                />
              </div>
            </div>
            <div class="col-span-2">
              <label class="text-gray-700" for="name">
                <textarea
                  class="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="message"
                  rows="5"
                  cols="40"
                ></textarea>
              </label>
            </div>
            <div class="col-span-2 text-right">
              <button
                type="submit"
                disabled={isSending} // Disable button while sending
                className={`py-2 px-4 ${
                  isSending
                    ? "bg-indigo-300"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}
              >
                {isSending ? (
                  <div>
                    <div className="spinner" aria-label="Sending...">
                      {/* spinner */}
                      {/* spinner */}
                      Sending...
                    </div>
                    <div class="flex justify-center pt-2">
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
