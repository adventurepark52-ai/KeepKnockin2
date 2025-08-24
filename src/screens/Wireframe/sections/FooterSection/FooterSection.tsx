import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const FooterSection = (): JSX.Element => {
  const faqItems = [
    {
      id: "item-1",
      question: "What are the subscription charges?",
      answer: "",
    },
    {
      id: "item-2",
      question: "Is Keep Knockin' free for candidates?",
      answer: "",
    },
    {
      id: "item-3",
      question: "How do I ensure I get quality applications?",
      answer: "",
    },
    {
      id: "item-4",
      question: "Can I shortlist and manage applicants on the platform?",
      answer: "",
    },
    {
      id: "item-5",
      question: "How do I get matched to jobs?",
      answer: "",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-px relative">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-b">
            <AccordionTrigger className="flex items-start gap-3 p-4 text-left hover:no-underline">
              <div className="flex-1 [font-family:'Poppins',Helvetica] font-normal text-[#1d1d1d] text-base tracking-[0] leading-[normal]">
                {item.question}
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-4 pt-0">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
