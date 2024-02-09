import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="w-full h-[250px] border-t-[1px] snap-start">
      <div className="h-[90%] flex items-center justify-between text-white p-10">
        <div className="flex items-center gap-4">
          <img
            loading="lazy"
            src="/assets/Asset7.png"
            className="w-[100px] h-[100px] rounded-[50%] object-cover"
            alt=""
          />
          <div className="">
            <h1 className="text-xl">Vishnu Kamaliya</h1>
            <p className="text-gray-500">CEO Blue Soltech</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-3">
          <Link to="https://www.instagram.com/vk_ultra_marathoner/">
            <FaInstagram className="hover:text-gray-300" />
          </Link>
          <Link to="https://www.linkedin.com/in/vishnu-kamaliya-468270167">
            <FaLinkedinIn className="hover:text-gray-300" />
          </Link>
          <Link to="https://www.facebook.com/vishnu.kamaliya.3">
            <FaFacebookF className="hover:text-gray-300" />
          </Link>
          <Link to="https://twitter.com/Vishnhkamaliya">
            <FaXTwitter className="hover:text-gray-300" />
          </Link>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500">
        Copyright © All Rights Reserved.
      </div>
    </section>
  );
}

export default Footer;
