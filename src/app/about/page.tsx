import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Section 1: Hero / About DAIS */}
      <section className="relative w-full min-h-[600px] flex items-center justify-start py-20 px-6 xl:px-10 overflow-hidden text-white">
        {/* Background Image */}
        <Image 
          src="/images/about/background.png" 
          alt="Industrial Background" 
          fill 
          priority
          className="object-cover object-center z-0"
        />
        {/* Custom Blue Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90.47deg, #01286D 3.92%, rgba(1, 40, 109, 0.95) 12.22%, rgba(1, 40, 109, 0.9) 21.41%, rgba(1, 40, 109, 0.7) 36.71%)'
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 max-w-2xl xl:ml-24">
          <h3 className="text-[#FD550A] font-montserrat font-semibold text-[16px] leading-[140%] tracking-[2px] mb-2 normal-case">
            About DAIS
          </h3>
          
          <h1 className="font-source-serif-pro font-bold text-[36px] sm:text-[42px] md:text-[52px] leading-[110%] tracking-[2%] mb-4">
            Engineering Asset Integrity
          </h1>
          
          <div className="mb-6">
            <Image src="/images/about/barline.png" alt="Divider" width={100} height={4} />
          </div>
          
          <p className="font-montserrat font-medium text-[14px] md:text-[16px] lg:text-[16.59px] leading-[163%] text-white/95">
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
      <section className="w-full bg-white py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
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
                "Ensuring safety, integrity, and reliability"
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
        </div>
      </section>

      {/* Section 3: Our Evolution (From DES To DAIS) */}
      <section className="w-full bg-[#f8fafc] py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
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
        </div>
      </section>

      {/* Section 4: Our Mission & Our Vision */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 h-auto lg:h-[320px] bg-white border-[0.5px] border-[#d1d5db] rounded-[13px] flex flex-col lg:flex-row items-center overflow-hidden shadow-sm">
          
          {/* Mission Card (Left Half) */}
          <div className="w-full lg:w-1/2 h-full bg-white p-8 md:p-10 relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r-[0.5px] border-[#d1d5db]">
            <div className="absolute right-8 top-4 pointer-events-none select-none opacity-40 text-right">
              <span className="font-source-serif-pro font-normal text-[120px] leading-none text-[#d1d5db]/40">
                01
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-3 z-10">
              <div className="relative w-[60px] h-[60px] flex-shrink-0">
                <Image 
                  src="/images/about/1.png" 
                  alt="01 Badge" 
                  fill 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[42px] leading-[110%] tracking-[2%]">
                Our Mission
              </h2>
            </div>

            <div className="w-full pl-4 border-l-2 border-[#FD550A] z-10">
              <p className="font-montserrat font-normal text-[#4A4A4A] text-[17.59px] leading-[200%] tracking-[1%] text-justify">
                To deliver world-class asset integrity solutions that enhance operational safety, extend asset life, and reduce industrial risk through advanced engineering practices, technical excellence, and adherence to international standards.
              </p>
            </div>
          </div>

          {/* Vision Card (Right Half) */}
          <div className="w-full lg:w-1/2 h-full p-8 md:p-10 relative flex flex-col justify-between" style={{ backgroundColor: '#E9F3FF80' }}>
            <div className="absolute right-8 top-4 pointer-events-none select-none opacity-40 text-right">
              <span className="font-source-serif-pro font-normal text-[120px] leading-none text-[#d1d5db]/40">
                02
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-3 z-10">
              <div className="relative w-[60px] h-[60px] flex-shrink-0">
                <Image 
                  src="/images/about/1.png" 
                  alt="02 Badge" 
                  fill 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[42px] leading-[120%] tracking-[2%]">
                Our Vision
              </h2>
            </div>

            <div className="w-full pl-4 border-l-2 border-[#FD550A] z-10">
              <p className="font-montserrat font-normal text-[#4A4A4A] text-[17.59px] leading-[200%] tracking-[2%] text-justify">
                To become a globally recognized leader in asset integrity management, delivering trusted, innovative, and sustainable engineering solutions that set benchmarks for safety, reliability, and performance.
              </p>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* Section 5: The Way We Engineer (Core Values) */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
          <div className="mb-12">
            <h3 className="font-montserrat font-medium text-[16px] leading-[140%] tracking-[2px] mb-2 text-[#FD550A]">
              Core Values
            </h3>
            <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[42px] leading-[110%] tracking-[2%] mb-3">
              The Way We Engineer
            </h2>
            <div className="mb-4">
              <Image src="/images/about/barline.png" alt="Divider" width={100} height={4} />
            </div>
            <p className="font-montserrat font-normal text-[#434343] text-[16.59px] leading-[175%] max-w-2xl text-justify md:text-left">
              Our services are adapted to client requirements, operating environments, equipment conditions, and applicable technical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Integrity",
                desc: "We operate with honesty, transparency, and strong engineering ethics."
              },
              {
                title: "Safety",
                desc: "We prioritize human life and asset protection every time."
              },
              {
                title: "Excellence",
                desc: "We deliver high-quality engineering solutions aligned with international standards."
              },
              {
                title: "Innovation",
                desc: "We adopt modern technologies and advanced inspection methodologies."
              },
              {
                title: "Reliability",
                desc: "We ensure consistent, accurate, and dependable service delivery."
              },
              {
                title: "Technical Expertise",
                desc: "We are supported by a highly skilled and experienced team of professionals ensuring excellent execution."
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 md:p-8 flex flex-col justify-start w-full h-auto"
                style={{
                  borderRadius: '9.57px',
                  borderWidth: '0.96px',
                  borderStyle: 'solid',
                  borderColor: '#43434333'
                }}
              >
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: 'Source Serif Pro, serif',
                    fontWeight: 700,
                    fontSize: '23.83px',
                    lineHeight: '118%',
                    letterSpacing: '2%',
                    color: '#01286D'
                  }}
                >
                  {card.title}
                </h3>
                <p 
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 400,
                    fontSize: '15.32px',
                    lineHeight: '170%',
                    letterSpacing: '0%',
                    textAlign: 'justify',
                    color: '#4A4A4A'
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Section 6: Leadership (Core Team) */}
      <section className="w-full py-20" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
          <div className="mb-14 pl-4 border-l-4 border-[#FD550A]">
            <h3 className="font-montserrat font-medium text-[16px] leading-[140%] tracking-[2px] mb-1 text-[#FD550A]">
              Core Team
            </h3>
            <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[42px] leading-[110%] tracking-[2%] mb-2">
              Leadership
            </h2>
            <p className="font-montserrat font-normal text-[#434343] text-[16px] leading-[175%] max-w-xl">
              Four directors accountable for engineering, commercial, financial and operational delivery on every project.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <div className="bg-[#01286D] text-white p-8 md:p-12 rounded-[4px] relative overflow-hidden flex flex-col justify-between min-h-[280px] shadow-sm">
                <div className="absolute right-6 top-2 pointer-events-none select-none">
                  <span className="font-source-serif-pro font-extrabold text-[120px] md:text-[140px] leading-none text-white/10 tracking-tighter">
                    01
                  </span>
                </div>
                <div className="z-10">
                  <span className="inline-block px-3 py-1 bg-[#FD550A] text-white font-montserrat font-semibold text-[11px] tracking-[1px] uppercase rounded-[2px] mb-4">
                    Chief Executive Officer
                  </span>
                  <h3 className="font-source-serif-pro font-bold text-[42px] md:text-[38px] leading-[115%] tracking-[2%] text-white">
                    Muhammad Tariq Khan
                  </h3>
                </div>
                <div className="w-[100px] h-[4px] bg-[#FD550A] mt-6 z-10" />
              </div>

              <div className="bg-transparent p-8 md:p-10 rounded-[4px] relative overflow-hidden flex flex-col justify-between min-h-[250px]">
                <div className="absolute right-6 bottom-[-10px] pointer-events-none select-none">
                  <span className="font-source-serif-pro font-extrabold text-[120px] md:text-[140px] leading-none text-[#01286D]/10 tracking-tighter">
                    02
                  </span>
                </div>
                <div className="z-10">
                  <span className="inline-block text-[#FD550A] font-montserrat font-semibold text-[13px] tracking-[1px] uppercase mb-3">
                    Director Commercial
                  </span>
                  <h3 className="font-source-serif-pro font-bold text-[42px] md:text-[38px] leading-[115%] tracking-[2%] text-[#01286D]">
                    Rana Muhammad Hamad
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <div className="bg-transparent p-8 md:p-10 rounded-[4px] relative overflow-hidden flex flex-col justify-between min-h-[250px]">
                <div className="absolute left-6 bottom-[-10px] pointer-events-none select-none">
                  <span className="font-source-serif-pro font-extrabold text-[120px] md:text-[140px] leading-none text-[#01286D]/10 tracking-tighter">
                    03
                  </span>
                </div>
                <div className="z-10 mt-auto">
                  <span className="inline-block text-[#FD550A] font-montserrat font-semibold text-[13px] tracking-[1px] uppercase mb-3">
                    Director Finance
                  </span>
                  <h3 className="font-source-serif-pro font-bold text-[42px] md:text-[38px] leading-[115%] tracking-[2%] text-[#01286D]">
                    Muhammad Rashid Khan
                  </h3>
                </div>
              </div>

              <div className="bg-[#01286D] text-white p-8 md:p-12 rounded-[4px] relative overflow-hidden flex flex-col justify-between min-h-[280px] shadow-sm">
                <div className="absolute left-6 top-2 pointer-events-none select-none">
                  <span className="font-source-serif-pro font-extrabold text-[120px] md:text-[140px] leading-none text-white/10 tracking-tighter">
                    04
                  </span>
                </div>
                <div className="z-10 ml-auto text-right w-full">
                  <span className="inline-block px-3 py-1 bg-[#FD550A] text-white font-montserrat font-semibold text-[11px] tracking-[1px] uppercase rounded-[2px] mb-4">
                    Operations & Technical
                  </span>
                  <h3 className="font-source-serif-pro font-bold text-[32px] md:text-[38px] leading-[115%] tracking-[2%] text-white">
                    Muhammad Maaz Ahsan
                  </h3>
                </div>
                <div className="w-[100px] h-[4px] bg-[#FD550A] mt-6 ml-auto z-10" />
              </div>
            </div>
          </div>

          <div className="mt-14 pl-4 border-l-4 border-[#FD550A]">
            <p className="font-montserrat font-normal text-[#434343] text-[15.5px] leading-[175%] max-w-4xl text-justify">
              With an established client base and successful operations under DES, we are now expanding our capabilities through DAIS — a new identity designed to serve clients while building on enhanced technical expertise and our team.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Section 7: Industries We Serve & Sublime Family of Dolphin */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
          <div className="mb-12">
            <h3 className="font-montserrat font-medium text-[16px] leading-[140%] tracking-[2px] mb-2 text-[#FD550A]">
              Industry Coverage
            </h3>
            <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[42px] leading-[110%] tracking-[2%] mb-3">
              Industries We Serve
            </h2>
            <div className="mb-4">
              <Image src="/images/about/barline.png" alt="Divider" width={100} height={4} />
            </div>
            <p className="font-montserrat font-normal text-[#434343] text-[16.59px] leading-[175%] max-w-3xl">
              DAIS supports industries where equipment safety, operational continuity, accurate measurement, regulatory compliance, and asset reliability are critical.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            <div 
              className="p-8 rounded-[12px] flex flex-col justify-between"
              style={{ backgroundColor: '#E9F3FF', border: '1px solid #43434326' }}
            >
              <div>
                <h3 className="font-source-serif-pro font-bold text-[#01286D] text-[24px] leading-[120%] tracking-[1%] mb-4">
                  Energy & Process Industries
                </h3>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#FD550A' }} className="mb-6" />
                <ul className="space-y-4">
                  {[
                    "Oil & Gas",
                    "Petrochemical Plants",
                    "Fertilizer & Chemical Industries",
                    "Power Generation",
                    "Energy Infrastructure"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-[#FD550A] flex-shrink-0" />
                      <span className="font-montserrat font-normal text-[#4A4A4A] text-[15px] leading-[160%]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div 
              className="p-8 rounded-[12px] flex flex-col justify-between"
              style={{ backgroundColor: '#E9F3FF', border: '1px solid #43434326' }}
            >
              <div>
                <h3 className="font-source-serif-pro font-bold text-[#01286D] text-[24px] leading-[120%] tracking-[1%] mb-4">
                  Manufacturing & Production
                </h3>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#FD550A' }} className="mb-6" />
                <ul className="space-y-4">
                  {[
                    "Manufacturing Industries",
                    "Industrial Processing Facilities",
                    "Food & Beverage Industry",
                    "Pharmaceutical & Healthcare Industry"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-[#FD550A] flex-shrink-0" />
                      <span className="font-montserrat font-normal text-[#4A4A4A] text-[15px] leading-[160%]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div 
              className="p-8 rounded-[12px] flex flex-col justify-between"
              style={{ backgroundColor: '#E9F3FF', border: '1px solid #43434326' }}
            >
              <div>
                <h3 className="font-source-serif-pro font-bold text-[#01286D] text-[24px] leading-[120%] tracking-[1%] mb-4">
                  Infrastructure & Utilities
                </h3>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#FD550A' }} className="mb-6" />
                <ul className="space-y-4">
                  {[
                    "Cement & Construction Industry",
                    "Water & Wastewater Facilities"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <span className="w-2 h-2 rounded-full bg-[#FD550A] flex-shrink-0" />
                      <span className="font-montserrat font-normal text-[#4A4A4A] text-[15px] leading-[160%]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-montserrat font-medium text-[16px] leading-[140%] tracking-[2px] mb-2 text-[#FD550A]">
              Trusted Partner in Asset Integrity
            </h3>
            
            <h2 className="font-source-serif-pro font-bold text-[#01286D] text-[42px] leading-[110%] tracking-[2%] mb-3">
              Sublime Family of Dolphin
            </h2>
            
            <div className="mb-4">
              <Image src="/images/about/barline.png" alt="Divider" width={100} height={4} />
            </div>
            
            <p className="font-montserrat font-normal text-[#434343] text-[16.59px] leading-[175%] max-w-3xl">
              A selection of organisations served across energy, process, manufacturing and infrastructure sectors.
            </p>
          </div>

          {/* Corrected Flex-Wrap Container for Client Logos (Group 83 matching Figma) */}
          <div className="flex flex-wrap gap-4 items-start w-full">
            {[
              "GE", "PSO", "Engro Energy", "Parco", "Hubco", "Nishat", "Attock", "Total", "Hyundai", "FFC", "BP", "TUV Rheinland", "Veloxi",
              "Nestlé", "Engro Energy", "Shell", "Byco", "PDL", "Packages Group", "Coca-Cola", "Descon", "Rousch Pakistan", "Coats", "Style Textile",
              "TUV Austria", "Nimir"
            ].map((client, idx) => (
              <div 
                key={idx}
                className="px-6 flex items-center justify-center bg-white"
                style={{
                  borderRadius: '7.62px',
                  border: '1.09px solid #BEBCBC',
                  height: '48.98px',
                }}
              >
                <span 
                  className="font-montserrat font-medium text-[#434343] whitespace-nowrap"
                  style={{ fontSize: '15px' }}
                >
                  {client}
                </span>
              </div>
            ))}
            {/* Spacer to prevent the last line from stretching out of proportion */}
            <div style={{ flexGrow: 100 }}></div>
          </div>

        </div>
        </div>
      </section>
    </div>
  );
}