'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import StaggerContainer, { staggerItemVariants } from '../components/StaggerContainer';
import { motion } from 'framer-motion';

export default function TestingServicesPage() {
  return (
    <div className="w-full bg-white">
      {/* Section 1: Hero Banner */}
      <section className="relative w-full min-h-[500px] flex items-center justify-start py-20 px-6 xl:px-10 overflow-hidden text-white bg-[#01286D]">
        {/* Background Image */}
        <Image
          src="/images/Testing Services/backimg.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(90deg, #01286D 0%, rgba(1, 40, 109, 0.85) 35%, rgba(1, 40, 109, 0.4) 100%)'
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 max-w-2xl xl:ml-24">
          {/* Subheading */}
          <AnimatedSection direction="left" delay={0.1}>
            <h3 className="text-[#FD550A] font-montserrat font-semibold text-[16px] leading-[140%] tracking-[2px] mb-2 uppercase">
              Service Domain 03
            </h3>
          </AnimatedSection>
          
          {/* Main Heading */}
          <AnimatedSection direction="left" delay={0.3}>
            <h2 className="font-source-serif-pro font-bold text-[40px] md:text-[52px] leading-[110%] tracking-[2%] mb-3 text-white">
              Testing Services
            </h2>
          </AnimatedSection>
          
          {/* Orange Line */}
          <AnimatedSection direction="left" delay={0.5}>
            <div 
              className="mb-4"
              style={{
                width: '71px',
                height: '3px',
                backgroundColor: '#FD550A',
                opacity: 1
              }}
            />
          </AnimatedSection>
          
          {/* Description Text */}
          <AnimatedSection direction="up" delay={0.6}>
            <p className="font-montserrat font-normal text-[16px] md:text-[18px] leading-[160%] text-white/90 max-w-xl">
              Verifying the strength, condition, performance, and operational safety of industrial equipment, pressure systems, pipelines, valves, cylinders, and electrical installations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Why It Matters */}
      <section className="w-full py-16 bg-white">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Bullet Points */}
          <AnimatedSection direction="left" delay={0.2} className="lg:col-span-7">
            <div className="flex flex-col justify-start">
              <span className="text-[#FD550A] font-montserrat font-semibold text-[14px] leading-[140%] tracking-[2px] uppercase mb-1">
                Overview
              </span>
              <h2 className="font-source-serif-pro font-bold text-[36px] md:text-[44px] text-[#01286D] mb-4">
                Why It Matters
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

              <p className="font-montserrat text-[#4A5568] text-[15px] md:text-[16px] leading-[170%] mb-8 max-w-2xl">
                These activities help identify leakage, pressure weaknesses, equipment defects, and performance issues before they develop into operational failures or safety risks.
              </p>

              {/* Checklist items */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold text-lg mt-0.5">✓</span>
                  <p className="font-montserrat text-[#4A5568] text-[15px] leading-[160%]">
                    Verified pressure integrity before commissioning or restart
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold text-lg mt-0.5">✓</span>
                  <p className="font-montserrat text-[#4A5568] text-[15px] leading-[160%]">
                    Leaks, weaknesses and defects identified before failure
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold text-lg mt-0.5">✓</span>
                  <p className="font-montserrat text-[#4A5568] text-[15px] leading-[160%]">
                    Requalified cylinders and valves fit for continued service
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold text-lg mt-0.5">✓</span>
                  <p className="font-montserrat text-[#4A5568] text-[15px] leading-[160%]">
                    Clear pass/fail evidence for safety and regulatory review
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Image with rounded corners */}
          <AnimatedSection direction="right" delay={0.4} className="lg:col-span-5">
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg overflow-hidden rounded-2xl shadow-md border border-gray-100">
                <img 
                  src="/images/Testing Services/matter.png" 
                  alt="Testing Services Why It Matters" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

        </div>
        </div>
      </section>

      {/* Section 3: Services We Deliver */}
      <section 
        className="w-full py-16 relative"
        style={{
          backgroundColor: '#E9F3FF80',
          backgroundImage: `
            linear-gradient(to right, #6666661A 1px, transparent 1px),
            linear-gradient(to bottom, #6666661A 1px, transparent 1px)
          `,
          backgroundSize: 'calc(100% / 19) calc(100% / 8)'
        }}
      >
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 relative z-10">
          
          {/* Section Header */}
          <AnimatedSection direction="up">
            <div className="mb-12">
              <span className="text-[#FD550A] font-montserrat font-semibold text-[14px] leading-[140%] tracking-[2px] uppercase mb-1 block">
                Scope
              </span>
              <h2 className="font-source-serif-pro font-bold text-[36px] md:text-[44px] text-[#01286D] mb-3">
                Services We Deliver
              </h2>
              {/* Orange Line */}
              <div 
                style={{
                  width: '45px',
                  height: '3px',
                  backgroundColor: '#FD550A',
                  opacity: 1
                }}
              />
            </div>
          </AnimatedSection>

          {/* Services Cards Grid */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 01 */}
            <motion.div variants={staggerItemVariants} className="bg-white/95 backdrop-blur-xs p-6 border border-gray-200/80 rounded-xl shadow-xs flex items-center gap-4">
              <span className="text-[#FD550A] font-montserrat font-bold text-[18px]">01</span>
              <h4 className="font-montserrat font-medium text-[#2D3748] text-[15px]">Hydrostatic Pressure Testing</h4>
            </motion.div>

            {/* Card 02 */}
            <motion.div variants={staggerItemVariants} className="bg-white/95 backdrop-blur-xs p-6 border border-gray-200/80 rounded-xl shadow-xs flex items-center gap-4">
              <span className="text-[#FD550A] font-montserrat font-bold text-[18px]">02</span>
              <h4 className="font-montserrat font-medium text-[#2D3748] text-[15px]">Pneumatic Pressure Testing</h4>
            </motion.div>

            {/* Card 03 */}
            <motion.div variants={staggerItemVariants} className="bg-white/95 backdrop-blur-xs p-6 border border-gray-200/80 rounded-xl shadow-xs flex items-center gap-4">
              <span className="text-[#FD550A] font-montserrat font-bold text-[18px]">03</span>
              <h4 className="font-montserrat font-medium text-[#2D3748] text-[15px]">Pipeline Pressure Testing</h4>
            </motion.div>

            {/* Card 04 */}
            <motion.div variants={staggerItemVariants} className="bg-white/95 backdrop-blur-xs p-6 border border-gray-200/80 rounded-xl shadow-xs flex items-center gap-4">
              <span className="text-[#FD550A] font-montserrat font-bold text-[18px]">04</span>
              <h4 className="font-montserrat font-medium text-[#2D3748] text-[15px]">Leak Detection & Testing</h4>
            </motion.div>

            {/* Card 05 */}
            <motion.div variants={staggerItemVariants} className="bg-white/95 backdrop-blur-xs p-6 border border-gray-200/80 rounded-xl shadow-xs flex items-center gap-4">
              <span className="text-[#FD550A] font-montserrat font-bold text-[18px]">05</span>
              <h4 className="font-montserrat font-medium text-[#2D3748] text-[15px]">Valve Testing</h4>
            </motion.div>

            {/* Card 06 */}
            <motion.div variants={staggerItemVariants} className="bg-white/95 backdrop-blur-xs p-6 border border-gray-200/80 rounded-xl shadow-xs flex items-center gap-4">
              <span className="text-[#FD550A] font-montserrat font-bold text-[18px]">06</span>
              <h4 className="font-montserrat font-medium text-[#2D3748] text-[15px]">Electrical Testing & Inspection</h4>
            </motion.div>

            {/* Card 07 */}
            <motion.div variants={staggerItemVariants} className="bg-white/95 backdrop-blur-xs p-6 border border-gray-200/80 rounded-xl shadow-xs flex items-center gap-4">
              <span className="text-[#FD550A] font-montserrat font-bold text-[18px]">07</span>
              <h4 className="font-montserrat font-medium text-[#2D3748] text-[15px]">Seamless HP Cylinder Requalification</h4>
            </motion.div>

            {/* Card 08 */}
            <motion.div variants={staggerItemVariants} className="bg-white/95 backdrop-blur-xs p-6 border border-gray-200/80 rounded-xl shadow-xs flex items-center gap-4">
              <span className="text-[#FD550A] font-montserrat font-bold text-[18px]">08</span>
              <h4 className="font-montserrat font-medium text-[#2D3748] text-[15px]">Welded LPG Cylinder Requalification</h4>
            </motion.div>

          </StaggerContainer>
        </div>
        </div>
      </section>
    </div>
  );
}