'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedSection from '../components/AnimatedSection';
import StaggerContainer, { staggerItemVariants } from '../components/StaggerContainer';
import { motion } from 'framer-motion';

export default function TrainingServicesPage() {
  const servicesList = [
    { number: '01', title: 'Non-Destructive Testing (NDT) Training' },
    { number: '02', title: 'Lifting Operations & Inspection Training' },
    { number: '03', title: 'Electrical Safety Training' },
    { number: '04', title: 'Fire Safety Training' },
    { number: '05', title: 'Emergency Response Training' },
  ];

  const competencyPrograms = [
    {
      number: '01',
      title: 'Non-Destructive Testing (NDT) Training',
      description: 'Developing knowledge of inspection methods, defect detection, and safe testing practices.',
      icon: '/images/trainingservices/1.png',
    },
    {
      number: '02',
      title: 'Lifting Operations & Inspection Training',
      description: 'Building awareness of lifting equipment, inspection requirements, load handling, and safe lifting practices.',
      icon: '/images/trainingservices/2.png',
    },
    {
      number: '03',
      title: 'Electrical Safety Training',
      description: 'Developing knowledge of inspection methods, defect detection, and safe testing practices.',
      icon: '/images/trainingservices/3.png',
    },
    {
      number: '04',
      title: 'Fire Safety Training',
      description: 'Developing knowledge of inspection methods, defect detection, and safe testing practices.',
      icon: '/images/trainingservices/4.png',
    },
    {
      number: '05',
      title: 'Emergency Response Training',
      description: 'Developing knowledge of inspection methods, defect detection, and safe testing practices.',
      icon: '/images/trainingservices/5.png',
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center justify-start py-20 px-6 xl:px-10 overflow-hidden text-white bg-[#01286D]">
        <Image
          src="/images/trainingservices/backimg.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div 
          className="absolute inset-0 z-10 bg-repeat bg-auto opacity-40"
          style={{ backgroundImage: `url('/images/trainingservices/box.png')` }}
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
              Service Domain 03
            </h3>
          </AnimatedSection>
          
          <AnimatedSection direction="left" delay={0.3}>
            <h1 className="font-source-serif-pro font-bold text-[40px] md:text-[52px] leading-[115%] tracking-[1%] mb-3 text-white">
              Training Services
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
              Industry-focused training programs designed to strengthen technical knowledge, process skills, workplace safety, and operational awareness.
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
                Our training services support personnel in developing the competence required to perform industrial activities safely, accurately, and in accordance with applicable technical practices and safety requirements.
              </p>

              <div className="space-y-4 font-montserrat text-[#4A5568] text-[15px]">
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                  <p className="leading-[160%]">Personnel competent in inspection and operating practices</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                  <p className="leading-[160%]">Stronger hazard awareness during on-site/technical work</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                  <p className="leading-[160%]">Faster, more confident emergency response</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#FD550A] font-bold mt-0.5 text-[16px]">&#10003;</span>
                  <p className="leading-[160%]">Practical skills transferred directly to site conditions</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.4} className="lg:col-span-5">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[520px] h-[340px] md:h-[380px] rounded-[12px] overflow-hidden shadow-lg border border-[#43434320]">
                <img 
                  src="/images/trainingservices/main.png" 
                  alt="Training Services main image" 
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

          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <div 
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
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>

        </div>
        </div>
      </section>

      {/* Knowledge To Competency Section */}
      <section className="w-full py-20 bg-white relative">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
          
          <AnimatedSection direction="up">
            <div className="mb-10">
              <span className="text-[#FD550A] font-montserrat font-semibold text-[13px] leading-[140%] tracking-[2px] uppercase mb-1.5 block">
                Programs
              </span>
              <h2 className="font-source-serif-pro font-bold text-[34px] md:text-[40px] text-[#01286D] mb-3">
                Knowledge To Competency
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
              <p className="font-montserrat font-normal text-[#4A5568] text-[14px] md:text-[15px]">
                Knowledge &gt; Practical Skills &gt; Safety Awareness &gt; Competency
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competencyPrograms.map((item, index) => (
                <motion.div key={index} variants={staggerItemVariants}>
                  <div 
                    className="bg-white rounded-[12px] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
                    style={{
                      border: '1px solid #E2E8F0',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.03)'
                    }}
                  >
                    <div>
                      <div className="mb-6">
                        <img 
                          src={item.icon} 
                          alt={`Icon ${item.number}`} 
                          className="w-[42px] h-[42px] object-contain"
                        />
                      </div>

                      <h3 className="font-source-serif-pro font-bold text-[19px] text-[#01286D] mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="font-montserrat font-normal text-[#4A5568] text-[14px] md:text-[15px] leading-[170%]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>

        </div>
        </div>
      </section>
    </div>
  );
}