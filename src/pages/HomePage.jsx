import React from "react";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white">
        <Hero />
      </div>

      {/* Features Section */}
      <div className="relative overflow-hidden bg-sky-800 pt-16 pb-32 space-y-24">
        {/* Feature 1 */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Crystal-Clear Sound Quality
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Enjoy immersive audio with high-definition sound and deep bass, perfect for music, calls, and gaming.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg bg-sky-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-600 hover:bg-sky-700 hover:ring-sky-700"
                      href="/learn-more"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="data:image/jpeg;base64,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" // Replace with a real image URL
                  alt="Crystal-Clear Sound"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Fast Charging
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Get 12 hours of playtime with just 10 minutes of charging. Always stay connected when you need it most.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                      href="/learn-more"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="647"
                  height="486"
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-full lg:max-w-none"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrU4SXTimfyVteX6R6lqVtc2LvUkM4P3rBA&s" // Replace with a real image URL
                  alt="Fast Charging"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-8 w-8 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.5l4 4-4 4m0-8H8.5m3.5 8l-4-4 4-4m0 8V6.5"
                      />
                    </svg>
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Comfortable Design
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Lightweight and ergonomically crafted for all-day wear without fatigue.
                  </p>
                  <div className="mt-6">
                    <a
                      className="inline-flex rounded-lg bg-teal-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-teal-600 hover:bg-teal-700 hover:ring-teal-700"
                      href="/learn-more"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                <img
                  loading="lazy"
                  width="646"
                  height="485"
                  className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_kpJlq9o0SfOuXHXS5lyAyKS9rJiqc-zcA&s" // Replace with a real image URL
                  alt="Comfortable Design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
