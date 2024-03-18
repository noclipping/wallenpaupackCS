import React, { useState } from "react";
import wcs from "./wcs.png";
export default function Nav({
  activeSection,
  setActiveSection,
  scrollToPlans,
  scrollToTeam,
  scrollToFaq,
  scrollToHero,
  scrollToReviews,
  scrollToContact,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={wcs} className="h-8" alt="Flowbite Logo" loading="lazy" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            WCS
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={`md:block ${isOpen ? "block" : "hidden"} w-full md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToHero();
                  setActiveSection("hero");
                }}
                href="#"
                class={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "hero"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:text-blue-500 md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Home
              </a>
            </li>

            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToPlans();
                  setActiveSection("plans");
                }}
                href="#"
                class={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "plans"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:text-blue-500 md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Plans
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToReviews();
                  setActiveSection("reviews");
                }}
                href="#"
                class={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "reviews"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:text-blue-500 md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTeam();
                  setActiveSection("team");
                }}
                href="#"
                class={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "team"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:text-blue-500 md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Team
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToFaq();
                  setActiveSection("faq");
                }}
                href="#"
                class={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "faq"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:text-blue-500 md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                  setActiveSection("contact");
                }}
                href="#"
                class={`block py-2 px-3 rounded md:p-0 ${
                  activeSection === "contact"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-gray-900 dark:text-white"
                } hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:text-blue-500 md:border-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
