import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ComparisonSection = (): JSX.Element => {
  const platforms = [
    { name: "Keep Knockin'", isHighlighted: true },
    { name: "LinkedIn", isHighlighted: false },
    { name: "Naukri", isHighlighted: false },
    { name: "Internshala", isHighlighted: false },
  ];

  const features = [
    {
      category: "Access to almost all Indian candidates",
      keepKnockin: "100% mobile-first, Gen Z experience",
      linkedin: "Feels too corporate",
      naukri: "Mostly outdated listings",
      internshala: "Mostly internships only",
    },
    {
      category: "Resume + Video + Knockin' Card",
      keepKnockin: "All-in-one visual profile",
      linkedin: "Only resumes",
      naukri: "Resumes only",
      internshala: "Resumes only",
    },
    {
      category: "Swipe to apply",
      keepKnockin: "Fast, intuitive mobile UI",
      linkedin: "Long filters & forms",
      naukri: "Long filters & forms",
      internshala: "No swipe or real-time matching",
    },
    {
      category: "In-app chat with recruiters",
      keepKnockin: "In-app chat with recruiters",
      linkedin: "Mostly email or InMail",
      naukri: "Requires external calls",
      internshala: "Rarely used",
    },
    {
      category: "Track where you are in the hiring pipeline",
      keepKnockin: "Track where you are in the hiring pipeline",
      linkedin: "No updates after apply",
      naukri: "Limited status feedback",
      internshala: "Varies by employer",
    },
    {
      category: "Verified recruiters only",
      keepKnockin: "Manual & document-based verification",
      linkedin: "Self-declared company info",
      naukri: "Premium access required",
      internshala: "Limited company checks",
    },
    {
      category: "Event discovery & local opportunities",
      keepKnockin: "Built-in local/online event discovery",
      linkedin: "No event ecosystem",
      naukri: "Static listings only",
      internshala: "Some webinars only",
    },
  ];

  return (
    <section className="w-full relative">
      <Card className="w-full bg-[#e5e7eb] shadow-lg rounded-2xl border-r-4 border-b-4 border-black">
        <CardContent className="p-0">
          <div className="grid grid-cols-5 gap-0 rounded-2xl overflow-hidden">
            {/* Header Row */}
            <div className="p-4 bg-[#e5e7eb]"></div>
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`p-4 text-center ${
                  platform.isHighlighted 
                    ? "bg-white shadow-sm" 
                    : "bg-[#e5e7eb]"
                }`}
              >
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[13.8px] leading-[23.7px] tracking-[0]">
                  {platform.name}
                </h3>
              </div>
            ))}

            {/* Feature Rows */}
            {features.map((feature, featureIndex) => (
              <React.Fragment key={featureIndex}>
                <Separator className="col-span-5 h-px bg-gray-300" />

                {/* Feature Category */}
                <div className="p-4 bg-[#e5e7eb] flex items-center">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[12.2px] tracking-[0] leading-[19.1px]">
                    {feature.category}
                  </span>
                </div>

                {/* Keep Knockin' Column - White background */}
                <div className="p-4 bg-white shadow-sm flex items-center">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#6b7280] text-[12.2px] tracking-[0] leading-[19.1px]">
                    {feature.keepKnockin}
                  </span>
                </div>

                {/* LinkedIn Column - Grey background */}
                <div className="p-4 bg-[#e5e7eb] flex items-center">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#9ca3af] text-[12.2px] tracking-[0] leading-[19.1px]">
                    {feature.linkedin}
                  </span>
                </div>

                {/* Naukri Column - Grey background */}
                <div className="p-4 bg-[#e5e7eb] flex items-center">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#9ca3af] text-[12.2px] tracking-[0] leading-[19.1px]">
                    {feature.naukri}
                  </span>
                </div>

                {/* Internshala Column - Grey background */}
                <div className="p-4 bg-[#e5e7eb] flex items-center">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#9ca3af] text-[12.2px] tracking-[0] leading-[19.1px]">
                    {feature.internshala}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};