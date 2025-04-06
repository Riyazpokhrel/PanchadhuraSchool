import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Teachers = () => {
  const TeachersData = [
    {
      id: 1,
      name: "Ramesh Pokhrel",
      subject: "Principle",
      img: "public/Ramesh pokhrel.jpg",
      contact: "9817605215",
      Link: "https://www.facebook.com/share/19ybwawi7s/",
    },
    {
      id: 2,
      name: "Balkumar Shrestha",
      subject: "Account",
      img: "public/Balkumar shrestha.jpg",
      contact: "9817605215",
      Link: "https://www.facebook.com/share/19xcjxJ43R/",
    },
    {
      id: 3,
      name: "Seshnath das",
      subject: "Math",
      img: "public/seshnath das.jpg",
      contact: "9817605215",
    },
    {
      id: 4,
      name: "Srijana Sigden",
      subject: "English",
      img: "public/srijana sigden.jpg",
      contact: "9817605215",
    },
    {
      id: 5,
      name: "Sharmila Dahal",
      subject: "Nepali",
      img: "public/sarmila dahal.jpg",
      contact: "9817605215",
    },
    {
      id: 6,
      name: "Sharmila Dahal",
      subject: "Nepali",
      img: "public/sarmila dahal.jpg",
      contact: "9817605215",
    },
    {
      id: 7,
      name: "Sharmila Dahal",
      subject: "Nepali",
      img: "public/sarmila dahal.jpg",
      contact: "9817605215",
    },
    {
      id: 8,
      name: "Sharmila Dahal",
      subject: "Nepali",
      img: "public/sarmila dahal.jpg",
      contact: "9817605215",
    },
  ];

  const [displayCount, setDisplayCount] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile devices
        setDisplayCount(4);
      } else {
        // Desktop devices
        setDisplayCount(8);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedTeachers = TeachersData.slice(0, displayCount);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Teachers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedTeachers.map((teacher) => (
          <div
            className="h-[250px] w-full max-w-[300px] sm:max-w-[250px] mx-auto shadow-lg rounded-2xl flex flex-col items-center p-4 transition-transform transform hover:scale-105 hover:shadow-xl"
            key={teacher.id}
          >
            <img
              className="h-28 w-28 sm:h-28 sm:w-28 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all"
              src={teacher.img}
              alt={teacher.name}
            />
            <div className="text-center mt-4">
              <h2 className="text-xl font-semibold">{teacher.name}</h2>
              <p className="text-gray-600">Subject: {teacher.subject}</p>
              <div className="h-[35px] sm:h-[30px] bg-blue-900 flex items-center justify-center mt-4 rounded-lg w-[220px] sm:w-[200px] transition-all hover:bg-blue-700">
                <p className="text-white text-sm">Contact: {teacher.contact}</p>
                {teacher.Link && (
                  <Link
                    to={teacher.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="h-[22px] sm:h-[20px] ml-4 transition-opacity hover:opacity-80"
                      src="src/assets/Facebok.png"
                      alt="Facebook"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {TeachersData.length > displayCount && (
        <div className="text-center mt-6">
          <Link
            to="/more-teachers"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500"
          >
            See More
          </Link>
        </div>
      )}
    </div>
  );
};

export default Teachers;
