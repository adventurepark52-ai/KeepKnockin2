import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home" },
  { label: "About" },
  { label: "Services" },
];

export const ApplicantsSection = (): JSX.Element => {
  return (
    <section
      className="w-full h-[60vh] relative bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.65)_0%,rgba(217,217,217,0)_100%)] rounded-[30px]"></div>

      {/* Header */}
      <header className="absolute top-11 left-0 right-0 flex items-center justify-between px-[93px] z-10">
        <div className="flex items-center">
          <img
            src="/src/assets/keepknockin_logo.png"
            alt="Keep Knockin' Logo"
            width={176}
            height={41}
            className="rounded-lg"
          />
        </div>

        <nav className="flex items-center gap-[65px]">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="[font-family:'Poppins',Helvetica] font-medium text-[#d6d717] text-sm text-center tracking-[0] leading-[19px] whitespace-nowrap"
            >
              {item.label}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Button
            variant="outline"
            className="h-auto px-[27px] py-2 bg-[#1d1d1d] rounded-[43px] border border-solid border-[#d6d717] shadow-[2px_2px_0px_#d6d717] [font-family:'Poppins',Helvetica] font-medium text-[#d6d717] text-sm text-center tracking-[0] leading-[23px] whitespace-nowrap hover:bg-[#1d1d1d]"
          >
            Applicant Login
          </Button>

          <Button className="h-auto px-[27px] py-2.5 bg-[#d6d717] rounded-[36px] shadow-[2px_2px_0px_#1d1d1d] [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-sm text-center tracking-[0] leading-[19px] whitespace-nowrap hover:bg-[#d6d717]">
            Employer Login
          </Button>

          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/src/assets/pic2.png"
              alt="Menu/Profile Icon"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Main Text Content */}
      <main className="absolute top-[390px] left-12 right-12 z-10">
        <h1 className="w-[1124px] [font-family:'Poppins',Helvetica] font-medium text-[#d6d717] text-[56px] tracking-[0] leading-[77px]">
          KNOCK ON THE RIGHT DOORS.
          <br />
          GET HIRED YOUR WAY.
        </h1>

        <p className="w-[690px] mt-[160px] [font-family:'Poppins',Helvetica] font-normal text-[#d6d717] text-xl tracking-[0] leading-[33px]">
          From finding the right opportunities to discovering events near
          you, this is where connections start and grow.
        </p>
      </main>

      {/* Buttons on Right Side */}
      <div className="absolute top-[514px] right-12 flex flex-col gap-[16px] z-10">
        <Button className="w-[194px] h-[43px] bg-[#6735bc] rounded-lg shadow-game-shadow [font-family:'Poppins',Helvetica] font-medium text-[#f0f0f0] text-base text-center tracking-[0] leading-[19px] whitespace-nowrap hover:bg-[#6735bc]">
          Download now
        </Button>

        <Button className="w-[194px] h-[43px] bg-[#d6d717] rounded-lg shadow-game-shadow [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-base text-center tracking-[0] leading-[19px] whitespace-nowrap hover:bg-[#d6d717]">
          Recruiter&apos;s login
        </Button>
      </div>
    </section>
  );
};
