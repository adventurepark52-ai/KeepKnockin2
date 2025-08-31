import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export const Services = (): JSX.Element => {
  const services = [
    {
      title: "For Recruiters",
      description: "Fast, efficient hiring through our web dashboard",
      features: ["Post jobs instantly", "Screen candidates easily", "Direct messaging", "Verified profiles only"]
    },
    {
      title: "For Applicants", 
      description: "Mobile-first job discovery and application",
      features: ["Swipe to apply", "Video resumes", "Event discovery", "Real-time chat"]
    },
    {
      title: "For Companies",
      description: "Complete talent acquisition solution",
      features: ["Bulk hiring", "Campus recruitment", "Analytics dashboard", "Custom branding"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6 bg-white shadow-sm">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/keepknockin_logo.png"
            alt="Keep Knockin' Logo"
            width={176}
            height={41}
            className="rounded-lg"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-16">
          <Link to="/" className="text-[#1d1d1d] font-medium text-sm hover:text-[#6735bc] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#1d1d1d] font-medium text-sm hover:text-[#6735bc] transition-colors">
            About
          </Link>
          <Link to="/services" className="text-[#6735bc] font-medium text-sm">
            Services
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/employer-login">
            <Button className="bg-[#d6d717] text-[#1d1d1d] px-6 py-2 rounded-full shadow-[2px_2px_0px_#1d1d1d] hover:bg-[#c4c516] transition-all">
              Employer Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[#1d1d1d] font-bold text-4xl md:text-5xl mb-4 text-center">
            Our Services
          </h1>
          
          <p className="text-[#666666] text-xl text-center mb-16 max-w-3xl mx-auto">
            Comprehensive solutions for modern hiring and job discovery
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#f8f9fa] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105">
                <div className="mb-6">
                  <img 
                    src="/assets/asterisk.png" 
                    width="24" 
                    height="24" 
                    alt="Service Icon"
                    className="mb-4"
                  />
                  <h3 className="text-[#1d1d1d] font-semibold text-2xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#6735bc] rounded-full"></div>
                      <span className="text-[#666666] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/">
              <Button className="bg-[#6735bc] text-white px-8 py-4 rounded-lg shadow-[4px_4px_0px_#1d1d1d] hover:bg-[#5a2da0] transition-all">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};