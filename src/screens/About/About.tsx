import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export const About = (): JSX.Element => {
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
          <Link to="/about" className="text-[#6735bc] font-medium text-sm">
            About
          </Link>
          <Link to="/services" className="text-[#1d1d1d] font-medium text-sm hover:text-[#6735bc] transition-colors">
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[#1d1d1d] font-bold text-4xl md:text-5xl mb-8 text-center">
            About Keep Knockin'
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-[#666666]">
            <p>
              Keep Knockin' is revolutionizing the way early-career professionals connect with 
              forward-thinking companies. We're not just another job board – we're a platform 
              built for the mobile-first generation.
            </p>
            
            <p>
              Our mission is simple: help talented individuals knock on the right doors and 
              get hired their way. We believe that finding the right opportunity shouldn't 
              be about endless applications and waiting games.
            </p>
            
            <p>
              For recruiters, we provide access to verified, skilled candidates who are 
              ready to make an impact. Our platform eliminates the noise and connects 
              you with talent that actually fits your company culture and needs.
            </p>
          </div>
          
          <div className="text-center mt-12">
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