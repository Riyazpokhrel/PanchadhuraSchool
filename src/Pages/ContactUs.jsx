import React, { useRef } from "react";
import Swal from "sweetalert2";
import Navbar from "../Components/Home_/Navbar";
import Footer from "../Components/Home_/Footer";

export const ContactUs = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bea9432d-5adc-4a73-9371-5caf806fc3f4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
      });

      formRef.current.reset();
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-[#e7eded] to-white px-6">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl font-bold text-purple-700 mb-2">
            Get in touch
          </h2>
          <div className="w-16 h-1 bg-purple-700 mb-6"></div>
          <form ref={formRef} className="space-y-4" onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg shadow-md border-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg shadow-md border-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg shadow-md border-none focus:ring-2 focus:ring-purple-400"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 rounded-lg text-white bg-gradient-to-r from-orange-400 to-pink-500 shadow-md hover:opacity-90 transition"
            >
              Submit →
            </button>
          </form>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img
            src="src/assets/Message img .png"
            alt="Illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
