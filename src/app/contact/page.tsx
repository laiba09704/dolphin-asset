'use client';

import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Section 1: Talk To Our Engineers */}
      <section className="relative w-full min-h-[500px] flex items-center justify-start py-20 px-6 xl:px-10 overflow-hidden text-white bg-[#01286D]">
        {/* Layer 1: Base Image (/images/contact/img.png) */}
        <Image
          src="/images/contact/img.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Layer 2: Pattern Overlay (box.png) */}
        <div 
          className="absolute inset-0 z-10 bg-repeat bg-auto opacity-40"
          style={{ backgroundImage: `url('/images/Services/box.png')` }}
        />

        {/* Layer 3: Dark Blue Gradient Overlay */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(90deg, #01286D 0%, rgba(1, 40, 109, 0.85) 35%, rgba(1, 40, 109, 0.4) 100%)'
          }}
        />

        {/* Content Container */}
        <div className="relative z-30 max-w-2xl xl:ml-24">
          {/* Subheading */}
          <h3 className="text-[#FD550A] font-montserrat font-semibold text-[16px] leading-[140%] tracking-[2px] mb-2 uppercase">
            Contact Us
          </h3>
          
          {/* Main Heading */}
          <h2 className="font-source-serif-pro font-bold text-[40px] md:text-[52px] leading-[110%] tracking-[2%] mb-3 text-white">
            Talk To Our Engineers
          </h2>
          
          {/* Exact Orange Line matching Figma specifications */}
          <div 
            className="mb-4"
            style={{
              width: '71px',
              height: '3px',
              backgroundColor: '#FD550A',
              opacity: 1
            }}
          />
          
          {/* Description Text */}
          <p className="font-montserrat font-normal text-[16px] md:text-[18px] leading-[160%] text-white/90 max-w-xl">
            Share your inspection, calibration, testing or training requirement and our technical team will respond with a suitable scope of work.
          </p>
        </div>
      </section>

      {/* Section 2: Reach DAIS & Request a Quote */}
      <section className="w-full bg-white py-16">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Reach DAIS & Contact Info */}
          <div className="flex flex-col justify-start">
            <span className="text-[#FD550A] font-montserrat font-semibold text-[14px] leading-[140%] tracking-[2px] uppercase mb-1">
              Head Office
            </span>
            <h2 className="font-source-serif-pro font-bold text-[36px] md:text-[44px] text-[#01286D] mb-3">
              Reach DAIS
            </h2>
            
            {/* Orange Line */}
            <div 
              className="mb-6"
              style={{
                width: '71px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />

            <p className="font-montserrat text-[#4A5568] text-[15px] leading-[160%] mb-8 max-w-lg">
              Each domain has its own dedicated page covering scope, methodology and the specific services we deliver.
            </p>

            {/* Contact Details List */}
            <div className="space-y-6">
              
              {/* Location */}
              <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                <div className="w-6 h-6 mt-1 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FD550A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#01286D] text-[15px] mb-1">Head Office</h4>
                  <p className="font-montserrat text-[#4A5568] text-[14.5px] leading-[150%]">
                    First Floor, Plaza No. 29 Broadway, Paragon Housing Society, Barki Road, Lahore, Pakistan.
                  </p>
                </div>
              </div>

              {/* Landline */}
              <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                <div className="w-6 h-6 mt-1 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FD550A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#01286D] text-[15px] mb-1">Landline</h4>
                  <p className="font-montserrat text-[#4A5568] text-[14.5px]">+92 4235305335</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                <div className="w-6 h-6 mt-1 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FD550A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#01286D] text-[15px] mb-1">WHATSAPP</h4>
                  <p className="font-montserrat text-[#4A5568] text-[14.5px]">+92 300 6624494</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pb-6 border-b border-gray-200">
                <div className="w-6 h-6 mt-1 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FD550A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#01286D] text-[15px] mb-1">EMAIL</h4>
                  <p className="font-montserrat text-[#4A5568] text-[14.5px]">info@dolphinais.com</p>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 mt-1 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#FD550A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#01286D] text-[15px] mb-1">WEBSITE</h4>
                  <p className="font-montserrat text-[#4A5568] text-[14.5px]">dolphinais.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Request a Quote Form Card with sharp corners matching the design */}
          <div 
            className="p-8 md:p-10 shadow-sm border border-gray-100 bg-[#E9F3FF]/50 rounded-none"
          >
            <h3 className="font-source-serif-pro font-bold text-[28px] md:text-[32px] text-[#01286D] mb-2">
              Request a Quote
            </h3>
            
            {/* Orange Line under Request a Quote */}
            <div 
              className="mb-8"
              style={{
                width: '45px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Full Name */}
              <div>
                <label className="block font-montserrat font-semibold text-[11px] tracking-[1px] text-[#4A5568] mb-2 uppercase">
                  FULL NAME
                </label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#01286D]"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block font-montserrat font-semibold text-[11px] tracking-[1px] text-[#4A5568] mb-2 uppercase">
                  COMPANY
                </label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#01286D]"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-montserrat font-semibold text-[11px] tracking-[1px] text-[#4A5568] mb-2 uppercase">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#01286D]"
                  />
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-[11px] tracking-[1px] text-[#4A5568] mb-2 uppercase">
                    PHONE
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#01286D]"
                  />
                </div>
              </div>

              {/* Service Required with properly centered dropdown arrow */}
              <div>
                <label className="block font-montserrat font-semibold text-[11px] tracking-[1px] text-[#4A5568] mb-2 uppercase">
                  SERVICE REQUIRED
                </label>
                <div className="relative">
                  <select 
                    className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 pr-10 text-sm text-gray-400 appearance-none focus:outline-none focus:border-[#01286D] cursor-pointer"
                  >
                    <option>Inspection & Integrity Assessment</option>
                    <option>Calibration Services</option>
                    <option>Testing Services</option>
                    <option>Training Requirements</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#555]">
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7 7L13 1"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Scope Details */}
              <div>
                <label className="block font-montserrat font-semibold text-[11px] tracking-[1px] text-[#4A5568] mb-2 uppercase">
                  SCOPE DETAILS
                </label>
                <textarea 
                  rows={4}
                  placeholder="Equipment, site location, standards and timeline"
                  className="w-full bg-white border border-gray-300 rounded-none px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-[#01286D] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full md:w-auto px-8 py-3.5 bg-[#01286D] text-white font-montserrat font-semibold text-[13px] tracking-[1px] uppercase rounded-md hover:bg-[#011f54] transition-colors"
              >
                SUBMIT ENQUIRY
              </button>
            </form>
          </div>

        </div>
        </div>
      </section>
    </div>
  );
}