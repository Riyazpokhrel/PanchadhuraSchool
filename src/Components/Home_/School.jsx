import React from "react";

const School = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-4 md:p-8 min-h-screen">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-2 md:p-4 flex justify-center">
        <img
          loading="lazy"
          src={"dist/gate.jpg"}
          alt="Panchadhura school"
          className="rounded-md shadow-lg w-full h-64 md:h-[80vh] object-cover 
                    transition-all duration-500 ease-in-out 
                    hover:scale-[1.02] hover:shadow-xl"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-2 md:p-4 flex flex-col justify-center space-y-6">
        <h2
          className="text-3xl md:text-5xl font-bold text-blue-800 mb-4 
                      animate-[fadeIn_1s_ease-in-out]"
        >
          About Us
        </h2>

        <div className="space-y-4">
          <p
            className="text-gray-700 leading-relaxed text-base md:text-lg
                       animate-[slideIn_1s_ease-in-out_0.1s] animate-fill-forwards"
          >
            Panchadhura Secondary School, established in 2029 BS, is a prominent
            educational institution in Bardibas Cheru-5, Mahottari, Nepal. The
            school is dedicated to providing quality education, with experienced
            teachers guiding students to excel academically.
          </p>

          <p
            className="text-gray-700 leading-relaxed text-base md:text-lg
                       animate-[slideIn_1s_ease-in-out_0.3s] animate-fill-forwards"
          >
            It also offers various extracurricular activities like sports and
            cultural events, helping students develop life skills and explore
            their interests. By combining academic learning with traditional
            values, the school prepares students for future challenges.
          </p>

          <p
            className="text-gray-700 leading-relaxed text-base md:text-lg
                       animate-[slideIn_1s_ease-in-out_0.5s] animate-fill-forwards"
          >
            Panchadhura Secondary School plays a vital role in shaping young
            minds, fostering confidence, responsibility, and community spirit,
            and continues to inspire and empower generations of learners in the
            region.
          </p>
        </div>
      </div>
    </div>
  );
};

export default School;
