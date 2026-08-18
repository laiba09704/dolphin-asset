'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-start py-20 px-8 md:px-16 lg:px-24 overflow-hidden text-white bg-[#01286D]">
        {/* Layer 1: Base Image (img.png) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/Services/img.png')` }}
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
            background: 'linear-gradient(90deg, rgba(1, 40, 109, 0.92) 0%, rgba(1, 40, 109, 0.75) 45%, rgba(1, 40, 109, 0.45) 100%)'
          }}
        />

        {/* Content Container */}
        <div className="relative z-30 max-w-2xl pl-2 md:pl-6 lg:pl-10">
          {/* Subheading */}
          <h3 className="text-[#FD550A] font-montserrat font-semibold text-[16px] leading-[140%] tracking-[2px] mb-2 uppercase">
            Service Domains
          </h3>
          
          {/* Main Heading */}
          <h1 className="font-source-serif-pro font-bold text-[44px] md:text-[56px] leading-[110%] tracking-[2%] mb-3 text-white">
            Our Services
          </h1>
          
          {/* Orange Line */}
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
          <p className="font-montserrat font-normal text-[16px] md:text-[18px] leading-[160%] text-white/95 max-w-xl">
            Advanced inspection, integrity assessment, calibration, testing and training solutions delivered through structured engineering practices and international standards.
          </p>
        </div>
      </section>

      {/* Choose A Service Domain Section */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-14">
            <span className="text-[#FD550A] font-montserrat font-semibold text-[13px] leading-[140%] tracking-[2px] uppercase mb-1.5 block">
              Four Domains
            </span>
            <h2 className="font-source-serif-pro font-bold text-[36px] md:text-[42px] text-[#01286D] mb-2.5">
              Choose A Service Domain
            </h2>
            {/* Orange Line */}
            <div 
              className="mb-4"
              style={{
                width: '71px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />
            <p className="font-montserrat font-normal text-[#4A5568] text-[15px] md:text-[16px] max-w-2xl leading-[160%]">
              Each domain has its own dedicated page covering scope, methodology and the specific services we deliver.
            </p>
          </div>

          {/* Cards Grid (2x2) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Inspection & Integrity Assessment */}
            <div 
              className="bg-white rounded-[10px] overflow-hidden flex flex-col justify-between"
              style={{
                border: '1px solid #4343434D',
                boxShadow: '1px 3px 7.5px rgba(1, 40, 109, 0.15)'
              }}
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden rounded-t-[10px]">
                  <Image 
                    src="/images/services/IIA.png" 
                    alt="Inspection & Integrity Assessment" 
                    fill 
                    className="object-cover"
                  />
                  {/* Orange Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#FD550A] text-white font-montserrat font-bold text-[15px] px-3.5 py-1 rounded-[4px] shadow-sm">
                    01
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8">
                  {/* Image Logo */}
                  <div className="mb-4">
                    <Image 
                      src="/images/services/search.png" 
                      alt="Inspection Icon" 
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="font-source-serif-pro font-bold text-[22px] md:text-[24px] text-[#01286D] mb-3">
                    Inspection & Integrity Assessment
                  </h3>

                  <p className="font-montserrat font-normal text-[#4A5568] text-[15px] leading-[160%] mb-6">
                    Systematic evaluation of industrial equipment, structures, and mechanical systems to determine their present condition and fitness for continued operation.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                <Link 
                  href="/services/inspection" 
                  className="inline-flex items-center gap-2 font-montserrat font-semibold text-[14px] text-[#FD550A] hover:text-[#e04a05] transition-colors"
                >
                  Explore Inspection 
                  <span className="text-[16px]">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Calibration Services */}
            <div 
              className="bg-white rounded-[10px] overflow-hidden flex flex-col justify-between"
              style={{
                border: '1px solid #4343434D',
                boxShadow: '1px 3px 7.5px rgba(1, 40, 109, 0.15)'
              }}
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden rounded-t-[10px]">
                  <Image 
                    src="/images/services/CS.png" 
                    alt="Calibration Services" 
                    fill 
                    className="object-cover"
                  />
                  {/* Orange Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#FD550A] text-white font-montserrat font-bold text-[15px] px-3.5 py-1 rounded-[4px] shadow-sm">
                    02
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8">
                  {/* Image Logo */}
                  <div className="mb-4">
                    <Image 
                      src="/images/services/timer.png" 
                      alt="Calibration Icon" 
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="font-source-serif-pro font-bold text-[22px] md:text-[24px] text-[#01286D] mb-3">
                    Calibration Services
                  </h3>

                  <p className="font-montserrat font-normal text-[#4A5568] text-[15px] leading-[160%] mb-6">
                    Verifying measuring instruments against recognized reference standards to ensure accurate, consistent, and reliable readings.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                <Link 
                  href="/services/calibration" 
                  className="inline-flex items-center gap-2 font-montserrat font-semibold text-[14px] text-[#FD550A] hover:text-[#e04a05] transition-colors"
                >
                  Explore Calibration 
                  <span className="text-[16px]">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Testing Services */}
            <div 
              className="bg-white rounded-[10px] overflow-hidden flex flex-col justify-between"
              style={{
                border: '1px solid #4343434D',
                boxShadow: '1px 3px 7.5px rgba(1, 40, 109, 0.15)'
              }}
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden rounded-t-[10px]">
                  <Image 
                    src="/images/services/TS.png" 
                    alt="Testing Services" 
                    fill 
                    className="object-cover"
                  />
                  {/* Orange Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#FD550A] text-white font-montserrat font-bold text-[15px] px-3.5 py-1 rounded-[4px] shadow-sm">
                    03
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8">
                  {/* Image Logo */}
                  <div className="mb-4">
                    <Image 
                      src="/images/services/line.png" 
                      alt="Testing Icon" 
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="font-source-serif-pro font-bold text-[22px] md:text-[24px] text-[#01286D] mb-3">
                    Testing Services
                  </h3>

                  <p className="font-montserrat font-normal text-[#4A5568] text-[15px] leading-[160%] mb-6">
                    Verifying the strength, condition, performance, and operational safety of industrial equipment, pressure systems, pipelines, valves, cylinders, and electrical installations.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                <Link 
                  href="/services/testing" 
                  className="inline-flex items-center gap-2 font-montserrat font-semibold text-[14px] text-[#FD550A] hover:text-[#e04a05] transition-colors"
                >
                  Explore Testing 
                  <span className="text-[16px]">&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Training Services */}
            <div 
              className="bg-white rounded-[10px] overflow-hidden flex flex-col justify-between"
              style={{
                border: '1px solid #4343434D',
                boxShadow: '1px 3px 7.5px rgba(1, 40, 109, 0.15)'
              }}
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative w-full h-[180px] md:h-[200px] overflow-hidden rounded-t-[10px]">
                  <Image 
                    src="/images/services/TRS.png" 
                    alt="Training Services" 
                    fill 
                    className="object-cover"
                  />
                  {/* Orange Number Badge */}
                  <div className="absolute top-4 left-4 bg-[#FD550A] text-white font-montserrat font-bold text-[15px] px-3.5 py-1 rounded-[4px] shadow-sm">
                    04
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8">
                  {/* Image Logo */}
                  <div className="mb-4">
                    <Image 
                      src="/images/services/cap.png" 
                      alt="Training Icon" 
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="font-source-serif-pro font-bold text-[22px] md:text-[24px] text-[#01286D] mb-3">
                    Training Services
                  </h3>

                  <p className="font-montserrat font-normal text-[#4A5568] text-[15px] leading-[160%] mb-6">
                    Industry-focused training programs designed to strengthen technical knowledge, practical skills, workplace safety and operational awareness.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                <Link 
                  href="/services/training" 
                  className="inline-flex items-center gap-2 font-montserrat font-semibold text-[14px] text-[#FD550A] hover:text-[#e04a05] transition-colors"
                >
                  Explore Training 
                  <span className="text-[16px]">&rarr;</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}