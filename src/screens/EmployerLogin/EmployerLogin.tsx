import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export const EmployerLogin = (): JSX.Element => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Employer login:', email);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333] via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-16 py-6">
        <Link to="/" className="flex items-center">
          <img
            src="/assets/keepknockin_bw_logo.png"
            alt="Keep Knockin' Logo"
            width={176}
            height={41}
            className="rounded-lg"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-16">
          <Link to="/" className="text-white font-medium text-sm hover:text-[#d6d717] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white font-medium text-sm hover:text-[#d6d717] transition-colors">
            About
          </Link>
          <Link to="/services" className="text-white font-medium text-sm hover:text-[#d6d717] transition-colors">
            Services
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="bg-[#275df5] text-white px-6 py-2 rounded-full shadow-[2px_2px_0px_#000000] hover:bg-[#1e4bc7] transition-all">
            Post a Job
          </Button>
          
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center">
              <img
                src="/assets/menu.png"
                alt="Menu"
                width={24}
                height={24}
                className="object-contain"
              />
            </button>
            
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src="/assets/user.jpg"
                alt="User Profile"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-between px-6 md:px-16 py-12 min-h-[calc(100vh-120px)]">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-8">
            <img
              src="/assets/asterisk-bw.png"
              alt="Asterisk"
              width={56}
              height={57}
              className="mb-6"
            />
            
            <h1 className="text-white font-medium text-4xl md:text-5xl leading-tight mb-6 uppercase">
              Hire talent that<br />
              actually fits.
            </h1>
            
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl">
              Keep Knockin' helps you discover skilled, early-career professionals 
              who bring energy, creativity, and intent to the table. Built for fast-moving 
              teams who want more signal, less noise.
            </p>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <div className="mb-8">
            <h2 className="text-[#1d1d1d] font-bold text-xl mb-2">
              Knock knock — who's there?
            </h2>
            <p className="text-[#b2b2b2] font-medium text-sm">
              Login securely with your official email
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#1d1d1d] font-normal text-xs mb-2 tracking-wide">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-3 bg-white border border-[#d8dee4] rounded-lg shadow-[4px_4px_0px_#1d1d1d] text-sm text-[#b8b8b8] focus:outline-none focus:border-[#6735bc] transition-colors"
                required
              />
            </div>

            <div className="space-y-2">
              <p className="text-[#b2b2b2] font-medium text-xs leading-relaxed">
                By signing in, you agree to our Terms of Service and Privacy Policy.
              </p>
              
              <Button 
                type="submit"
                className="w-full bg-[#275df5] text-white font-bold text-sm py-3 rounded-lg shadow-[4px_4px_0px_#1d1d1d] hover:bg-[#1e4bc7] transition-all"
              >
                Get OTP
              </Button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[#1d1d1d] py-12">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img 
              src="/assets/keepknockin_logo.png" 
              alt="Keep Knockin' Logo"
              className="h-10 w-auto"
            />
            <span className="text-[#e0e6ec] text-sm">
              till the right door opens
            </span>
          </div>
          
          <div className="text-white font-medium text-sm text-center md:text-left">
            Copyright © 2025 – present. Keep Knockin'. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="#" className="text-white text-sm hover:text-[#d6d717] transition-colors">
              Terms of use
            </Link>
            <span className="text-white">|</span>
            <Link to="#" className="text-white text-sm hover:text-[#d6d717] transition-colors">
              Privacy policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};