import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-gray-800">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-blue-600 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Welcome to <span className="font-bold text-purple-600">ZestyFood</span>, 
            where flavors come alive! We’re passionate about making every meal special, 
            delivering joy and deliciousness straight to your doorstep. Your cravings, our priority.
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Our Mission */}
          <div className="bg-white shadow-xl rounded-xl p-8 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-bold">ZestyFood</span>, we aim to create extraordinary dining experiences. 
              From seamless ordering to delectable meals, we’re here to make your food moments unforgettable.
            </p>
          </div>

          {/* Card 2: What We Offer */}
          <div className="bg-white shadow-xl rounded-xl p-8 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>Global Cuisine:</strong> Discover tastes from across the world.
              </li>
              <li>
                <strong>Effortless Ordering:</strong> A platform that’s intuitive and fun to use.
              </li>
              <li>
                <strong>Quick Deliveries:</strong> Hot and fresh meals, delivered with love.
              </li>
              <li>
                <strong>Exclusive Offers:</strong> Deals that make every meal affordable.
              </li>
            </ul>
          </div>

          {/* Card 3: Our Values */}
          <div className="bg-white shadow-xl rounded-xl p-8 transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>Customer Joy:</strong> Your happiness fuels us.
              </li>
              <li>
                <strong>Excellence:</strong> We prioritize quality in every bite.
              </li>
              <li>
                <strong>Community:</strong> Supporting local and growing together.
              </li>
            </ul>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Join Us on a Flavorful Adventure!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-bold text-purple-600">ZestyFood</span>, we believe food is more than just fuel—it’s a connection, a memory, and a reason to smile. 
            Let us make every meal remarkable. Thank you for making us a part of your journey.
          </p>
          <p className="mt-6 text-xl font-bold text-purple-600">- The ZestyFood Team</p>
        </div>
      </div>
    </div>
  );
};

export default About;
