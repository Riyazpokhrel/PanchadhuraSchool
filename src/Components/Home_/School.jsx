import React from "react";
import { Link } from "react-router-dom";

const School = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 md:p-8 min-h-screen">
      {/* Image Section with Full View */}
      <div
        className="w-full md:w-1/2 p-2 md:p-4 animate__animated animate__fadeInLeft flex justify-center"
        style={{ animationDuration: "1s" }}
      >
        <img
          loading="lazy"
          src={"src/assets/gate.jpg"}
          alt="Panchadhura school"
          className="rounded-md shadow-lg w-full h-64 md:h-[80vh] object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Message Section */}
      <div
        className="w-full md:w-1/2 p-2 md:p-4 animate__animated animate__fadeInRight flex flex-col justify-center"
        style={{ animationDuration: "1s" }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-xl">
          Panchadhura Secondary School, established in 2029 BS, is a prominent
          educational institution in Bardibas Cheru-5, Mahottari, Nepal. The
          school is dedicated to providing quality education, with experienced
          teachers guiding students to excel academically. It also offers
          various extracurricular activities like sports and cultural events,
          helping students develop life skills and explore their interests.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-xl">
          By combining academic learning with traditional values, the school
          prepares students for future challenges. Panchadhura Secondary School
          plays a vital role in shaping young minds, fostering confidence,
          responsibility, and community spirit, and continues to inspire and
          empower generations of learners in the region.
        </p>

        {/* <Link to="/school2" className="text-xl ">
          Read More
        </Link> */}
        <Link to="/school2">
          <button class="border text-gray-50  duration-300 relative group cursor-pointer shadow-2xl  overflow-hidden h-12 w-48 rounded-md bg-sky-700 p-2  font-extrabold hover:bg-red-500">
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-sky-600"></div>
            <p class="z-10 absolute bottom-2 left-2  hover:text-white">
              See more
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default School;
