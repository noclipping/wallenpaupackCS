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
        "service_udq4vg8",
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
                  <div className="spinner" aria-label="Sending...">
                    {/* Spinner icon or text */}
                    Sending...
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
