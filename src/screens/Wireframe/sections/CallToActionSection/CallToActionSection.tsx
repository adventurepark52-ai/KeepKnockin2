import React from "react";
import pinterest from "/assets/pinterest.png";
import linkedin from "/assets/linkedin.png";
import insta from "/assets/insta.png";
import yt from "/assets/yt.png";
import app_store from "/assets/app_store.png";
import play_store from "/assets/play_store.png";

export const CallToActionSection = (): JSX.Element => {
  const socialIcons = [
    { id: "pinterest-icon", name: "Pinterest", url: "https://pinterest.com", image: pinterest },
    { id: "linkedin-icon", name: "LinkedIn", url: "https://in.linkedin.com/company/kepp-knockin", image: linkedin },
    { id: "instagram-icon", name: "Instagram", url: "https://instagram.com", image: insta },
    { id: "youtube-icon", name: "YouTube", url: "https://youtube.com", image: yt },
  ];

  return (
    <div className="w-full">
      {/* Call to Action Section with updated layout */}
      <div className="text-center py-12 bg-white relative z-10">
        <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#1d1d1d] text-2xl md:text-3xl mb-2">
          THE RIGHT KNOCK OPENS THE RIGHT DOOR.
        </h1>
        {/* Keep "Ready to Get Started" on single line */}
        <h2 className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-xl md:text-2xl mb-8 whitespace-nowrap">
          READY TO GET STARTED?
        </h2>
        
        {/* App Store buttons side by side */}
        <div id="download" className="flex flex-row items-center justify-center gap-6 mb-8">
          <a href="#" className="group transition-all duration-300 hover:scale-105">
            <img src={app_store} alt="App Store Badge" className="h-12 w-auto" />
          </a>
          <a href="#" className="group transition-all duration-300 hover:scale-105">
            <img src={play_store} alt="Google Play Badge" className="h-12 w-auto" />
          </a>
        </div>
      </div>

      <footer className="w-full">
        {/* Updated footer layout to match the image */}
        <div className="w-full bg-white px-6 md:px-16 lg:px-24 py-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Left: Company logo with text */}
            <div className="flex items-center gap-4">
              <img 
                src="/assets/keepknockin_logo.png" 
                alt="Keep Knockin' Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Center-left: Social media icons */}
            <div className="flex flex-col items-center gap-3">
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-sm tracking-[0.5px] uppercase">
                FOLLOW US ON
              </span>
              <div className="flex items-center gap-1">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-300 hover:scale-110 hover:opacity-80 p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <img 
                      src={social.image}
                      alt={`${social.name} Icon`}
                      className="w-7 h-7 rounded"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Download Our App section */}
            <div className="flex flex-col items-center gap-3">
              <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-sm tracking-[0.5px] uppercase">
                DOWNLOAD OUR APP
              </span>
              <div className="flex items-center gap-4">
                <a href="#" className="group transition-all duration-300 hover:scale-105">
                  <img src={app_store} alt="App Store Badge" className="h-10 w-auto rounded-md shadow-sm" />
                </a>
                <a href="#" className="group transition-all duration-300 hover:scale-105">
                  <img src={play_store} alt="Google Play Badge" className="h-10 w-auto rounded-md shadow-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1d1d1d] relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 md:px-16 lg:px-24 py-4 gap-4">
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
