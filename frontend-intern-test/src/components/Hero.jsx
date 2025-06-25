import React from "react";
import heroImage from "../assets/wallpaperflare.com_wallpaper (3).jpg"; 
const Hero = () => {
  return (
    <section className="hero bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="hero-content flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="hero-text md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Hello, I'm{" ARIB "}
             
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Selamat Datang di personal web saya.
            </p>
          </div>
          <div className="hero-image md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src={heroImage}
                alt="profile"
                className="rounded-2xl shadow-xl w-full h-auto object-cover border-4 border-white dark:border-gray-700 transform rotate-1 hover:rotate-0 transition-all duration-500"
              />
              <div className="absolute -inset-4 bg-blue-200 dark:bg-blue-900 rounded-2xl -z-10 opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
