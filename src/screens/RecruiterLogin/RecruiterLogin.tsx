import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

export const RecruiterLogin = (): JSX.Element => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recruiter login:', email);
  };

  const features = [
    {
      title: "POST JOBS FAST",
      description: "Reach qualified applicants in seconds.",
      gradient: "linear-gradient(181.02deg, #E7D9FF 0.83%, #FFFFFF 99.1%)",
      shadowColor: "#6735BC"
    },
    {
      title: "SAVE TOP TALENT", 
      description: "Freeze profiles for future roles.",
      gradient: "linear-gradient(179.81deg, #FFFFAA 0.17%, #FFFFFF 106.24%)",
      shadowColor: "#D6D717"
    },
    {
      title: "SCREEN WITH EASE",
      description: "Freeze profiles for future roles.",
      gradient: "linear-gradient(180deg, #ECE1FF 0%, #FFFFFF 100%)",
      shadowColor: "#6735BC"
    },
    {
      title: "ONLY REAL SKILLS",
      description: "No fluff — just what matters.",
      gradient: "linear-gradient(180deg, #FEFFAB 0%, #FFFFFF 100%)",
      shadowColor: "#6735BC"
    },
    {
      title: "VERIFIED APPLICANTS",
      description: "Profiles you can trust at a glance.",
      gradient: "linear-gradient(180deg, #E9DBFF 0%, #FFFFFF 100%)",
      shadowColor: "#6735BC"
    },
    {
      title: "POST JOBS FAST",
      description: "Message directly from your dashboard.",
      gradient: "linear-gradient(180deg, #FEFFAE 0%, #FFFFFF 100%)",
      shadowColor: "#6735BC"
    }
  ];

  return (
    <div className="min-h-screen relative bg-white">
      {/* Hero Section with Background */}
      <div className="relative h-[652px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-t-[25px]"
          style={{
            backgroundImage: "url('/assets/bg.jpg')",
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#333333] via-transparent to-transparent rounded-t-[25px]" />

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
        <div className="relative z-10 flex items-center justify-between px-6 md:px-16 py-12 h-[calc(100%-120px)]">
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
              
              <h1 className="text-white font-medium text-4xl md:text-5xl leading-tight mb-6 uppercase max-w-[616px]">
                Hire talent that<br />
                actually fits.
              </h1>
              
              <p className="text-white text-lg md:text-xl leading-relaxed max-w-[706px]">
                Keep Knockin' helps you discover skilled, early-career professionals 
                who bring energy, creativity, and intent to the table. Built for fast-moving 
                teams who want more signal, less noise.
              </p>
            </div>
          </div>

          {/* Right Login Form */}
          <div className="bg-white rounded-2xl p-6 w-full max-w-[342px] shadow-2xl">
            <div className="mb-6">
              <h2 className="text-[#1d1d1d] font-bold text-xl mb-2 leading-7">
                Knock knock — who's there?
              </h2>
              <p className="text-[#b2b2b2] font-medium text-sm leading-6">
                Login securely with your official email
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#1d1d1d] font-normal text-xs mb-2 tracking-wide leading-6">
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
        </div>
      </div>

      {/* Backed By Section */}
      <div className="flex flex-col w-full items-center gap-5 py-12 bg-white">
        <div className="font-medium text-[#1d1d1d] text-xl text-center tracking-[0] leading-[41px] uppercase">
          BACKED BY
        </div>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <img
            src="/assets/product.png"
            alt="Product Logo"
            width={160}
            height={41}
            className="opacity-100"
          />
          <img
            src="/assets/midas.png"
            alt="Midas Logo"
            width={100}
            height={37}
            className="opacity-100"
          />
          <img
            src="/assets/circle.png"
            alt="Circle Logo"
            width={132}
            height={37}
            className="opacity-100"
          />
          <img
            src="/assets/waveless.png"
            alt="Waveless Logo"
            width={174}
            height={38}
            className="opacity-100"
          />
        </div>
      </div>

      {/* Why Recruiters Choose Section */}
      <div className="py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="font-medium text-[#000000] text-xl uppercase tracking-[0] leading-[21px]">
            WHY RECRUITERS CHOOSE KEEP KNOCKIN'
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border border-[#e0e6ec] rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Feature Image/Background */}
                <div 
                  className="h-[218px] relative"
                  style={{ background: feature.gradient }}
                >
                  {/* Mock UI Elements for different features */}
                  {index === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-4 shadow-lg max-w-[280px] w-full mx-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#1d1d1d] rounded-full flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[#1d1d1d]">(UI/UX Designer)</div>
                            <div className="text-xs text-[#b8b8b8]">Bengaluru, Karnataka, India (On-site)</div>
                            <div className="text-xs text-[#959595]">20 Applied</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-4 shadow-lg max-w-[280px] w-full mx-4">
                        <div className="space-y-2">
                          <div className="flex gap-2">
                            <div className="px-2 py-1 bg-[#6735bc] text-white text-xs rounded">UI/UX</div>
                            <div className="px-2 py-1 bg-[#6735bc] text-white text-xs rounded">Wireframing</div>
                          </div>
                          <div className="flex gap-2">
                            <div className="px-2 py-1 bg-[#6735bc] text-white text-xs rounded">Prototyping</div>
                            <div className="px-2 py-1 bg-[#6735bc] text-white text-xs rounded">Graphic Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-4 shadow-lg max-w-[260px] w-full mx-4 transform -rotate-12">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                          <div className="text-sm font-semibold">Radhika Verma</div>
                          <div className="text-xs text-gray-500">Keep Knockin'</div>
                          <div className="text-xs text-gray-500">she/her</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="flex gap-2 justify-center">
                          <div className="px-3 py-2 bg-[#6735bc] text-white text-sm rounded shadow-sm">UI/UX</div>
                          <div className="px-3 py-2 bg-[#6735bc] text-white text-sm rounded shadow-sm">Wireframing</div>
                        </div>
                        <div className="flex gap-2 justify-center">
                          <div className="px-3 py-2 bg-[#6735bc] text-white text-sm rounded shadow-sm">Graphic Design</div>
                          <div className="px-3 py-2 bg-[#6735bc] text-white text-sm rounded shadow-sm">Illustrations</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 4 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-3 shadow-lg max-w-[250px] w-full mx-4">
                        <div className="space-y-3">
                          <div className="text-xs font-bold text-[#1d1d1d]">About Us</div>
                          <div className="text-xs text-[#711717]">This will be visible to anyone who views your job post.</div>
                          <div className="bg-gray-100 h-8 rounded border"></div>
                          <div className="text-xs font-bold text-[#1d1d1d]">Role Overview</div>
                          <div className="bg-gray-100 h-8 rounded border"></div>
                          <div className="text-xs font-bold text-[#1d1d1d]">Responsibilities</div>
                          <div className="bg-gray-100 h-8 rounded border"></div>
                          <div className="text-xs font-bold text-[#1d1d1d]">Perks & Benefits</div>
                          <div className="bg-gray-100 h-8 rounded border"></div>
                          <div className="flex gap-2 justify-center">
                            <button className="px-3 py-1 bg-[#f6f1ff] border border-[#6735bc] text-[#6735bc] text-xs rounded">Save</button>
                            <button className="px-3 py-1 bg-[#6735bc] text-white text-xs rounded">Post</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 5 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-lg p-4 shadow-lg max-w-[280px] w-full mx-4">
                        <div className="text-center">
                          <div className="text-sm font-bold text-[#1d1d1d] mb-2">Message Center</div>
                          <div className="space-y-2">
                            <div className="bg-gray-100 h-6 rounded"></div>
                            <div className="bg-gray-100 h-6 rounded"></div>
                            <div className="bg-[#6735bc] h-6 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Feature Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <img 
                      src="/assets/asterisk.png" 
                      width="14" 
                      height="14" 
                      alt="Feature Icon"
                      className="mt-1 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-medium text-[#1d1d1d] text-xl leading-[41px] mb-1 uppercase">
                        {feature.title}
                      </h3>
                      <p className="font-normal text-[#959595] text-base leading-[21px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Built for Fast Hiring Section */}
      <div className="py-16 bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 md:px-16 max-w-[1200px] mx-auto">
          <div className="flex-1 max-w-[501px]">
            <h2 className="font-medium text-[#000000] text-xl leading-[21px] mb-7 uppercase">
              Built for fast hiring. Not follow-ups.
            </h2>
            <p className="font-normal text-[#b2b2b2] text-xl leading-[33px]">
              Our platform is built for real results — not to sit around collecting applications that go nowhere. 
              If you're hiring — we'll help you do it faster, better, and with the kind of candidates who are actually ready.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <img
              src="/assets/pic5.png"
              alt="Hiring Dashboard"
              width={577}
              height={346}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Ready to Start Hiring Section */}
      <div className="py-16 bg-white">
        <div className="text-center">
          <h2 className="font-medium text-[#000000] text-xl leading-[21px] mb-7 uppercase">
            Ready to start hiring?
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/recruiter-login">
              <Button className="bg-white border border-[#6735bc] text-[#6735bc] px-8 py-5 rounded-lg shadow-[4px_4px_0px_#6735bc] hover:bg-[#6735bc] hover:text-white transition-all">
                Log In to Dashboard
              </Button>
            </Link>
            
            <Button className="bg-[#6735bc] text-white px-8 py-5 rounded-lg shadow-[4px_4px_0px_#1d1d1d] hover:bg-[#5a2da0] transition-all">
              Post a Role
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1d1d1d] py-12">
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