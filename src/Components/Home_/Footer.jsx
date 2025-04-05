import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0e76bd] text-white py-5 text-center w-full">
      <div className="flex flex-wrap justify-around px-5">
        {/* Our Location Section */}
        <div className="flex-1 min-w-[250px] md:min-w-[300px] m-2">
          <h4 className="mb-2 text-lg uppercase">Our Location</h4>
          <div id="map">
            Embed Google Maps
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1520.0942863306948!2d85.8681633434081!3d27.03978041679377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec74152baaaaab%3A0xa52338e33c335abf!2sPanchadhura%20Higher%20Secondary%20School!5e1!3m2!1sen!2snp!4v1721638615866!5m2!1sen!2snp"
              className="w-full h-[200px] md:h-[280px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="flex-1 min-w-[250px] md:min-w-[300px] m-2">
          <h4 className="mb-2 text-lg uppercase">Contact Us</h4>
          <p className="mb-1 text-sm">
            <strong>Address:</strong> Bardibas-5, Mahottari, Nepal
          </p>
          <p className="mb-1 text-sm" to="mailto:Panchadhura99@gmail.com">
            <strong>Email:</strong> Panchadhura@gmail.com
          </p>
          <p className="mb-1 text-sm">
            <strong>Phone:</strong> 9817605215
          </p>

          <div className="space-x-2 mt-3 flex justify-center  md:justify-center">
            <div className="">
              <h3 className="text-base font-bold mb-2">Useful Links</h3>
              <Link to="https://www.facebook.com/share/15RWRFaJXN/">
                <img
                  className="h-8 ml-6"
                  src="src/assets/Facebok.png"
                  alt="Facebook"
                />
              </Link>
              <Link to="">
                <img
                  className="h-8 m-2 ml-6"
                  src="src/assets/Insta.jpg"
                  alt="Instagram"
                />
              </Link>
              <Link to="">
                <img
                  className="h-8 m-2 ml-6"
                  src="src/assets/2021_Facebook_icon.svg.png"
                  alt="YouTube"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-5 border-t border-gray-600 pt-3">
        <p className="text-sm">
          &copy; 2024 Panchadhura School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
