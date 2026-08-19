'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WhyChooseUsPage() {
  const reasonsList = [
    {
      number: '01',
      title: 'Skilled Technical Professionals',
      description: 'We are supported by a highly skilled, certified, and experienced team of professionals with strong technical expertise in inspection, testing, calibration, and engineering services, ensuring precise and reliable service execution.',
      icon: '/images/whychooseus/logo1.png',
    },
    {
      number: '02',
      title: 'Safety-Focused Approach',
      description: 'Human safety, asset protection, and operational risk reduction remain central to our service execution.',
      icon: '/images/whychooseus/logo2.png',
    },
    {
      number: '03',
      title: 'Reliable Technical Reporting',
      description: 'Clear, accurate, and dependable technical findings support informed maintenance and operational decisions.',
      icon: '/images/whychooseus/logo3.png',
    },
    {
      number: '04',
      title: 'On-Site Service Capability',
      description: 'Technical services can be delivered directly at client facilities according to site conditions and project requirements.',
      icon: '/images/whychooseus/logo4.png',
    },
    {
      number: '05',
      title: 'Tailored Engineering Solutions',
      description: 'Services are adapted to industry risks, equipment conditions, operating environments, and client-specific requirements.',
      icon: '/images/whychooseus/logo5.png',
    },
    {
      number: '06',
      title: 'Commitment to Quality',
      description: 'Structured practices, technical accuracy, and continuous attention to service quality support reliable project outcomes.',
      icon: '/images/whychooseus/logo6.png',
    },
  ];

  const pillarsList = [
    'Technical Expertise',
    'Safety',
    'Accuracy',
    'Reliability',
    'Quality',
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center justify-start py-20 px-6 xl:px-10 overflow-hidden text-white bg-[#01286D]">
        <Image
          src="/images/whychooseus/main.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div 
          className="absolute inset-0 z-10 bg-repeat bg-auto opacity-40"
          style={{ backgroundImage: `url('/images/whychooseus/box.png')` }}
        />
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(90deg, rgba(1, 40, 109, 0.95) 0%, rgba(1, 40, 109, 0.80) 45%, rgba(1, 40, 109, 0.45) 100%)'
          }}
        />

        <div className="relative z-30 max-w-3xl xl:ml-24">
          <h3 className="text-[#FD550A] font-montserrat font-semibold text-[15px] leading-[140%] tracking-[2px] mb-2 uppercase">
            Our Advantage
          </h3>
          
          <h1 className="font-source-serif-pro font-bold text-[40px] md:text-[52px] leading-[115%] tracking-[1%] mb-3 text-white">
            Why Choose DAIS
          </h1>
          
          <div 
            className="mb-5"
            style={{
              width: '71px',
              height: '3px',
              backgroundColor: '#FD550A',
              opacity: 1
            }}
          />
          
          <p className="font-montserrat font-normal text-[15px] md:text-[17px] leading-[170%] text-white/90 max-w-2xl">
            DAIS combines technical expertise, structured engineering practices, and a strong commitment to safety and quality to deliver dependable asset integrity solutions.
          </p>
        </div>
      </section>

      {/* Six Reasons Section */}
      <section className="w-full py-20 bg-white relative">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
          
          <div className="mb-12">
            <span className="text-[#FD550A] font-montserrat font-semibold text-[13px] leading-[140%] tracking-[2px] uppercase mb-1.5 block">
              Six Reasons
            </span>
            <h2 className="font-source-serif-pro font-bold text-[34px] md:text-[40px] text-[#01286D] mb-3">
              Dependable By Design
            </h2>
            <div 
              className="mb-4"
              style={{
                width: '71px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />
            <p className="font-montserrat font-normal text-[#4A5568] text-[14px] md:text-[15px] max-w-2xl">
              Our services are adapted to client requirements, operating environments, equipment conditions, and applicable technical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasonsList.map((reason, index) => (
              <div 
                key={index}
                className="bg-white rounded-[12px] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg relative"
                style={{
                  border: '1px solid #E2E8F0',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <img 
                      src={reason.icon} 
                      alt={`Icon ${reason.number}`} 
                      className="w-[36px] h-[36px] object-contain"
                    />
                    <span className="font-montserrat font-bold text-[38px] leading-none text-[#01286D]/20">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="font-source-serif-pro font-bold text-[19px] text-[#01286D] mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="font-montserrat font-normal text-[#4A5568] text-[14px] leading-[170%]">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
        </div>
      </section>

      {/* Trusted Engineering Support Section */}
      <section className="w-full py-20 text-white relative overflow-hidden" style={{ backgroundColor: '#0F2D5D' }}>
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#FD550A] font-montserrat font-semibold text-[13px] leading-[140%] tracking-[2px] uppercase mb-1.5 block">
              Our Pillars
            </span>
            <h2 className="font-source-serif-pro font-bold text-[34px] md:text-[40px] text-white mb-3">
              Trusted engineering support for safer operations
            </h2>
            <div 
              className="mb-8"
              style={{
                width: '71px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillarsList.map((pillar, index) => (
                <div 
                  key={index}
                  className="px-5 py-3.5 rounded-[6px] border border-white/20 bg-white/5 font-montserrat font-medium text-[15px] text-white"
                >
                  {pillar}
                </div>
              ))}
            </div>

            <p className="font-montserrat font-normal text-white/80 text-[14px] md:text-[15px]">
              Trusted engineering support for safer operations and more reliable industrial assets.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[520px] h-[340px] md:h-[380px] rounded-[12px] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/images/whychooseus/machine.png" 
                alt="Machine equipment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* Let's Assess Your Assets Section */}
      <section className="w-full py-20 bg-white relative">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
          <span className="text-[#FD550A] font-montserrat font-semibold text-[13px] leading-[140%] tracking-[2px] uppercase mb-1.5 block">
            Work With Us
          </span>
          <h2 className="font-source-serif-pro font-bold text-[34px] md:text-[40px] text-[#01286D] mb-3">
            Let's Assess Your Assets
          </h2>
          <div 
            className="mb-4"
            style={{
              width: '71px',
              height: '3px',
              backgroundColor: '#FD550A',
              opacity: 1
            }}
          />
          <p className="font-montserrat font-normal text-[#4A5568] text-[15px] mb-8 max-w-xl">
            Tell us about your equipment, operating conditions and compliance requirements.
          </p>
          <div>
            <Link 
              href="/contact"
              className="inline-block bg-[#FD550A] hover:bg-[#e04805] text-white font-montserrat font-semibold text-[15px] px-8 py-3.5 rounded-[6px] transition-all duration-300 shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}