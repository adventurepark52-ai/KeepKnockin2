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
    <div className="bg-[#ffffff] w-full min-h-screen">
      <div className="bg-[#ffffff] w-full max-w-[1440px] mx-auto relative">
        <ApplicantsSection />

        {/* Backed By Section with proper spacing */}
        <div className="flex flex-col w-full items-center gap-10 py-20 mt-16 mb-20">
          <div className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-xl text-center tracking-[0] leading-[41px]">
            BACKED BY
          </div>
          <div className="flex items-center justify-center gap-12">
            <img
              src="/src/assets/product.png"
              alt="Product Logo"
              width={200}
              height={75}
              className="opacity-100"
            />
            <img
              src="/src/assets/midas.png"
              alt="Midas Logo"
              width={125}
              height={60}
              className="opacity-100"
            />
            <img
              src="/src/assets/circle.png"
              alt="Circle Logo"
              width={200}
              height={75}
              className="opacity-100"
            />
            <img
              src="/src/assets/waveless.png"
              alt="Waveless Logo"
              width={200}
              height={75}
              className="opacity-100"
            />
          </div>
        </div>

        {/* For Recruiters and Applicants Section */}
        <div className="flex justify-between items-center px-16 py-20 bg-[#f8f9fa] mt-16">
          <div className="flex flex-col w-[300px] items-start gap-6">
            <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-2xl tracking-[0] leading-[32px]">
              FOR RECRUITERS
            </div>
            <div className="[font-family:'Poppins',Helvetica] font-normal text-[#6b7280] text-lg tracking-[0] leading-[28px]">
              Hire fast via a clean, web-only dashboard
            </div>
            <Button className="w-[180px] h-auto bg-[#6735bc] hover:bg-[#5a2da0] rounded-lg px-8 py-3">
              <div className="[font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-[20px]">
                Recruiter&apos;s Login
              </div>
            </Button>
            
            {/* Explore Button positioned below Recruiter's Login */}
            <div className="flex flex-col items-start gap-4 mt-8">
              <div className="w-[140px] h-[140px] relative">
                <div className="absolute w-[100px] h-[130px] top-[5px] left-[20px] rounded-[50px/65px] border-2 border-solid border-[#6735bc] transform rotate-[15deg]" />
                <div className="absolute top-[55px] left-[65px]">
                  <div className="w-8 h-8 bg-[#6735bc] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#6735bc] text-lg text-left tracking-[0] leading-[24px] ml-8">
                EXPLORE
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8">
            <div className="relative">
              <img
                src="/src/assets/pic5.png"
                alt="Recruiter Dashboard Mobile"
                width={280}
                height={560}
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="relative">
              <img
                src="/src/assets/pic6.png"
                alt="Applicant Profile Mobile"
                width={280}
                height={560}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="flex flex-col w-[300px] items-start gap-6">
            <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-2xl tracking-[0] leading-[32px]">
              FOR APPLICANTS
            </div>
            <div className="[font-family:'Poppins',Helvetica] font-normal text-[#6b7280] text-lg tracking-[0] leading-[28px]">
              Apply from your phone, get noticed, show your vibe
            </div>
            <Button className="w-[180px] h-auto bg-[#d6d717] hover:bg-[#c4c516] rounded-lg px-8 py-3">
              <div className="text-[#1d1d1d] [font-family:'Poppins',Helvetica] font-medium text-sm text-center tracking-[0] leading-[20px]">
                Download App
              </div>
            </Button>
          </div>
        </div>



        <RecruitersSection />

        <div className="flex justify-center py-12">
          <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-3xl text-center tracking-[0] leading-[40px]">
            KEEP KNOCKIN&apos; COMPARED TO OTHERS
          </div>
        </div>

        <div className="flex justify-center px-16 py-8">
          <div className="w-full max-w-[1200px] relative">
            <div className="w-full h-[600px] bg-[#e9eeff] rounded-2xl shadow-lg" />
            <div className="absolute inset-0">
              <ComparisonSection />
            </div>
          </div>
        </div>

        <FeaturesSection />

        <div className="flex justify-center py-12">
          <div className="w-full max-w-[1200px] [font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-2xl text-center tracking-[0] leading-[32px]">
            FAQs
          </div>
        </div>

        <FooterSection />

        <div className="w-full relative">
          <CallToActionSection />
        </div>
      </div>
    </div>
  );
};