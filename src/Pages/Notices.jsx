import React from "react";
import Navbar from "../Components/Home_/Navbar";

const Notices = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center ">
        <div className="mt-44 ">
          <h1 className="text-7xl font-bold flex justify-center  ">
            We're Launching Soon!
          </h1>
          <h1 className="text-2xl ">
            Our website is under construction, but we're almost ready to launch.
            Stay tuned for something amazing!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Notices;
