import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "SWIPE TO APPLY, INSTANTLY",
    description: "Hire fast via a clean, web-only dashboard",
    imageId: "/assets/swipe.png",
    isPhone: true,
  },
  {
    title: "VIDEO RESUME",
    description: "Hire fast via a clean, web-only dashboard",
    imageId: "/assets/video_resume.png",
    isPhone: false,
  },
  {
    title: "DISCOVER EVENTS NEAR YOU",
    description: "Hire fast via a clean, web-only dashboard",
    imageId: "/assets/events.png",
    isPhone: false,
  },
  {
    title: "ONLY VERIFIED COMPANIES",
    description: "Hire fast via a clean, web-only dashboard",
    imageId: "/assets/companies.png",
    isPhone: false,
  },
];

const profileImages = ["/assets/rec2.png", "/assets/rec3.png", "/assets/rec1.png"];

export const RecruitersSection = (): JSX.Element => {
  return (
    <section className="w-full relative z-10 bg-white py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center border-t border-b border-[#e0e6ec] py-6 min-h-[182px]"
            >
              <div className="flex-1 pr-8">
                <div className="flex items-start gap-4">
                  <div className="mt-2 flex-shrink-0">
                    <img 
                      src="/assets/asterisk.png" 
                      width="22" 
                      height="22" 
                      alt="Feature Icon"
                    />
                  </div>
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-2xl leading-[41px] mb-2">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#b8b8b8] text-xl leading-[34px] max-w-[276px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0">
                {feature.isPhone ? (
                  <div className="w-[210px] h-[140px] bg-[#e0e6ec] rounded-lg overflow-hidden shadow-game-shadow relative">
                    <img 
                      src={feature.imageId} 
                      width="210" 
                      height="140" 
                      alt={feature.title}
                      className="rounded-lg w-full h-full object-cover"
                    />
                    {/* Keep all your existing phone mockup code here */}
                    <div className="absolute w-[273px] h-[718px] top-[-287px] left-[-35px]">
                      {/* ... all your existing complex phone UI code remains the same ... */}
                    </div>
                  </div>
                ) : (
                  <div className="w-[210px] h-[140px] rounded-lg shadow-game-shadow overflow-hidden">
                    <div className="relative group">
                      <img 
                        src={feature.imageId} 
                        width="210" 
                        height="140" 
                        alt={feature.title}
                        className="rounded-lg transition-transform group-hover:scale-105 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="text-right">
            <h2 className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-2xl leading-[37px] max-w-[426px] ml-auto">
              WHAT ARE THE KEY FEATURES OF KEEP KNOCKIN&apos;?
            </h2>
          </div>

          <div className="flex justify-end mb-6">
            <Button className="bg-[#6735bc] text-white px-8 py-5 rounded-lg shadow-game-shadow h-auto">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-base">
                Download App
              </span>
            </Button>
          </div>

          {/* Updated overlapping rectangles design */}
          <div className="flex justify-end mb-6">
            <div className="relative flex">
              {profileImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`relative group ${index > 0 ? '-ml-4' : ''}`}
                  style={{ zIndex: profileImages.length - index }}
                >
                  <img
                    src={image}
                    width="164"
                    height="164"
                    className="rounded-[20px] border-4 border-solid border-white transition-transform group-hover:scale-105 w-[164px] h-[164px] object-cover shadow-lg"
                    alt={`Profile Image ${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Updated card with asterisk */}
          <Card className="bg-[#e9eeff] rounded-[20px] shadow-game-shadow overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="relative">
                <img 
                  src="/assets/alone.png" 
                  width="100%" 
                  height="200" 
                  alt="Stand Out Feature Background"
                  className="rounded-t-[20px] w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#e9eeff]/80 to-transparent rounded-t-[20px]"></div>
              </div>

              <div className="p-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <img 
                      src="/assets/asterisk.png" 
                      width="24" 
                      height="24" 
                      alt="Asterisk Icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-2xl leading-[32px] mb-3">
                      STAND OUT FROM THE CROWD
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9ca3af] text-lg leading-6 max-w-[365px]">
                      Show your personality and stand out recruiters love it.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
