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
      answer: "Our subscription plans are personalized and tailored for both campuses and recruiters, depending on their hiring needs. For candidates, subscription plans start at just ₹999/month.",
    },
    {
      id: "item-2",
      question: "Is Keep Knockin' free for candidates?",
      answer: "Yes! The basic platform is completely free for candidates. You can view and apply to jobs, internships, and attend events at no cost.",
    },
    {
      id: "item-3",
      question: "How do I ensure I get quality applications?",
      answer: "Every recruiter gets a dedicated Key Account Manager who personally supports their hiring process, ensuring that only relevant and high-quality applications reach them.",
    },
    {
      id: "item-4",
      question: "Can I shortlist and manage applicants on the platform?",
      answer: "Absolutely. Our platform allows you to shortlist, manage, and directly connect with candidates seamlessly.",
    },
    {
      id: "item-5",
      question: "How do I get matched to jobs?",
      answer: "Our tech-enabled platform matches candidates to jobs and internships based on their skills, domain, and experience, ensuring accurate and relevant opportunities every time",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-px relative z-10 bg-white py-8">
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border-b">
  <AccordionTrigger className="p-4 text-left hover:no-underline" style={{gap: '4px'}}>
    <span className="[font-family:'Poppins',Helvetica] font-normal text-[#1d1d1d] text-base tracking-[0] leading-[normal]">
      {item.question}
    </span>
  </AccordionTrigger>
  <AccordionContent className="p-4 pt-0">
    <div className="[font-family:'Poppins',Helvetica] font-normal text-[#666666] text-sm leading-relaxed">
      {item.answer}
    </div>
  </AccordionContent>
</AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};