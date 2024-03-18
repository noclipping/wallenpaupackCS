export default function Navbar() {
  return (
    <nav class="fixed top-0 z-50 w-full flex flex-wrap items-center justify-between p-4 bg-white">
      <div class="w-auto lg:order-2 lg:w-1/5 lg:text-center">
        <a class="text-l font-semibold text-gray-800 font-heading" href="#">
          Wallenpaupack Cleaning Services
        </a>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
          <svg
            class="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div class="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
        <a
          class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
          href="#"
        >
          Home
        </a>
        <a
          class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
          href="#"
        >
          Team
        </a>
      </div>
      <div class="hidden w-full navbar-menu lg:order-3 lg:block lg:w-2/5 lg:text-right">
        <a
          class="block mt-4 mr-10 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
          href="#"
        >
          FAQ
        </a>
        <a
          class="block mt-4 text-blue-900 lg:inline-block lg:mt-0 hover:text-indigo-600"
          href="#"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
