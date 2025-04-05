import React from "react";

// import Navbar from "../Components/Home_/Navbar";
// import ImageSlider from "../Components/Home_/ImageSlider";
// import Teachers from "../Components/Home_/Teachers";
// import Footer from "../Components/Home_/Footer";
// import Testamonials from "../Components/Home_/Testamonials";
// import School from "../Components/About school/School";
import VideoPlayer from "../Components/Home_/Youtubevideo";
import Navbar from "../Components/Home_/Navbar";
import ImageSlider from "../Components/Home_/ImageSlider";
import School from "../Components/Home_/School";
import Teachers from "../Components/Home_/Teachers";
import Testamonials from "../Components/Home_/Testamonials";
import Footer from "../Components/Home_/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <ImageSlider />
      <WelcomeMessage />
      <Youvideo />
      <EventsSection />
      <Teachers />
      <Feedback />
      <Footer /> */}
      <ImageSlider />
      <School />
      <VideoPlayer />
      {/* <EventsSection /> */}
      <Teachers />
      <Testamonials />
      <Footer />
    </div>
  );
};

export default Home;
