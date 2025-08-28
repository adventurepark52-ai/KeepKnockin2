import React from "react";
import { Button } from "../../components/ui/button";
import { ApplicantsSection } from "./sections/ApplicantsSection/ApplicantsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ComparisonSection } from "./sections/ComparisonSection/ComparisonSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { RecruitersSection } from "./sections/RecruitersSection/RecruitersSection";

export const Wireframe = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full max-w-[1440px] mx-auto relative">
        <ApplicantsSection />

        {/* Backed By Section - positioned directly below hero */}
        <div className="flex flex-col w-full items-center gap-10 py-12 mb-16 relative z-10 bg-white">
          <div className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-xl text-center tracking-[0] leading-[41px]">
            BACKED BY
          </div>
          <div className="flex items-center justify-center gap-12">
            <img
              src="/assets/product.png"
              alt="Product Logo"
              width={200}
              height={75}
              className="opacity-100"
            />
            <img
              src="/assets/midas.png"
              alt="Midas Logo"
              width={125}
              height={60}
              className="opacity-100"
            />
            <img
              src="/assets/circle.png"
              alt="Circle Logo"
              width={200}
              height={75}
              className="opacity-100"
            />
            <img
              src="/assets/waveless.png"
              alt="Waveless Logo"
              width={200}
              height={75}
              className="opacity-100"
            />
          </div>
        </div>

        {/* For Recruiters and Applicants Section - Updated */}
        <div className="flex justify-between items-center px-16 py-20 bg-white relative z-10">
          <div className="flex flex-col w-[300px] items-start gap-6">
            <div className="[font-family:'Poppins',Helvetica] font-bold text-[#1d1d1d] text-4xl tracking-[0] leading-[48px]">
              FOR RECRUITERS
            </div>
            <div className="[font-family:'Poppins',Helvetica] font-normal text-[#9ca3af] text-lg tracking-[0] leading-[28px] max-w-[280px]">
              Hire fast via a clean, web-only dashboard
            </div>
            <Button className="w-[200px] h-auto bg-[#6735bc] hover:bg-[#5a2da0] rounded-xl px-8 py-4 shadow-[4px_4px_0px_#000000]">
              <div className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-base text-center tracking-[0] leading-[20px]">
                Recruiter's Login
              </div>
            </Button>

{/* Explore Button - Opposite direction tilt */}
<div className="flex flex-col items-start gap-4 mt-12">
  <div className="relative">
    {/* Perfect oval button tilted in opposite direction */}
    <div className="w-[200px] h-[120px] bg-white border-2 border-[#6735bc] rounded-full relative transition-all duration-300 hover:bg-[#6735bc] group cursor-pointer transform -rotate-45">
      
      {/* Arrow positioned in upper right - counter-rotated to stay upright */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1" 
        stroke="#6735bc" 
        className="w-20 h-25 group-hover:stroke-white transition-colors duration-300 absolute top-4 right-6 transform rotate-45"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
      
      {/* EXPLORE text positioned in lower left - counter-rotated to stay readable */}
      <span className="font-['Poppins',Helvetica] font-bold text-[#6735bc] text-lg tracking-wide group-hover:text-white transition-colors duration-300 absolute bottom-8 left-8 transform rotate-45">
        EXPLORE
      </span>
      
    </div>
  </div>
</div>
          </div>

          {/* Mobile Screens - Updated with offset positioning */}
          <div className="flex justify-center items-end gap-8 relative">
            {/* First phone - positioned higher */}
            <div className="relative -mb-8">
              <img
                src="/assets/pic5.png"
                alt="Recruiter Dashboard Mobile"
                width={300}
                height={600}
                className="rounded-[3rem]"
              />
            </div>
            {/* Second phone - positioned lower */}
            <div className="relative">
              <img
                src="/assets/pic6.png"
                alt="Applicant Profile Mobile"
                width={300}
                height={600}
                className="rounded-[3rem]"
              />
            </div>
          </div>

          <div className="flex flex-col w-[300px] items-start gap-6">
            <div className="[font-family:'Poppins',Helvetica] font-bold text-[#1d1d1d] text-4xl tracking-[0] leading-[48px]">
              FOR APPLICANTS
            </div>
            <div className="[font-family:'Poppins',Helvetica] font-normal text-[#9ca3af] text-lg tracking-[0] leading-[28px] max-w-[280px]">
              Apply from your phone, get noticed, show your vibe
            </div>
            <Button className="w-[200px] h-auto bg-[#d6d717] hover:bg-[#c4c516] rounded-xl px-8 py-4 shadow-[4px_4px_0px_#000000]">
              <div className="text-[#1d1d1d] [font-family:'Poppins',Helvetica] font-medium text-base text-center tracking-[0] leading-[20px]">
                Download App
              </div>
            </Button>
          </div>
        </div>

        <RecruitersSection />

        <div className="flex justify-center py-12 relative z-10 bg-white">
          <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-3xl text-center tracking-[0] leading-[40px]">
            KEEP KNOCKIN&apos; COMPARED TO OTHERS
          </div>
        </div>

        <div className="flex justify-center px-16 py-8 relative z-10 bg-white">
          <div className="w-full max-w-[1200px]">
            <ComparisonSection />
          </div>
        </div>

        <FeaturesSection />

        <div className="flex justify-center py-12 relative z-10 bg-white">
          <div className="w-full max-w-[1200px] [font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-2xl text-center tracking-[0] leading-[32px]">
            FAQs
          </div>
        </div>

        <FooterSection />

        <div className="w-full relative z-10">
          <CallToActionSection />
        </div>
      </div>
    </div>
  );
};