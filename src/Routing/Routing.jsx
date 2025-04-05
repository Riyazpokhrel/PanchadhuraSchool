import React from "react";
import { Routes, Route } from "react-router-dom"; // Routes from react-router-dom
import Home from "../Pages/Home";
import AboutUs from "../Pages/About_Us";
import GalleryAlbum from "../Pages/Gallery";
import Callender from "../Pages/Callender";
import { ContactUs } from "../Pages/ContactUs";
import School2 from "../Components/Home_/About school/School_2";
import PrincipleMessage from "../Components/AboutUS/PrincipleMessage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* No need to wrap with BrowserRouter here */}
      <Route path="/" element={<Home />} />
      <Route path="/panchadhura-profile" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/Gallery/photos" element={<GalleryAlbum />} />
      <Route path="/callendar" element={<Callender />} />
      <Route path="/school2" element={<School2 />} />
      <Route path="/principal-message" element={<PrincipleMessage />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
