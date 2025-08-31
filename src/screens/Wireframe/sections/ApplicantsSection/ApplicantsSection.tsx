import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home" },
  { label: "About" },
  { label: "Services" },
];

export const ApplicantsSection = (): JSX.Element => {
  return (
    <section
      className="w-full h-screen relative z-10"
      style={{
        backgroundImage: "url('/assets/bg.jpg')",
        backgroundSize: '100% 600px',
        backgroundPosition: 'center calc(50% - 50px)',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9
      }}
    >

      {/* Header */}
      <header className="absolute top-11 left-0 right-0 flex items-center justify-between px-6 md:px-16 lg:px-[93px] z-20">
        <div className="flex items-center">
          <img
            src="/assets/keepknockin_bw_logo.png"
            alt="Keep Knockin' Logo"
            width={176}
            height={41}
            className="rounded-lg"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 lg:gap-[65px]">
          {navigationItems.map((item, index) => (
            <Link
              to={item.label === "Home" ? "/" : `/${item.label.toLowerCase()}`}
              key={index}
              className="[font-family:'Poppins',Helvetica] font-medium text-[#d6d717] text-sm text-center tracking-[0] leading-[19px] whitespace-nowrap hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link to="/applicant-login">
            <Button
              variant="outline"
              className="h-auto px-4 lg:px-[27px] py-2 bg-[#1d1d1d] rounded-[43px] border border-solid border-[#d6d717] shadow-[2px_2px_0px_#d6d717] [font-family:'Poppins',Helvetica] font-medium text-[#d6d717] text-sm text-center tracking-[0] leading-[23px] whitespace-nowrap hover:bg-[#d6d717] hover:text-[#1d1d1d] transition-all"
            >
              Applicant Login
            </Button>
          </Link>

          <Link to="/employer-login">
            <Button className="h-auto px-4 lg:px-[27px] py-2.5 bg-[#d6d717] rounded-[36px] shadow-[2px_2px_0px_#1d1d1d] [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-sm text-center tracking-[0] leading-[19px] whitespace-nowrap hover:bg-[#c4c516] transition-all">
              Employer Login
            </Button>
          </Link>

          {/* Menu and User Profile Icons */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
              <img
                src="/assets/menu.png"
                alt="Menu Icon"
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
            
            <button className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-[#d6d717] transition-all cursor-pointer">
              <img
                src="/assets/user.jpg"
                alt="User Profile"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Main Text Content - centered vertically */}
      <main className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-12 z-20 pt-20">
        {/* Asterisk positioned above the heading */}
        <div className="mb-6">
          <img
            src="/assets/asterisk-bw.png"
            alt="Asterisk"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        
        <h1 className="max-w-[1124px] [font-family:'Poppins',Helvetica] font-medium text-[#d6d717] text-3xl md:text-4xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[77px]">
          KNOCK ON THE RIGHT DOORS.
          <br />
          GET HIRED YOUR WAY.
        </h1>

        <p className="max-w-[690px] mt-8 [font-family:'Poppins',Helvetica] font-normal text-[#d6d717] text-lg lg:text-xl tracking-[0] leading-relaxed lg:leading-[33px]">
          From finding the right opportunities to discovering events near
          you, this is where connections start and grow.
        </p>
      </main>

      {/* Buttons on Right Side - positioned relative to center */}
      <div className="absolute top-1/2 right-6 md:right-12 lg:right-12 transform -translate-y-1/2 flex flex-col gap-4 z-20 mt-20">
        <a href="#download" className="block">
          <Button className="w-40 lg:w-[194px] h-[43px] bg-[#6735bc] rounded-lg shadow-game-shadow [font-family:'Poppins',Helvetica] font-medium text-[#f0f0f0] text-sm lg:text-base text-center tracking-[0] leading-[19px] whitespace-nowrap hover:bg-[#5a2da0] transition-all">
            Download now
          </Button>
        </a>

        <Link to="/recruiter-login" className="block">
          <Button className="w-40 lg:w-[194px] h-[43px] bg-[#d6d717] rounded-lg shadow-game-shadow [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-sm lg:text-base text-center tracking-[0] leading-[19px] whitespace-nowrap hover:bg-[#c4c516] transition-all">
            Recruiter&apos;s login
          </Button>
        </Link>
      </div>
    </section>
  );
};
