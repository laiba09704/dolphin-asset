import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Section 1: Hero / About DAIS */}
      <section className="relative w-full min-h-[600px] flex items-center justify-start py-20 px-8 md:px-16 lg:px-24 overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/about/background.png" 
            alt="Industrial Background" 
            fill 
            style={{ objectFit: 'cover' }}
            priority
          />
          {/* Custom Blue Gradient Overlay */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              background: 'linear-gradient(90.47deg, #01286D 3.92%, rgba(1, 40, 109, 0.95) 12.22%, rgba(1, 40, 109, 0.9) 21.41%, rgba(1, 40, 109, 0.7) 36.71%)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-2xl pl-2 md:pl-6 lg:pl-10">
          <h3 className="text-[#FD550A] font-montserrat font-semibold text-[16px] leading-[140%] tracking-[2px] mb-2 normal-case">
            About DAIS
          </h3>
          
          <h1 className="font-source-serif-pro font-bold text-[52px] leading-[110%] tracking-[2%] mb-4">
            Engineering Asset Integrity
          </h1>
          
          <div className="mb-6">
            <Image src="/images/about/barline.png" alt="Divider" width={100} height={4} />
          </div>
          
          <p className="font-montserrat font-medium text-[16.59px] leading-[163%] text-white/90">
            Dolphin Asset Integrity Solutions (Private) Limited (DAIS) is a professional 
            engineering and asset integrity services company specializing in ensuring the 
            safety, integrity and reliability of industrial assets. We provide advanced 
            inspection, integrity assessment, calibration, and testing solutions across multiple 
            industries, helping clients maintain operational safety, enhance asset 
            performance, and extend equipment lifecycle through structured engineering 
            practices and adherence to international standards.
          </p>
        </div>
      </section>

      {/* Section 2: Who We Are (Ensuring Safety, Integrity & Reliability) */}
      <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Area */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[#FD550A] font-montserrat font-medium text-[16px] leading-[140%] tracking-[2px] mb-3 normal-case">
              Who We Are
            </h3>
            
            <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[42px] leading-[110%] tracking-[2%] mb-4">
              Ensuring Safety, Integrity & Reliability
            </h2>
            
            <div className="mb-6">
              <Image src="/images/about/barline.png" alt="Divider" width={100} height={4} />
            </div>
            
            <p className="font-montserrat font-normal text-[#4A4A4A] text-[16.59px] leading-[175%] tracking-[1%] mb-8 text-justify">
              Dolphin Asset Integrity Solutions (Private) Limited (DAIS) is a professional 
              engineering and asset integrity services company specializing in ensuring the 
              safety, integrity and reliability of industrial assets. We provide advanced 
              inspection, integrity assessment, calibration, and testing solutions across multiple 
              industries, helping clients maintain operational safety, enhance asset 
              performance, and extend equipment lifecycle through structured engineering 
              practices and adherence to international standards.
            </p>
            
            <div className="flex items-center pl-4 border-l-4 border-[#FD550A]">
              <blockquote className="font-source-serif-pro font-bold text-[#01286D] text-[26.38px] leading-[110%] tracking-[2%]">
                “Ensuring safety, integrity, and reliability”
              </blockquote>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative w-full h-[450px] md:h-[520px] rounded-lg overflow-hidden shadow-lg border-b-4 border-[#FD550A]">
            <Image 
              src="/images/about/mans.png" 
              alt="Engineers Inspecting Industrial Asset" 
              fill 
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

        </div>
      </section>

      {/* Section 3: Our Evolution (From DES To DAIS) */}
      <section className="w-full bg-[#f8fafc] py-20 px-8 md:px-16 lg:px-24 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text & Checkpoints Area */}
          <div className="flex flex-col justify-center">
            <h3 className="text-[#FD550A] font-montserrat font-medium text-[16px] leading-[140%] tracking-[2px] mb-3 normal-case">
              Our Evolution
            </h3>
            
            <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[42px] leading-[110%] tracking-[2%] mb-4">
              From DES To DAIS
            </h2>
            
            <div className="mb-6">
              <Image src="/images/about/barline.png" alt="Divider" width={100} height={4} />
            </div>
            
            <p className="font-montserrat font-normal text-[#434343] text-[16.59px] leading-[175%] tracking-[0%] text-justify mb-8">
              With an established client base and successful operations under DES — Dolphin Engineering Solutions — we are now expanding our capabilities through DAIS: a new identity designed to serve clients while building on enhanced technical expertise and our team.
            </p>

            {/* Checkpoints List */}
            <div className="space-y-4">
              {[
                "Same leadership, same trusted client relationships",
                "Broader scope across inspection, calibration, testing and training",
                "Strengthened technical team and engineering capability"
              ].map((text, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="text-[#FD550A] font-bold mt-1 text-lg">✓</span>
                  <p className="font-montserrat font-normal text-[#434343] text-[16.59px] leading-[163%] tracking-[0%] text-justify">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Box with DES & AIS Images */}
          <div className="w-full bg-white border border-[#434343]/50 rounded-[10px] p-8 shadow-sm flex flex-col md:flex-row items-center justify-between relative min-h-[284px]">
            
            {/* DES Section */}
            <div className="flex flex-col items-center text-center w-full md:w-1/2 mb-6 md:mb-0 md:pr-4">
              <div className="w-[180px] h-[70px] my-2 flex items-center justify-center">
                <Image 
                  src="/images/about/DES.png" 
                  alt="DES Logo" 
                  width={180} 
                  height={70} 
                  quality={100}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </div>
              <span className="font-montserrat font-medium text-[14.9px] leading-[175%] tracking-[1%] uppercase text-[#434343] mt-2 mb-1">
                Previously
              </span>
              <p className="font-montserrat font-normal text-[11.08px] leading-[152%] text-[#434343] max-w-[200px]">
                Dolphin Engineering Solutions (Private) Limited
              </p>
            </div>

            {/* Center Arrow Image Indicator */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10 w-10 h-10">
              <Image 
                src="/images/about/arrow.png" 
                alt="Arrow" 
                width={40} 
                height={40} 
                quality={100}
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* DAIS / AIS Section */}
            <div className="flex flex-col items-center text-center w-full md:w-1/2 md:pl-4">
              <div className="w-[180px] h-[70px] my-2 flex items-center justify-center">
                <Image 
                  src="/images/about/AIS.png" 
                  alt="AIS Logo" 
                  width={180} 
                  height={70} 
                  quality={100}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </div>
              <span className="font-montserrat font-medium text-[14.9px] leading-[175%] tracking-[1%] uppercase text-[#434343] mt-2 mb-1">
                Today
              </span>
              <p className="font-montserrat font-normal text-[11.08px] leading-[152%] text-[#434343] max-w-[200px]">
                Dolphin Engineering Solutions (Private) Limited
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Section 4: Our Mission & Our Vision */}
      <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24 flex items-center justify-center">
        <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center justify-items-center">
          
          {/* Mission Card */}
          <div className="w-full max-w-[700px] h-auto lg:h-[345px] bg-white border-[0.5px] border-[#d1d5db] rounded-t-[13px] lg:rounded-t-[13px] lg:rounded-l-[13px] lg:rounded-r-none p-8 lg:p-10 relative flex flex-col justify-between shadow-sm">
            {/* Background Watermark Number 01 */}
            <div className="absolute right-8 top-6 pointer-events-none select-none opacity-40 text-right">
              <span className="font-source-serif-pro font-normal text-[120px] leading-none text-[#d1d5db]/40">
                01
              </span>
            </div>

            <div>
              {/* Top row: Badge and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-[50px] h-[50px] flex-shrink-0">
                  <Image 
                    src="/images/about/1.png" 
                    alt="01 Badge" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[32px] md:text-[36px] leading-[110%] tracking-[2%]">
                  Our Mission
                </h2>
              </div>
            </div>

            {/* Description Text with left orange bar */}
            <div className="pl-4 border-l-2 border-[#FD550A]">
              <p className="font-montserrat font-normal text-[#4A4A4A] text-[16.59px] leading-[192%] tracking-[1%] text-justify">
                To deliver world-class asset integrity solutions that enhance operational safety, extend asset life, and reduce industrial risk through advanced engineering practices, technical excellence, and adherence to international standards.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="w-full max-w-[700px] h-auto lg:h-[345px] bg-[#f8fbff] border-[0.5px] border-[#d1d5db] border-t-0 lg:border-t-[0.5px] lg:border-l-0 rounded-b-[13px] lg:rounded-b-[13px] lg:rounded-r-[13px] lg:rounded-l-none p-8 lg:p-10 relative flex flex-col justify-between shadow-sm">
            {/* Background Watermark Number 02 */}
            <div className="absolute right-8 top-6 pointer-events-none select-none opacity-40 text-right">
              <span className="font-source-serif-pro font-normal text-[120px] leading-none text-[#d1d5db]/40">
                02
              </span>
            </div>

            <div>
              {/* Top row: Badge and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative w-[50px] h-[50px] flex-shrink-0">
                  <Image 
                    src="/images/about/1.png" 
                    alt="01 Badge" 
                    fill 
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[32px] md:text-[36px] leading-[110%] tracking-[2%]">
                  Our Vision
                </h2>
              </div>
            </div>

            {/* Description Text with left orange bar */}
            <div className="pl-4 border-l-2 border-[#FD550A]">
              <p className="font-montserrat font-normal text-[#4A4A4A] text-[16.59px] leading-[192%] tracking-[1%] text-justify">
                To become a globally recognized leader in asset integrity management, delivering trusted, innovative, and sustainable engineering solutions that set benchmarks for safety, reliability, and performance.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}