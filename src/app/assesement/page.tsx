'use client';

import React from 'react';

export default function InspectionDetailPage() {
  const servicesList = [
    { number: '01', title: 'Asset Integrity & Risk Management' },
    { number: '02', title: 'Pressure Vessel Inspection' },
    { number: '03', title: 'Piping System Inspection' },
    { number: '04', title: 'Storage Tank Inspection' },
    { number: '05', title: 'Mechanical Integrity Assessment' },
    { number: '06', title: 'Non-Destructive Testing (NDT)' },
    { number: '07', title: 'Welding & Material Inspection' },
    { number: '08', title: 'Corrosion Monitoring & Control' },
    { number: '09', title: 'Structural Integrity Assessment' },
    { number: '10', title: 'Lifting Inspection Services' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section (Merged backimg.png + box.png + gradient overlay) */}
      <section className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center justify-start py-20 px-8 md:px-16 lg:px-24 overflow-hidden text-white bg-[#01286D]">
        {/* Layer 1: Base Image (backimg.png) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/assesement/backimg.png')` }}
        />

        {/* Layer 2: Pattern Overlay (box.png) */}
        <div 
          className="absolute inset-0 z-10 bg-repeat bg-auto opacity-40"
          style={{ backgroundImage: `url('/images/assesement/box.png')` }}
        />

        {/* Layer 3: Dark Blue Gradient Overlay */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(90deg, rgba(1, 40, 109, 0.95) 0%, rgba(1, 40, 109, 0.80) 45%, rgba(1, 40, 109, 0.45) 100%)'
          }}
        />

        {/* Content Container */}
        <div className="relative z-30 max-w-3xl pl-0 md:pl-4">
          <h3 className="text-[#FD550A] font-montserrat font-semibold text-[15px] leading-[140%] tracking-[2px] mb-2 uppercase">
            Service Domain 01
          </h3>
          
          <h1 className="font-source-serif-pro font-bold text-[40px] md:text-[52px] leading-[115%] tracking-[1%] mb-3 text-white">
            Inspection &amp; Integrity Assessement
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
            Systematic evaluation of industrial equipment, structures, and mechanical systems to determine their present condition and fitness for continued operation.
          </p>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <span className="text-[#FD550A] font-montserrat font-semibold text-[13px] leading-[140%] tracking-[2px] uppercase mb-1.5 block">
              Overview
            </span>
            <h2 className="font-source-serif-pro font-bold text-[34px] md:text-[40px] text-[#01286D] mb-3">
              Why It Matters
            </h2>
            <div 
              className="mb-6"
              style={{
                width: '71px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />
            <p className="font-montserrat font-normal text-[#4A5568] text-[15px] md:text-[16px] leading-[170%] mb-8">
              Inspection activities help identify defects, corrosion, deterioration, structural weaknesses, and operational risks that may affect asset safety and performance.
            </p>

            <div className="space-y-4 font-montserrat text-[#4A5568] text-[15px]">
              <div className="flex items-start gap-3">
                <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                <p className="leading-[160%]">Early detection of corrosion, cracks and material degradation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                <p className="leading-[160%]">Documented fitness-for-service evidence for continued operation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                <p className="leading-[160%]">Reduced risk of unplanned shutdowns and safety incidents</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                <p className="leading-[160%]">Inspection findings that feed directly into maintenance planning</p>
              </div>
            </div>
          </div>

          {/* Right Column: main.png using standard img tag to prevent broken link issues */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[520px] h-[340px] md:h-[380px] rounded-[12px] overflow-hidden shadow-lg border border-[#43434320]">
              <img 
                src="/images/assesement/main.png" 
                alt="Inspection & Integrity Assessement main image" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Services We Deliver Section */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-[#F8FAFC] relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/assesment/box.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          backgroundColor: '#F9FAFB'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="mb-12">
            <span className="text-[#FD550A] font-montserrat font-semibold text-[13px] leading-[140%] tracking-[2px] uppercase mb-1.5 block">
              Scope
            </span>
            <h2 className="font-source-serif-pro font-bold text-[34px] md:text-[40px] text-[#01286D] mb-3">
              Services We Deliver
            </h2>
            <div 
              style={{
                width: '71px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-[8px] p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-md"
                style={{
                  border: '1px solid #43434333',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <span className="text-[#FD550A] font-montserrat font-bold text-[15px]">
                  {service.number}
                </span>
                <span className="w-[1px] h-5 bg-[#E2E8F0]"></span>
                <h3 className="font-montserrat font-medium text-[15px] text-[#01286D]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}