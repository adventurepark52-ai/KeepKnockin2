import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "SWIPE TO APPLY, INSTANTLY",
    description: "Hire fast via a clean, web-only dashboard",
    imageId: "/src/assets/pic4.png",
    isPhone: true,
  },
  {
    title: "VIDEO RESUME",
    description: "Hire fast via a clean, web-only dashboard",
    imageId: "/src/assets/pic5.png",
    isPhone: false,
  },
  {
    title: "DISCOVER EVENTS NEAR YOU",
    description: "Hire fast via a clean, web-only dashboard",
    imageId: "/src/assets/pic6.png",
    isPhone: false,
  },
  {
    title: "ONLY VERIFIED COMPANIES",
    description: "Hire fast via a clean, web-only dashboard",
    imageId: "/src/assets/pic7.png",
    isPhone: false,
  },
];

const profileImages = ["/src/assets/pic8.png", "/src/assets/pic9.png", "/src/assets/pic10.png"];

export const RecruitersSection = (): JSX.Element => {
  return (
    <section className="w-full relative">
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
                      src="/src/assets/asterisk.png" 
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
                    <div className="absolute w-[273px] h-[718px] top-[-287px] left-[-35px]">
                      <div className="absolute w-[210px] h-[140px] top-[287px] left-[35px] bg-[#1d1d1d]/80 rounded-lg backdrop-blur-sm" />

                      <div className="h-[321px] top-56 left-[108px] absolute w-[88px] bg-[#fffdfb] overflow-hidden rotate-[-30deg]">
                        <div className="absolute w-[84px] h-[284px] top-6 -left-px">
                          <div className="absolute w-[47px] h-[88px] top-[59px] left-[22px] bg-[#fffdfb] rounded-[1.34px] overflow-hidden border-[0.13px] border-solid border-[#e0e6ec] overflow-y-scroll">
                            <div className="flex flex-col w-[47px] items-center justify-center gap-[3.35px] relative overflow-hidden">
                              <img
                                className="h-[41.67px] mt-[-10.32px] ml-[-2.12px] mr-[-2.12px] relative self-stretch w-full rotate-[30deg]"
                                alt="Group"
                                src="/group-964.png"
                              />

                              <div className="relative w-[31.04px] h-[18.88px]">
                                <div className="relative w-[33px] h-[19px]">
                                  <div className="absolute w-[31px] h-[15px] top-1 left-0">
                                    <div className="inline-flex items-center justify-center gap-[1.34px] px-[4.02px] py-[1.34px] absolute top-0 left-0 bg-[#6735bc] rounded-[9.11px] shadow-[0.54px_0.54px_0px_#1d1d1d]">
                                      <div className="mt-[-0.13px] font-semibold text-[#fffdfb] text-[2.9px] leading-[3.1px] relative w-fit [font-family:'Poppins',Helvetica] text-center tracking-[0]">
                                        UI/UX Designer
                                      </div>
                                    </div>

                                    <div className="absolute top-[7px] left-[5px] [font-family:'Poppins',Helvetica] font-medium text-[#4c4c4c] text-[2.1px] text-center tracking-[0] leading-[3.1px]">
                                      Gurugram, Haryana
                                    </div>

                                    <div className="inline-flex items-center gap-[1.07px] absolute top-2.5 left-[3px]">
                                      <div className="inline-flex items-center justify-center gap-[1.34px] px-[2.01px] py-[0.13px] relative flex-[0_0_auto] bg-[#d6d717] rounded-[3.22px] shadow-[0.54px_0.54px_0px_#1d1d1d]">
                                        <div className="relative w-fit mt-[-0.13px] [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[1.6px] tracking-[0] leading-[3.1px]">
                                          Full-time
                                        </div>
                                      </div>

                                      <div className="inline-flex items-center justify-center gap-[1.34px] px-[2.01px] py-[0.13px] relative flex-[0_0_auto] bg-[#d6d717] rounded-[3.22px] shadow-[0.54px_0.54px_0px_#1d1d1d]">
                                        <div className="relative w-fit mt-[-0.13px] [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[1.6px] tracking-[0] leading-[3.1px]">
                                          6-8 LPA
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="absolute w-[23px] h-1 top-0 left-[5px]">
                                    <div className="absolute top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[2.7px] text-center tracking-[0] leading-[3.1px]">
                                      Keep Knockin&apos;
                                    </div>

                                    <img
                                      className="absolute w-px h-0.5 -top-1 left-[19px]"
                                      alt="Arrow"
                                      src="/arrow-2.svg"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="relative w-[48.91px] h-[18.63px] mr-[-2.00px]">
                                <div className="relative w-[47px] h-[19px] bg-[#d6d7174c]">
                                  <div className="inline-flex h-[5px] items-center gap-[1.74px] px-[2.01px] py-[0.67px] absolute top-1.5 left-px bg-[#6735bc] rounded-[0.67px] overflow-hidden shadow-[0.54px_0.54px_0px_#1d1d1d]">
                                    <div className="mt-[-0.03px] font-medium text-[#ffffff] text-[1.9px] leading-[2.8px] whitespace-nowrap relative w-fit [font-family:'Poppins',Helvetica] text-center tracking-[0]">
                                      UI/UX
                                    </div>
                                  </div>

                                  <div className="inline-flex h-[5px] gap-[1.74px] px-[2.01px] py-[0.67px] top-1.5 left-[11px] rounded-[0.67px] shadow-[0.54px_0.54px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.03px] text-[1.9px] leading-[2.8px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                      Wireframing
                                    </div>
                                  </div>

                                  <div className="inline-flex h-[5px] gap-[1.74px] px-[2.01px] py-[0.67px] top-1.5 left-7 rounded-[0.67px] shadow-[0.54px_0.54px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.03px] text-[1.9px] leading-[2.8px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                      Wireframing
                                    </div>
                                  </div>

                                  <div className="inline-flex h-[5px] gap-[1.34px] px-[2.01px] py-[0.67px] top-[11px] left-px rounded-[0.67px] shadow-[0.54px_0.54px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.03px] text-[1.9px] leading-[2.8px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                      Graphic Design
                                    </div>
                                  </div>

                                  <div className="inline-flex h-[5px] gap-[1.34px] px-[2.01px] py-[0.67px] top-[11px] left-5 rounded-[0.67px] shadow-[0.54px_0.54px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.03px] text-[1.9px] leading-[2.8px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                      Illustrations
                                    </div>
                                  </div>

                                  <div className="absolute w-[23px] top-px left-px [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[2.1px] tracking-[0] leading-[3.1px] whitespace-nowrap">
                                    Skills required
                                  </div>
                                </div>
                              </div>

                              <div className="h-[26.5px] relative w-[50.23px] mr-[-4.66px]">
                                <div className="absolute w-[13px] top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[2.1px] tracking-[0] leading-[3.1px]">
                                  Description
                                </div>

                                <div className="absolute w-[9px] top-1 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#6735bc] text-[2px] tracking-[0] leading-[2.9px]">
                                  About us
                                </div>

                                <div className="absolute w-11 top-2 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4c4c4c] text-[1.6px] text-justify tracking-[0] leading-[2.3px]">
                                  At Keep Knockin&apos;, our mission is simple:
                                  to help our clients bring life saving
                                  therapies to market quicker and help patients
                                  in need. Founded in 2022, but with history
                                  going back to 1939, Keep Knockin&apos; unites
                                  best-in-class brands to help clients navigate
                                  the complexities at each step of the drug
                                  development life cycle and get the right
                                  treatments to the right patients at the right
                                  time.
                                </div>
                              </div>

                              <div className="relative w-[48.23px] h-[17.22px] mr-[-2.66px]">
                                <div className="absolute w-3.5 top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#6735bc] text-[2px] tracking-[0] leading-[2.9px]">
                                  Role Overview
                                </div>

                                <div className="absolute w-11 top-[3px] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4c4c4c] text-[1.6px] text-justify tracking-[0] leading-[2.3px]">
                                  As a UX Designer, you&apos;ll work closely
                                  with international teams of designers,
                                  developers, and stakeholders to rapidly
                                  prototype and iterate on designs. You will be
                                  responsible for gathering user feedback and
                                  quickly updating mockups to improve usability
                                  and design efficiency.
                                </div>
                              </div>

                              <div className="relative w-[48.23px] h-[24.22px] mr-[-2.66px]">
                                <div className="absolute w-4 top-0 left-px [font-family:'Poppins',Helvetica] font-medium text-[#6735bc] text-[2px] tracking-[0] leading-[2.9px]">
                                  Responsibilities
                                </div>

                                <div className="absolute w-11 top-[3px] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4c4c4c] text-[1.6px] text-justify tracking-[0] leading-[2.3px]">
                                  You will Design the process from concept to
                                  implementation.
                                  <br />
                                  Utilize Figma&#39;s latest features to create
                                  interactive prototypes, wireframes, and
                                  high-fidelity mockups.
                                  <br />
                                  Iterate quickly on designs based on user and
                                  stakeholder feedback, data, and evolving
                                  project needs.
                                  <br />
                                  Collaborate directly with users to test
                                  designs and incorporate their feedback into
                                  rapid iterations.
                                </div>
                              </div>

                              <div className="relative w-[48.23px] h-[13.22px] mr-[-2.66px]">
                                <div className="absolute top-0 left-px [font-family:'Poppins',Helvetica] font-medium text-[#6735bc] text-[2px] tracking-[0] leading-[2.9px] whitespace-nowrap">
                                  Perks &amp; Benefits
                                </div>

                                <div className="absolute w-11 top-[3px] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4c4c4c] text-[1.6px] text-justify tracking-[0] leading-[2.3px]">
                                  Certificate &amp; Letter of Recommendation
                                  <br />
                                  Flexible hours
                                  <br />
                                  Work from anywhere
                                  <br />
                                  Monthly stipend
                                </div>
                              </div>

                              <div className="flex w-[24.39px] h-[6.7px] items-center justify-center gap-[1.34px] px-[22.25px] py-[2.14px] relative bg-[#6735bc] rounded-[1.07px] shadow-[0.54px_0.54px_0px_#1d1d1d]">
                                <div className="relative w-fit mt-[-0.43px] mb-[-0.16px] ml-[-13.05px] mr-[-13.05px] [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-[2.1px] text-center tracking-[0] leading-[3.2px] whitespace-nowrap">
                                  Next
                                </div>
                              </div>

                              <div className="flex w-[30.15px] h-[2.55px] items-center justify-center gap-[1.34px] px-[22.25px] py-[2.14px] relative bg-[#fffdfb] rounded-[1.07px] opacity-0">
                                <div className="mt-[-2.51px] mb-[-2.24px] ml-[-10.17px] mr-[-10.17px] text-[2.1px] leading-[3.2px] relative w-fit [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                  Next
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute w-[79px] h-[284px] top-0 left-1.5 bg-[#fffdfb] rounded-[2.24px] overflow-hidden border-[0.22px] border-solid border-[#e0e6ec] overflow-y-scroll">
                            <div className="flex flex-col w-[79px] items-center justify-center gap-[5.61px] relative overflow-hidden">
                              <img
                                className="h-[69.78px] mt-[-17.27px] ml-[-3.55px] mr-[-3.55px] relative self-stretch w-full rotate-[30deg]"
                                alt="Group"
                                src="/group-964-1.png"
                              />

                              <div className="relative w-[51.46px] h-[30.91px]">
                                <div className="relative w-[53px] h-[31px]">
                                  <div className="inline-flex items-center justify-center gap-[2.24px] px-[6.73px] py-[2.24px] absolute top-[7px] left-0 bg-[#6735bc] rounded-[15.26px] shadow-[0.9px_0.9px_0px_#1d1d1d]">
                                    <div className="relative w-fit mt-[-0.22px] [font-family:'Poppins',Helvetica] font-semibold text-[#fffdfb] text-[4.9px] text-center tracking-[0] leading-[5.2px] whitespace-nowrap">
                                      UI/UX Designer
                                    </div>
                                  </div>

                                  <div className="absolute top-[18px] left-2 [font-family:'Poppins',Helvetica] font-medium text-[#4c4c4c] text-[3.6px] text-center tracking-[0] leading-[5.2px] whitespace-nowrap">
                                    Gurugram, Haryana
                                  </div>

                                  <div className="inline-flex items-center gap-[1.8px] absolute top-6 left-1.5">
                                    <div className="inline-flex items-center justify-center gap-[2.24px] px-[3.37px] py-[0.22px] relative flex-[0_0_auto] bg-[#d6d717] rounded-[5.39px] shadow-[0.9px_0.9px_0px_#1d1d1d]">
                                      <div className="relative w-fit mt-[-0.22px] font-medium text-[#1d1d1d] text-[2.7px] leading-[5.2px] whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
                                        Full-time
                                      </div>
                                    </div>

                                    <div className="inline-flex items-center justify-center gap-[2.24px] px-[3.37px] py-[0.22px] relative flex-[0_0_auto] bg-[#d6d717] rounded-[5.39px] shadow-[0.9px_0.9px_0px_#1d1d1d]">
                                      <div className="mt-[-0.22px] text-[2.7px] leading-[5.2px] whitespace-nowrap relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] tracking-[0]">
                                        6-8 LPA
                                      </div>
                                    </div>
                                  </div>

                                  <div className="absolute w-[37px] h-1.5 top-0 left-2">
                                    <div className="top-0 left-0 text-[#1d1d1d] text-[4.5px] text-center leading-[5.2px] whitespace-nowrap absolute [font-family:'Poppins',Helvetica] font-medium tracking-[0]">
                                      Keep Knockin&apos;
                                    </div>

                                    <img
                                      className="absolute w-px h-[3px] top-[-7px] left-8"
                                      alt="Arrow"
                                      src="/arrow-2.svg"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="relative w-[80.54px] h-[31.19px] mr-[-2.00px]">
                                <div className="relative w-[79px] h-[31px] bg-[#d6d7174c]">
                                  <div className="inline-flex h-2 gap-[2.92px] px-[3.37px] py-[1.12px] top-2.5 left-0.5 rounded-[1.12px] shadow-[0.9px_0.9px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.04px] font-medium text-[#ffffff] text-[3.1px] leading-[4.7px] whitespace-nowrap relative w-fit [font-family:'Poppins',Helvetica] text-center tracking-[0]">
                                      UI/UX
                                    </div>
                                  </div>

                                  <div className="inline-flex h-2 gap-[2.92px] px-[3.37px] py-[1.12px] top-2.5 left-[19px] rounded-[1.12px] shadow-[0.9px_0.9px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.04px] text-[3.1px] leading-[4.7px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                      Wireframing
                                    </div>
                                  </div>

                                  <div className="inline-flex h-2 gap-[2.92px] px-[3.37px] py-[1.12px] top-2.5 left-12 rounded-[1.12px] shadow-[0.9px_0.9px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.04px] text-[3.1px] leading-[4.7px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                      Wireframing
                                    </div>
                                  </div>

                                  <div className="inline-flex h-2 gap-[2.24px] px-[3.37px] py-[1.12px] top-[19px] left-px rounded-[1.12px] shadow-[0.9px_0.9px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.04px] text-[3.1px] leading-[4.7px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                      Graphic Design
                                    </div>
                                  </div>

                                  <div className="inline-flex h-2 gap-[2.24px] px-[3.37px] py-[1.12px] top-[19px] left-[35px] rounded-[1.12px] shadow-[0.9px_0.9px_0px_#1d1d1d] items-center absolute bg-[#6735bc] overflow-hidden">
                                    <div className="mt-[-0.04px] text-[3.1px] leading-[4.7px] relative w-fit [font-family:'Poppins',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                      Illustrations
                                    </div>
                                  </div>

                                  <div className="absolute w-[39px] top-0.5 left-0.5 [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[3.6px] tracking-[0] leading-[5.2px] whitespace-nowrap">
                                    Skills required
                                  </div>
                                </div>
                              </div>

                              <div className="relative w-[80.05px] h-[43.57px] mr-[-3.76px]">
                                <div className="absolute w-[21px] top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[3.6px] tracking-[0] leading-[5.2px]">
                                  Description
                                </div>

                                <div className="absolute w-[15px] top-[7px] left-0 [font-family:'Poppins',Helvetica] font-medium text-[#6735bc] text-[3.4px] tracking-[0] leading-[4.9px]">
                                  About us
                                </div>

                                <div className="absolute w-[74px] top-[13px] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4c4c4c] text-[2.7px] text-justify tracking-[0] leading-[3.8px]">
                                  At Keep Knockin&apos;, our mission is simple:
                                  to help our clients bring life saving
                                  therapies to market quicker and help patients
                                  in need. Founded in 2022, but with history
                                  going back to 1939, Keep Knockin&apos; unites
                                  best-in-class brands to help clients navigate
                                  the complexities at each step of the drug
                                  development life cycle and get the right
                                  treatments to the right patients at the right
                                  time.
                                </div>
                              </div>

                              <div className="relative w-[78.05px] h-[28.39px] mr-[-1.76px]">
                                <div className="absolute w-6 top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-[#6735bc] text-[3.4px] tracking-[0] leading-[4.9px]">
                                  Role Overview
                                </div>

                                <div className="w-[74px] top-[5px] text-[2.7px] leading-[3.8px] absolute left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4c4c4c] text-justify tracking-[0]">
                                  As a UX Designer, you&apos;ll work closely
                                  with international teams of designers,
                                  developers, and stakeholders to rapidly
                                  prototype and iterate on designs. You will be
                                  responsible for gathering user feedback an d
                                  quickly updating mockups to improve usability
                                  and design efficiency.
                                </div>
                              </div>

                              <div className="relative w-[78.05px] h-[40.39px] mr-[-1.76px]">
                                <div className="absolute w-[26px] top-0 left-px [font-family:'Poppins',Helvetica] font-medium text-[#6735bc] text-[3.4px] tracking-[0] leading-[4.9px]">
                                  Responsibilities
                                </div>

                                <div className="w-[74px] top-[5px] text-[2.7px] leading-[3.8px] absolute left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4c4c4c] text-justify tracking-[0]">
                                  You will Design the process from concept to
                                  implementation.
                                  <br />
                                  Utilize Figma&#39;s latest features to create
                                  interactive prototypes, wireframes, and
                                  high-fidelity mockups.
                                  <br />
                                  Iterate quickly on designs based on user and
                                  stakeholder feedback, data, and evolving
                                  project needs.
                                  <br />
                                  Collaborate directly with users to test
                                  designs and incorporate their feedback into
                                  rapid iterations.
                                </div>
                              </div>

                              <div className="relative w-[78.05px] h-[21.39px] mr-[-1.76px]">
                                <div className="absolute top-0 left-px [font-family:'Poppins',Helvetica] font-medium text-[#6735bc] text-[3.4px] tracking-[0] leading-[4.9px] whitespace-nowrap">
                                  Perks &amp; Benefits
                                </div>

                                <div className="w-[74px] top-[5px] text-[2.7px] leading-[3.8px] absolute left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4c4c4c] text-justify tracking-[0]">
                                  Certificate &amp; Letter of Recommendation
                                  <br />
                                  Flexible hours
                                  <br />
                                  Work from anywhere
                                  <br />
                                  Monthly stipend
                                </div>
                              </div>

                              <div className="flex w-[40.84px] h-[11.22px] items-center justify-center gap-[2.24px] px-[37.25px] py-[3.59px] relative bg-[#6735bc] rounded-[1.8px] shadow-[0.9px_0.9px_0px_#1d1d1d]">
                                <div className="mt-[-0.70px] mb-[-0.26px] ml-[-21.33px] mr-[-21.33px] text-[3.6px] leading-[5.4px] relative w-fit [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                  Next
                                </div>
                              </div>

                              <div className="flex w-[50.49px] h-[4.26px] items-center justify-center gap-[2.24px] px-[37.25px] py-[3.59px] relative bg-[#fffdfb] rounded-[1.8px] opacity-0">
                                <div className="mt-[-4.18px] mb-[-3.73px] ml-[-16.50px] mr-[-16.50px] text-[3.6px] leading-[5.4px] relative w-fit [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
                                  Next
                                </div>
                              </div>
                            </div>
                          </div>

                          <img
                            className="absolute w-3 h-[9px] top-[3px] left-px rotate-[30deg]"
                            alt="Layer"
                            src="/layer-2.png"
                          />

                          <img
                            className="absolute w-[38px] h-0.5 top-[15px] left-2.5 rotate-[30deg]"
                            alt="Group"
                            src="/group-956.png"
                          />
                        </div>

                        <div className="absolute w-[88px] h-2 top-[314px] left-0 bg-[#fffdfb]">
                          <div className="relative w-[30px] h-px top-[5px] left-[29px] bg-[#1d1d1d] rounded-[22.44px]" />
                        </div>

                        <div className="absolute w-[88px] h-2.5 top-0 left-0 bg-[#fffdfb]">
                          <div className="flex w-[78px] items-center justify-between relative top-[3px] left-[5px]">
                            <div className="relative w-[7.85px] h-[4.94px]">
                              <div className="absolute w-[21px] h-[13px] top-0 left-0 font-m3-hig-title-headline font-[number:var(--m3-hig-title-headline-font-weight)] text-[#1d1d1d] text-[length:var(--m3-hig-title-headline-font-size)] tracking-[var(--m3-hig-title-headline-letter-spacing)] leading-[var(--m3-hig-title-headline-line-height)] [font-style:var(--m3-hig-title-headline-font-style)]">
                                9:41
                              </div>
                            </div>

                            <img
                              className="relative flex-[0_0_auto] mt-[-4102.15px] ml-[-13262.78px] rotate-[30deg]"
                              alt="Wifi battery"
                              src="/wifi-battery-cellular-2.svg"
                            />
                          </div>
                        </div>

                        <div className="absolute w-2.5 h-2.5 top-[-4103px] left-[-6624px]">
                          <img
                            className="absolute w-2 h-[7px] top-px left-px rotate-[30deg]"
                            alt="Frame"
                            src="/frame-965.svg"
                          />

                          <img
                            className="absolute w-[5px] h-[7px] top-px left-px rotate-[30deg]"
                            alt="Group"
                            src="/group-957.png"
                          />
                        </div>
                      </div>
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

          <div className="flex gap-1 justify-end">
            {profileImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  width="164"
                  height="164"
                  className="rounded-[13px] border-2 border-solid border-[#ffffff] transition-transform group-hover:scale-105 w-[164px] h-[164px] object-cover"
                  alt={`Profile Image ${index + 1}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[13px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <Card className="bg-[#e9eeff] rounded-lg shadow-game-shadow overflow-hidden">
            <CardContent className="p-0 relative">
              <div className="relative">
                <img 
                  src="/src/assets/pic11.png" 
                  width="100%" 
                  height="166" 
                  alt="Stand Out Feature Background"
                  className="rounded-t-lg w-full h-[166px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6735bc]/10 to-[#d6d717]/10 rounded-t-lg"></div>
              </div>

              <div className="p-6 pt-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-2 flex-shrink-0">
                    <div className="w-6 h-6 bg-[#6735bc] rounded-full flex items-center justify-center">
                      <img 
                        src="/src/assets/asterisk.png" 
                        width="22" 
                        height="22" 
                        alt="Stand Out Icon"
                        className="rounded-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-2xl leading-[41px] mb-2">
                      STAND OUT FROM THE CROWD
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#959595] text-xl leading-6 max-w-[365px]">
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