import wcs from "./wcs.png";
function Hero({ scrollToPlans, handlePlanSelect }) {
  return (
    <div>
      <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
        <div class="container relative  flex px-6 py-16 mx-auto md:-mx-4 lg:mx-auto ">
          <div class="relative z-20 flex flex-col sm:w-3/4 lg:w-3/4">
            <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
            <h1 class="flex flex-col text-4xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-6xl dark:text-white">
              WALLENPAUPACK
              <span class="text-5xl sm:text-7xl">CLEANING SERVICES</span>
            </h1>
            <p class="text-sm text-gray-700 sm:text-base dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div class="flex mt-8">
              <a
                onClick={scrollToPlans}
                href="#"
                class="px-4 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-400"
              >
                Get started
              </a>
              <a
                onClick={handlePlanSelect}
                href="#"
                class="px-4 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div class="relative hidden sm:none md:block md:w-1/2 lg:w-3/5">
            <img
              src={wcs}
              class="max-w-xs m-auto  md:max-w-sm"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="relative block md:hidden sm:w-1/3 lg:w-3/5 m-auto">
        <img src={wcs} class="max-w-xs m-auto  md:max-w-sm " loading="lazy" />
      </div>
    </div>
  );
}

export default Hero;
