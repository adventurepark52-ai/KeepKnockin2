import React from "react";
import pinterest from "/src/assets/pinterest.png";
import linkedin from "/src/assets/linkedin.png";
import insta from "/src/assets/insta.png";
import yt from "/src/assets/yt.png";
import app_store from "/src/assets/app_store.png";
import play_store from "/src/assets/play_store.png";

export const CallToActionSection = (): JSX.Element => {
  const socialIcons = [
    { id: "pinterest-icon", name: "Pinterest", url: "https://pinterest.com", image: pinterest },
    { id: "linkedin-icon", name: "LinkedIn", url: "https://linkedin.com", image: linkedin },
    { id: "instagram-icon", name: "Instagram", url: "https://instagram.com", image: insta },
    { id: "youtube-icon", name: "YouTube", url: "https://youtube.com", image: yt },
  ];

  return (
    <div className="w-full">
      <div className="text-center py-12 bg-white">
        <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#1d1d1d] text-2xl md:text-3xl mb-4">
          THE RIGHT KNOCK OPENS THE RIGHT DOOR.
        </h1>
        <h2 className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-xl md:text-2xl mb-8">
          READY TO GET STARTED?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#" className="group transition-all duration-300 hover:scale-105">
            <img src={app_store} alt="App Store Badge" className="h-12 w-auto" />
          </a>
          <a href="#" className="group transition-all duration-300 hover:scale-105">
            <img src={play_store} alt="Google Play Badge" className="h-12 w-auto" />
          </a>
        </div>
      </div>

      <footer className="w-full">
        <div className="w-full bg-white border-t-4 border-[#4A90E2] px-6 md:px-12 lg:px-20 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex items-center gap-3 lg:flex-shrink-0">
              <div className="w-8 h-8 bg-[#1d1d1d] flex items-center justify-center rounded">
                <span className="text-white text-lg">🚪</span>
              </div>
              <div>
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#1d1d1d] text-xl">
                  Keep Knockin'
                </h3>
                <p className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-sm">
                  till the right door opens
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex flex-col items-center gap-3">
                <h4 className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-sm tracking-[0.5px] uppercase">
                  FOLLOW US ON
                </h4>
                <div className="flex items-center gap-3">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group transition-all duration-300 hover:scale-110 hover:opacity-80 p-1 hover:bg-gray-100 rounded-lg"
                    >
                      <img 
                        src={social.image}
                        alt={`${social.name} Icon`}
                        className="w-6 h-6 rounded"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <h4 className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-sm tracking-[0.5px] uppercase">
                  DOWNLOAD OUR APP
                </h4>
                <div className="flex items-center gap-3">
                  <a href="#" className="group transition-all duration-300 hover:scale-105">
                    <img src={app_store} alt="App Store Badge" className="h-9 w-auto rounded-md shadow-sm" />
                  </a>
                  <a href="#" className="group transition-all duration-300 hover:scale-105">
                    <img src={play_store} alt="Google Play Badge" className="h-9 w-auto rounded-md shadow-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1d1d1d]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-12 lg:px-20 py-4 gap-4">
            <div className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center md:text-left">
              Copyright © 2025 – present. Keep Knockin'. All rights reserved.
            </div>
            <div className="flex items-center justify-center md:justify-end gap-1">
              <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm hover:text-[#d6d717] transition-colors duration-300">
                Terms of use
              </a>
              <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm mx-2">|</span>
              <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm hover:text-[#d6d717] transition-colors duration-300">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
