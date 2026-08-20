'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import StaggerContainer, { staggerItemVariants } from '../components/StaggerContainer';
import { motion } from 'framer-motion';

export default function CalibrationServicesPage() {
  const servicesList = [
    { number: '01', title: 'Pressure Instrument Calibration' },
    { number: '02', title: 'Pressure Gauge Calibration' },
    { number: '03', title: 'Temperature Instrument Calibration' },
    { number: '04', title: 'Flow Meter Calibration' },
    { number: '05', title: 'Electrical Equipment Calibration' },
    { number: '06', title: 'Instrument Calibration' },
    { number: '07', title: 'Measuring & Precision Tools Calibration' },
    { number: '08', title: 'Safety Valve Testing & Calibration' },
    { number: '09', title: 'Laboratory Equipment Calibration' },
    { number: '10', title: 'Tank Calibration' },
    { number: '11', title: 'On-Site Calibration Services' },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center justify-start py-20 px-6 xl:px-10 overflow-hidden text-white bg-[#01286D]">
        <Image
          src="/images/callibrationservices/backimg.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div 
          className="absolute inset-0 z-10 bg-repeat bg-auto opacity-40"
          style={{ backgroundImage: `url('/images/callibrationservices/box.png')` }}
        />
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(90deg, rgba(1, 40, 109, 0.95) 0%, rgba(1, 40, 109, 0.80) 45%, rgba(1, 40, 109, 0.45) 100%)'
          }}
        />

        <div className="relative z-30 max-w-3xl xl:ml-24">
          <AnimatedSection direction="left" delay={0.1}>
            <h3 className="text-[#FD550A] font-montserrat font-semibold text-[15px] leading-[140%] tracking-[2px] mb-2 uppercase">
              Service Domain 02
            </h3>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.3}>
            <h1 className="font-source-serif-pro font-bold text-[40px] md:text-[52px] leading-[115%] tracking-[1%] mb-3 text-white">
              Calibration Services
            </h1>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.5}>
            <div 
              className="mb-5"
              style={{
                width: '71px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.6}>
            <p className="font-montserrat font-normal text-[15px] md:text-[17px] leading-[170%] text-white/90 max-w-2xl">
              Verifying measuring instruments against recognized reference standards to ensure accurate, consistent, and reliable readings.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="w-full py-20 bg-white relative">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <AnimatedSection direction="left" delay={0.2} className="lg:col-span-7">
            <div>
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
                Regular calibration supports process control, equipment safety, product quality, regulatory compliance, and dependable technical decision-making.
              </p>

              <div className="space-y-4 font-montserrat text-[#4A5568] text-[15px]">
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                  <p className="leading-[160%]">Traceable accuracy against recognized reference standards</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                  <p className="leading-[160%]">Stable process control and consistent product quality</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                  <p className="leading-[160%]">Compliance-ready calibration certificates and records</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                  <p className="leading-[160%]">On-site calibration that avoids instrument downtime</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4} className="lg:col-span-5">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[520px] h-[340px] md:h-[380px] rounded-[12px] overflow-hidden shadow-lg border border-[#43434320]">
                <img 
                  src="/images/callibrationservices/main.png" 
                  alt="Calibration Services main image" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

        </div>
        </div>
      </section>

      {/* Services We Deliver Section */}
      <section 
        className="w-full py-20 relative overflow-hidden bg-[#F8FAFC]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: 'calc(100% / 19) calc(100% / 8)',
        }}
      >
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 relative z-10">
          
          <AnimatedSection direction="up">
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
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <motion.div 
                key={index}
                variants={staggerItemVariants}
                className="bg-white rounded-[8px] p-5 flex items-center gap-6 transition-all duration-300 hover:shadow-md"
                style={{
                  border: '1px solid #43434333',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.04)'
                }}
              >
                <span className="text-[#FD550A] font-montserrat font-bold text-[15px]">
                  {service.number}
                </span>
                <h3 className="font-montserrat font-medium text-[15px] text-[#01286D]">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </StaggerContainer>

        </div>
        </div>
      </section>
    </div>
  );
}