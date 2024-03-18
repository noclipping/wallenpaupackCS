import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact({ selectedPlan }) {
  const [cleaningPlan, setCleaningPlan] = useState(selectedPlan);
  const [isSending, setIsSending] = useState(false);
  const [submissionCompleted, setSubmissionCompleted] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    setCleaningPlan(selectedPlan);
  }, [selectedPlan]);

  const validateForm = () => {
    if (!formData.from_name.trim()) return "Name is required.";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email))
      return "Invalid email address.";
    if (!/^\+?(\d.*){3,}$/g.test(formData.phone))
      return "Invalid phone number.";
    return "";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const validationMsg = validateForm();
    if (validationMsg) {
      setValidationMessage(validationMsg);
      setIsSending(false);
      return;
    }
    setValidationMessage(""); // clear validation message
    setIsSending(true);

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
          setIsSending(false);
          setSubmissionCompleted(true);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
      <form className="flex w-full max-w-sm space-x-3" onSubmit={sendEmail}>
        <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
            Contact us!
          </div>

          <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
            <div className="col-span-2">
              <span className="text-gray-700">Select Cleaning Plan:</span>
              <div className="flex flex-col mt-2">
                {/* Radio buttons for cleaning plan */}
                {/* Ensure these inputs are also controlled by state like the others if necessary */}
              </div>
            </div>

            {/* Name input */}
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-name"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Email input */}
            <div className="col-span-2 lg:col-span-1">
              <div className=" relative ">
                <input
                  type="email"
                  id="contact-form-email"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Phone input */}
            <div className="col-span-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="contact-form-phone"
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Message input */}
            <div className="col-span-2">
              <label className="text-gray-700" htmlFor="comment">
                <textarea
                  className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Enter your comment"
                  name="message"
                  rows="5"
                  cols="40"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </label>
            </div>

            {/* Validation Message */}
            {validationMessage && (
              <div
                className="col-span-2"
                style={{
                  color: "red",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {validationMessage}
              </div>
            )}

            {/* Submit button */}
            <div className="col-span-2 text-right">
              <button
                type="submit"
                disabled={isSending}
                className={`py-2 px-4 ${
                  isSending
                    ? "bg-indigo-300"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
