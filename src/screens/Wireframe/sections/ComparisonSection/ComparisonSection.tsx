import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Check, X, AlertTriangle } from "lucide-react";

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
      keepKnockin: { text: "100% mobile-first, Gen Z experience", icon: "check" },
      linkedin: { text: "Feels too corporate", icon: "cross" },
      naukri: { text: "Mostly outdated listings", icon: "warning" },
      internshala: { text: "Mostly internships only", icon: "warning" },
    },
    {
      category: "Resume + Video + Knockin' Card",
      keepKnockin: { text: "All-in-one visual profile", icon: "check" },
      linkedin: { text: "Only resumes", icon: "cross" },
      naukri: { text: "Resumes only", icon: "check" },
      internshala: { text: "Resumes only", icon: "check" },
    },
    {
      category: "Swipe to apply",
      keepKnockin: { text: "Fast, intuitive mobile UI", icon: "check" },
      linkedin: { text: "Long filters & forms", icon: "cross" },
      naukri: { text: "Long filters & forms", icon: "cross" },
      internshala: { text: "No swipe or real-time matching", icon: "cross" },
    },
    {
      category: "In-app chat with recruiters",
      keepKnockin: { text: "In-app chat with recruiters", icon: "check" },
      linkedin: { text: "Mostly email or InMail", icon: "cross" },
      naukri: { text: "Requires external calls", icon: "cross" },
      internshala: { text: "Rarely used", icon: "cross" },
    },
    {
      category: "Track where you are in the hiring pipeline",
      keepKnockin: { text: "Track where you are in the hiring pipeline", icon: "check" },
      linkedin: { text: "No updates after apply", icon: "cross" },
      naukri: { text: "Limited status feedback", icon: "cross" },
      internshala: { text: "Varies by employer", icon: "cross" },
    },
    {
      category: "Verified recruiters only",
      keepKnockin: { text: "Manual & document-based verification", icon: "check" },
      linkedin: { text: "Self-declared company info", icon: "warning" },
      naukri: { text: "Premium access required", icon: "warning" },
      internshala: { text: "Limited company checks", icon: "warning" },
    },
    {
      category: "Event discovery & local opportunities",
      keepKnockin: { text: "Built-in local/online event discovery", icon: "check" },
      linkedin: { text: "No event ecosystem", icon: "cross" },
      naukri: { text: "Static listings only", icon: "cross" },
      internshala: { text: "Some webinars only", icon: "warning" },
    },
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "check":
        return <Check className="w-4 h-4 text-green-500" />;
      case "cross":
        return <X className="w-4 h-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getTextColor = (iconType: string, isKeepKnockin: boolean = false) => {
    if (isKeepKnockin) return "text-[#6b7280]";
    
    switch (iconType) {
      case "check":
        return "text-[#9ca3af]";
      case "cross":
        return "text-[#9ca3af]";
      case "warning":
        return "text-[#9ca3af]";
      default:
        return "text-[#9ca3af]";
    }
  };

  return (
    <section className="w-full relative">
      <Card className="w-full bg-[#e5e7eb] rounded-2xl border-r-4 border-b-4 border-black">
        <CardContent className="p-0">
          <div className="grid grid-cols-5 gap-0 rounded-2xl overflow-hidden">
            {/* Header Row */}
            <div className="p-4 bg-[#e5e7eb]"></div>
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`p-4 text-center ${
                  platform.isHighlighted 
                    ? "bg-white" 
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
                <div className="p-4 bg-white flex items-center gap-2">
                  {getIcon(feature.keepKnockin.icon)}
                  <span className={`[font-family:'Poppins',Helvetica] font-medium text-[12.2px] tracking-[0] leading-[19.1px] ${getTextColor(feature.keepKnockin.icon, true)}`}>
                    {feature.keepKnockin.text}
                  </span>
                </div>

                {/* LinkedIn Column - Grey background */}
                <div className="p-4 bg-[#e5e7eb] flex items-center gap-2">
                  {getIcon(feature.linkedin.icon)}
                  <span className={`[font-family:'Poppins',Helvetica] font-medium text-[12.2px] tracking-[0] leading-[19.1px] ${getTextColor(feature.linkedin.icon)}`}>
                    {feature.linkedin.text}
                  </span>
                </div>

                {/* Naukri Column - Grey background */}
                <div className="p-4 bg-[#e5e7eb] flex items-center gap-2">
                  {getIcon(feature.naukri.icon)}
                  <span className={`[font-family:'Poppins',Helvetica] font-medium text-[12.2px] tracking-[0] leading-[19.1px] ${getTextColor(feature.naukri.icon)}`}>
                    {feature.naukri.text}
                  </span>
                </div>

                {/* Internshala Column - Grey background */}
                <div className="p-4 bg-[#e5e7eb] flex items-center gap-2">
                  {getIcon(feature.internshala.icon)}
                  <span className={`[font-family:'Poppins',Helvetica] font-medium text-[12.2px] tracking-[0] leading-[19.1px] ${getTextColor(feature.internshala.icon)}`}>
                    {feature.internshala.text}
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

export default ComparisonSection;