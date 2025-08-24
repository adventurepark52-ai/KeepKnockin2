import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { ImagePlaceholder } from "../../../../components/ImagePlaceholder";

const eventData = [
  {
    organizerLogo: "image13",
    organizerName: "Design Buddies",
    eventTitle: "CoCreate Summit",
    location: "New Delhi, Delhi",
    date: "24th August, 2025",
    time: "10:30 AM",
    interestedCount: "250+ People are Interested",
    eventImage: "image14",
    dateIcon: "icon13",
  },
  {
    organizerLogo: "image15",
    organizerName: "Design Buddies",
    eventTitle: "CoCreate Summit",
    location: "New Delhi, Delhi",
    date: "24th August, 2025",
    time: "10:30 AM",
    interestedCount: "250+ People are Interested",
    eventImage: "image16",
    dateIcon: "icon14",
  },
  {
    organizerLogo: "image17",
    organizerName: "Design Buddies",
    eventTitle: "CoCreate Summit",
    location: "New Delhi, Delhi",
    date: "24th August, 2025",
    time: "10:30 AM",
    interestedCount: "250+ People are Interested",
    eventImage: "image18",
    dateIcon: "icon15",
  },
  {
    organizerLogo: "image19",
    organizerName: "Design Buddies",
    eventTitle: "CoCreate Summit",
    location: "New Delhi, Delhi",
    date: "24th August, 2025",
    time: "10:30 AM",
    interestedCount: "250+ People are Interested",
    eventImage: "image20",
    dateIcon: "icon16",
  },
  {
    organizerLogo: "image21",
    organizerName: "Design Buddies",
    eventTitle: "CoCreate Summit",
    location: "New Delhi, Delhi",
    date: "24th August, 2025",
    time: "10:30 AM",
    interestedCount: "250+ People are Interested",
    eventImage: "image22",
    dateIcon: "icon17",
  },
  {
    organizerLogo: "image23",
    organizerName: "Design Buddies",
    eventTitle: "CoCreate Summit",
    location: "New Delhi, Delhi",
    date: "24th August, 2025",
    time: "10:30 AM",
    interestedCount: "250+ People are Interested",
    eventImage: "image24",
    dateIcon: "icon18",
  },
  {
    organizerLogo: "image25",
    organizerName: "Design Buddies",
    eventTitle: "CoCreate Summit",
    location: "New Delhi, Delhi",
    date: "24th August, 2025",
    time: "10:30 AM",
    interestedCount: "250+ People are Interested",
    eventImage: "image26",
    dateIcon: "icon19",
  },
  {
    organizerLogo: "image27",
    organizerName: "Design Buddies",
    eventTitle: "CoCreate Summit",
    location: "New Delhi, Delhi",
    date: "24th August, 2025",
    time: "10:30 AM",
    interestedCount: "250+ People are Interested",
    eventImage: "image28",
    dateIcon: "icon20",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full py-[74px] relative">
      <header className="text-center mb-[74px]">
        <h2 className="[font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-2xl tracking-[0] leading-[37px]">
          EVENTS THAT MOVE CAREERS FORWARD
        </h2>
      </header>

      <ScrollArea className="w-full">
        <div className="flex gap-5 px-20 pb-4">
          {eventData.map((event, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[353px] border border-solid border-[#e0e6ec] rounded-xl"
            >
              <CardContent className="p-2.5">
                <div className="flex items-center justify-center w-full">
                  <div className="flex flex-col w-44 items-start gap-1">
                    <div className="inline-flex items-center gap-[9px]">
                      <div className="w-[26px] h-[26px] rounded-full overflow-hidden border border-gray-200">
                        <ImagePlaceholder 
                          id={event.organizerLogo} 
                          width="26px" 
                          height="26px" 
                          description="Organizer Logo"
                          className="rounded-full"
                        />
                      </div>
                      <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#1d1d1d] text-base tracking-[0] leading-[24.3px] whitespace-nowrap">
                        {event.organizerName}
                      </div>
                    </div>

                    <div className="w-[171px] [font-family:'Poppins',Helvetica] font-medium text-[#1d1d1d] text-[10px] tracking-[0] leading-[15.3px]">
                      {event.eventTitle}
                    </div>

                    <div className="flex flex-col w-[161.14px] items-start">
                      <div className="inline-flex items-center gap-4">
                        <div className="w-3 h-4 flex items-center justify-center">
                          <ImagePlaceholder 
                            id="icon21" 
                            width="12px" 
                            height="15px" 
                            description="Location Icon"
                            className="rounded-sm"
                          />
                        </div>
                        <div className="[font-family:'Poppins',Helvetica] font-medium text-[#959595] text-[10px] text-center tracking-[0] leading-[24.3px] whitespace-nowrap">
                          {event.location}
                        </div>
                      </div>

                      <div className="flex items-center gap-[15px] w-full mt-[-3px]">
                        <div className="w-3.5 h-4 flex items-center justify-center">
                          <ImagePlaceholder 
                            id={event.dateIcon} 
                            width="13.6px" 
                            height="15px" 
                            description="Date Icon"
                            className="rounded-sm"
                          />
                        </div>
                        <div className="[font-family:'Poppins',Helvetica] font-medium text-[#959595] text-[10px] text-center tracking-[0] leading-[24.3px] whitespace-nowrap">
                          {event.date}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-3.5 mt-[-3px]">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <ImagePlaceholder 
                            id="icon22" 
                            width="15px" 
                            height="15px" 
                            description="Time Icon"
                            className="rounded-sm"
                          />
                        </div>
                        <div className="[font-family:'Poppins',Helvetica] font-medium text-[#959595] text-[10px] text-center tracking-[0] leading-[24.3px] whitespace-nowrap">
                          {event.time}
                        </div>
                      </div>
                    </div>

                    <div className="relative w-[158px] h-[25px]">
                      <div className="absolute top-0 left-[47px] [font-family:'Poppins',Helvetica] font-medium text-[#959595] text-[8px] text-center tracking-[0] leading-[24.3px] whitespace-nowrap">
                        {event.interestedCount}
                      </div>
                      <div className="absolute w-[43px] h-[15px] top-[5px] left-0">
                        <div className="relative h-[15px]">
                          <div className="absolute w-[15px] h-[15px] top-0 left-0 bg-[#b2c6ff] rounded-[7.62px]" />
                          <div className="absolute w-[15px] h-[15px] top-0 left-[9px] bg-[#83a4ff] rounded-[7.62px]" />
                          <div className="absolute w-[15px] h-[15px] top-0 left-[19px] bg-[#507eff] rounded-[7.62px]" />
                          <div className="absolute w-[15px] h-[15px] top-0 left-7 bg-[#275df5] rounded-[7.62px]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <ImagePlaceholder 
                      id={event.eventImage} 
                      width="157px" 
                      height="157px" 
                      className="rounded-lg transition-transform group-hover:scale-105"
                      description="Event Image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex justify-center mt-[48px]">
        <Button className="bg-[#6735bc] hover:bg-[#6735bc]/90 text-white px-[27px] py-2.5 rounded-lg shadow-game-shadow [font-family:'Poppins',Helvetica] font-medium text-base h-auto">
          Explore more
        </Button>
      </div>
    </section>
  );
};