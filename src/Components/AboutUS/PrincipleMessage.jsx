import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../Home_/Navbar";

const PrincipleMessage = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Animated Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Principal's Message
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600 font-medium">
              Guiding with <span className="text-indigo-600">Wisdom</span>,
              Inspiring with <span className="text-purple-600">Passion</span>
            </p>
          </motion.div>

          {/* Main Card with Floating Animation */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
          >
            <div className="md:flex">
              {/* Principal Photo with Border Animation */}
              <div className="md:flex-shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-br-2xl opacity-20"></div>
                <motion.img
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-80 w-full object-cover md:w-80 md:h-full"
                  src="src/assets/Rameshpokhrel.jpg"
                  alt="Principal"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <motion.h2
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-white"
                  >
                    Ramesh pokhrel
                  </motion.h2>
                  <motion.p
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-indigo-200"
                  >
                    Principal, PS School
                  </motion.p>
                </div>
              </div>

              {/* Message Content with Staggered Animation */}
              <div className="p-8 md:p-10">
                <motion.div variants={containerVariants}>
                  <motion.div variants={itemVariants}>
                    <div className="text-sm font-semibold tracking-wider text-indigo-600 uppercase">
                      Words of Wisdom
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="mt-6 space-y-6 text-gray-700"
                  >
                    <motion.p
                      whileHover={{ x: 5 }}
                      className="border-l-4 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-all duration-300"
                    >
                      Welcome to Panchadhura Secondary School (PSS) – A place
                      where students receive a great education and grow in all
                      areas of life.
                    </motion.p>

                    <motion.p
                      whileHover={{ x: 5 }}
                      className="border-l-4 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-all duration-300"
                    >
                      Holistic Development – We focus on helping students
                      succeed academically, socially, and emotionally.
                    </motion.p>

                    <motion.p
                      whileHover={{ x: 5 }}
                      className="border-l-4 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-all duration-300"
                    >
                      Respect and Inclusivity – We create a supportive and
                      respectful environment for everyone in our school
                      community.
                    </motion.p>

                    <motion.p
                      whileHover={{ x: 5 }}
                      className="border-l-4 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-all duration-300"
                    >
                      Committed Staff – Our dedicated teachers and staff work
                      hard to provide engaging and challenging learning
                      experiences to help students reach their full potential.
                    </motion.p>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="mt-10 pt-6 border-t border-gray-200"
                  >
                    <p className="font-medium text-gray-900">
                      With warm regards,
                    </p>
                    <div className="mt-2 flex items-center">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                      <span className="shrink-0 px-4 font-bold text-indigo-700">
                        Ramesh pokhrel
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Cards Section */}
          <motion.div
            variants={containerVariants}
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-bold text-gray-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600">
                To pioneer an educational renaissance where boundaries dissolve
                between disciplines, creating leaders who will shape a
                sustainable and equitable future.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-600">
                To cultivate intellectual curiosity through transformative
                learning experiences, groundbreaking research, and meaningful
                community partnerships that transcend borders.
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="ml-3 text-lg font-bold text-gray-900">
                  Core Values
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-5 w-5 bg-indigo-100 text-indigo-800 rounded-full mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong className="text-indigo-700">Integrity:</strong>{" "}
                    Uncompromising ethical standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-5 w-5 bg-purple-100 text-purple-800 rounded-full mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong className="text-purple-700">Innovation:</strong>{" "}
                    Fearless pursuit of new ideas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center h-5 w-5 bg-blue-100 text-blue-800 rounded-full mr-3 mt-0.5">
                    ✓
                  </span>
                  <span>
                    <strong className="text-blue-700">Inclusion:</strong>{" "}
                    Strength through diversity
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default PrincipleMessage;
