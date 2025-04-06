import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUsers, FaBook, FaTrophy } from "react-icons/fa";
import Footer from "../Components/Home_/Footer";
import Navbar from "../Components/Home_/Navbar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header Section */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="text-center mb-16"
          >
            <motion.div variants={item}>
              <p className="text-blue-600 font-semibold mb-2">Since 2029 BS</p>
            </motion.div>
            <motion.h1
              variants={item}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Panchadhura Secondary School
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-5 max-w-xl mx-auto text-xl text-gray-500"
            >
              Where tradition meets innovation in education
            </motion.p>
          </motion.div>

          {/* Main Content with Parallax Effect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            {/* School Image with Floating Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-3 opacity-70"></div>
              <motion.img
                whileHover={{ scale: 1.02 }}
                src="public/mainimage.jpg"
                alt="Panchadhura Secondary School"
                className="relative rounded-xl shadow-2xl w-full h-auto object-cover z-10"
              />
            </motion.div>

            {/* School Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Panchadhura Secondary School was started in 2029 BS in Bardibas
                Cheru-5, Mahottari. For more than 50 years, we have been helping
                students grow with strong education and good cultural values.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our hardworking teachers use new and creative ways to teach. We
                also have fun activities like sports, arts, and cultural
                programs where students can find and improve their special
                talents.
              </p>

              {/* Animated Stats */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 my-8"
              >
                <motion.div
                  variants={item}
                  className="bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-500"
                >
                  <div className="flex items-center">
                    <FaUsers className="text-blue-500 text-2xl mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-gray-800">500+</p>
                      <p className="text-gray-500">Students</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Vision & Mission Section with Floating Cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.h2
              variants={item}
              className="text-3xl font-bold text-center text-gray-800 mb-12"
            >
              Our <span className="text-blue-600">Core Values</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500 rounded-full opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <FaBook className="mr-3" /> Our Vision
                  </h3>
                  <p className="text-blue-100">
                    Our goal is to raise thoughtful and kind leaders who respect
                    their culture and understand the world. We want to create a
                    learning environment that helps students bring positive
                    changes to their community.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-teal-600 to-blue-600 text-white p-8 rounded-2xl shadow-2xl relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-teal-500 rounded-full opacity-20"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-400 rounded-full opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <FaTrophy className="mr-3" /> Our Mission
                  </h3>
                  <p className="text-blue-100">
                    We aim to give students a powerful education using modern
                    teaching methods, great facilities, and programs that
                    support all-round growth. We promise to help every student
                    become smart, responsible, and a good leader.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Philosophy Section with Animated Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-24"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our{" "}
              <span className="text-blue-600">
                Way of Teaching and Learning
              </span>
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-teal-400 -translate-x-1/2"></div>

              {/* Timeline items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Academic Excellence",
                    description:
                      "Well-planned courses taught using modern methods",
                    icon: "📚",
                    side: "left",
                  },
                  {
                    title: "Character Building",
                    description:
                      "Focus on good behavior and strong moral values",
                    icon: "💖",
                    side: "right",
                  },
                  {
                    title: "Holistic Development",
                    description:
                      "Activities in sports, arts, and culture for overall growth",
                    icon: "🎨",
                    side: "left",
                  },
                  {
                    title: "Community Engagement",
                    description:
                      "Programs that connect students with local community needs",
                    icon: "🤝",
                    side: "right",
                  },
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative ${
                      point.side === "left"
                        ? "md:pr-8 md:text-right"
                        : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div className="bg-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
                      <div className="text-3xl mb-3">{point.icon}</div>
                      <h3 className="text-xl font-bold text-blue-700 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                    <div
                      className="hidden md:block absolute top-1/2 w-4 h-4 bg-blue-500 rounded-full -translate-y-1/2"
                      style={{
                        [point.side === "left" ? "right" : "left"]: "-1.5rem",
                      }}
                    ></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
                Discover how Panchadhura Secondary School can help your child
                achieve their full potential.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contactus">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:shadow-lg transition"
                  >
                    Contact Admissions
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
