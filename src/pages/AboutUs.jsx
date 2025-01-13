// import React from "react";

// function AboutUs() {
//   return (
//     <div>
//       <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
//         <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
//           <div className="w-full md:w-1/2 lg:pr-32">
//             <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
//               There’s a better way to talk with your customers.
//             </h2>
//             <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
//               Help Scout is designed with your customers in mind. Provide email
//               and live chat with a personal touch, and deliver help content
//               right where your customers need it, all in one place, all for one
//               low price.
//             </h3>
//             <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
//               <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">
//                 Get started
//               </button>
//               <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">
//                 Watch a Demo
//               </button>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//             <img src="https://loremflickr.com/g/600/600/girl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;


import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <header className="bg-sky-600 text-white text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      {/* Mission and Values Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission and Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          At Realme, our mission is to redefine wireless audio by combining innovative technology, superior sound quality, and sleek designs.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fade-in-down">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">1M+</h3>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">100+</h3>
            <p className="text-gray-700">Countries Available</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-sky-600 text-white py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          To revolutionize the audio industry by offering unparalleled wireless experiences for all.
        </p>
      </section>

      {/* Specialties Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-sky-100 hover:bg-sky-200 transition-colors">
            <h3 className="text-xl font-bold">Superior Sound</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-sky-100 hover:bg-sky-200 transition-colors">
            <h3 className="text-xl font-bold">Long Battery Life</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-sky-100 hover:bg-sky-200 transition-colors">
            <h3 className="text-xl font-bold">Fast Charging</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-sky-100 hover:bg-sky-200 transition-colors">
            <h3 className="text-xl font-bold">Ergonomic Design</h3>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">State-of-the-Art Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Advanced Audio Drivers</h3>
            <p className="text-gray-700 mt-2">Cutting-edge drivers deliver unmatched sound clarity and bass.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Noise Cancellation</h3>
            <p className="text-gray-700 mt-2">Block out distractions for a focused listening experience.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Water Resistance</h3>
            <p className="text-gray-700 mt-2">Perfect for workouts and outdoor adventures.</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Bluetooth 5.3</h3>
            <p className="text-gray-700 mt-2">Faster, stronger, and more reliable wireless connectivity.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-sky-600 text-white text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Customer Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="p-4 shadow-lg rounded-lg bg-sky-700 hover:bg-sky-600 transition-colors">
            <p>"The sound quality is amazing! It's like being in a concert."</p>
            <h3 className="mt-4 font-bold">- User A</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-sky-700 hover:bg-sky-600 transition-colors">
            <p>"Fast charging has saved me countless times. Highly recommend!"</p>
            <h3 className="mt-4 font-bold">- User B</h3>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-sky-700 hover:bg-sky-600 transition-colors">
            <p>"Super comfortable to wear all day. Absolutely love it!"</p>
            <h3 className="mt-4 font-bold">- User C</h3>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">How long does the battery last?</h3>
            <p className="mt-2 text-gray-700">The battery lasts up to 24 hours on a single charge.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">Is it water-resistant?</h3>
            <p className="mt-2 text-gray-700">Yes, it is IPX5 water-resistant.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">What devices are compatible?</h3>
            <p className="mt-2 text-gray-700">It is compatible with all Bluetooth-enabled devices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
