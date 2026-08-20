"use client";

import React from "react";
import Image from "next/image";
import { Montserrat, Source_Serif_4 } from "next/font/google";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import StaggerContainer, {
  staggerItemVariants,
  staggerScaleVariants,
  staggerFadeVariants,
} from "../components/StaggerContainer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function AboutPage() {
  return (
    <div className={`w-full ${montserrat.className}`}>
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
            background:
              "linear-gradient(90.47deg, #01286D 3.92%, rgba(1, 40, 109, 0.95) 12.22%, rgba(1, 40, 109, 0.9) 21.41%, rgba(1, 40, 109, 0.7) 36.71%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 max-w-2xl xl:ml-24">
          <AnimatedSection direction="left" delay={0.1}>
            <h3 className="text-[#FD550A] font-semibold text-[12px] leading-[140%] tracking-[2px] mb-2 normal-case">
              About DAIS
            </h3>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.3}>
            <h1
              className={`${sourceSerif.className} font-bold text-[26px] sm:text-[32px] md:text-[42px] leading-[110%] tracking-[2%] mb-4`}
            >
              Engineering Asset <br /> Integrity
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.5}>
            <div className="mb-6">
              <Image
                src="/images/about/barline.png"
                alt="Divider"
                width={100}
                height={4}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.6}>
            <p className="font-normal text-[12px] md:text-[14px] lg:text-[14px] leading-[163%] text-[#FFFFFF]">
              Dolphin Asset Integrity Solutions (Private) Limited (DAIS) is a
              professional <br />
              engineering and asset integrity services company specializing in
              ensuring the <br />
              safety, integrity and reliability of industrial assets. We provide
              advanced <br />
              inspection, integrity assessment, calibration, and testing
              solutions across multiple <br />
              industries, helping clients maintain operational safety, enhance
              asset <br />
              performance, and extend equipment lifecycle through structured
              engineering <br />
              practices and adherence to international standards.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: Who We Are (Ensuring Safety, Integrity & Reliability) */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content Area */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#FD550A] font-medium text-[12px] leading-[140%] tracking-[2px] mb-3 normal-case">
                  Who We Are
                </h3>

                <h2
                  className={`${sourceSerif.className} font-bold text-[#01286D] text-[30px] leading-[110%] tracking-[2%] mb-4`}
                >
                  Ensuring Safety, Integrity & Reliability
                </h2>

                <div className="mb-6">
                  <Image
                    src="/images/about/divider.png"
                    alt="Divider"
                    width={60}
                    height={2}
                  />
                </div>

                <p className="font-normal text-[#4A4A4A] text-[13px] leading-[175%] tracking-[1%] mb-8 text-justify">
                  Dolphin Asset Integrity Solutions (Private) Limited (DAIS) is
                  a professional <br />
                  engineering and asset integrity services company specializing
                  in ensuring the <br />
                  safety, integrity and reliability of industrial assets. We
                  provide advanced <br />
                  inspection, integrity assessment, calibration, and testing
                  solutions across multiple <br />
                  industries, helping clients maintain operational safety,
                  enhance asset <br />
                  performance, and extend equipment lifecycle through structured
                  engineering <br />
                  practices and adherence to international standards.
                </p>

                <div className="flex items-center pl-4 border-l-2 border-[#FD550A] h-12">
                  <blockquote
                    className={`${sourceSerif.className} font-bold text-[#01286D] text-[20px] leading-[110%] tracking-[2%]`}
                  >
                    &ldquo;Ensuring safety, integrity, and reliability&rdquo;
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Image Area */}
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative w-full h-[380px] md:h-[400px] rounded-lg overflow-hidden shadow-lg border-b-4 border-[#FD550A]">
                <Image
                  src="/images/about/mans.png"
                  alt="Engineers Inspecting Industrial Asset"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 3: Our Evolution (From DES To DAIS) */}
      <section className="w-full bg-[#f8fafc] py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Text & Checkpoints Area */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#FD550A] font-medium text-[14px] leading-[140%] tracking-[2px] mb-3 normal-case">
                  Our Evolution
                </h3>

                <h2
                  className={`${sourceSerif.className} font-bold text-[#01286D] text-[38px] leading-[110%] tracking-[2%] mb-4`}
                >
                  From DES To DAIS
                </h2>

                <div className="mb-6">
                  <Image
                    src="/images/about/barline.png"
                    alt="Divider"
                    width={60}
                    height={4}
                  />
                </div>

                <p className="font-normal text-[#434343] text-[13px] leading-[175%] tracking-[0%] text-justify mb-8">
                  With an established client base and successful operations
                  under DES — Dolphin <br />
                  Engineering Solutions — we are now expanding our capabilities
                  through DAIS: a <br />
                  new identity designed to serve clients while building on
                  enhanced technical <br />
                  expertise and our team.
                </p>

                {/* Checkpoints List */}
                <div className="space-y-4">
                  {[
                    "Same leadership, same trusted client relationships",
                    "Broader scope across inspection, calibration, testing and training",
                    "Strengthened technical team and engineering capability",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Image
                        src="/images/about/Tick.png"
                        alt="Tick Icon"
                        width={12}
                        height={12}
                        className="object-contain mt-1"
                      />
                      <p className="font-normal text-[#434343] text-[13px] leading-[163%] tracking-[0%] text-justify">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* DAIS Image Only */}
            <AnimatedSection direction="right" delay={0.4}>
              <div className="relative w-full h-[220px] md:h-[250px]">
                <Image
                  src="/images/about/DAIS.png"
                  alt="Dolphin Asset Integrity Solutions"
                  fill
                  quality={100}
                  className="object-contain mt-12"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 4: Our Mission & Our Vision */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24 h-auto lg:h-[320px] bg-white border-[0.5px] border-[#d1d5db] rounded-[13px] flex flex-col lg:flex-row items-center overflow-hidden shadow-sm">
            {/* Mission Card (Left Half) */}
            <AnimatedSection
              direction="left"
              delay={0.2}
              className="w-full lg:w-1/2 h-full"
            >
              <div className="w-full h-full bg-white p-8 md:p-10 relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r-[0.5px] border-[#d1d5db]">
                <div className="absolute right-8 -top-4 pointer-events-none select-none opacity-40 text-right">
                  <span
                    className={montserrat.className}
                    style={{
                      fontWeight: 500,
                      fontStyle: "bold",
                      fontSize: "90px",
                      lineHeight: "192%",
                      letterSpacing: "0.01em",
                      textAlign: "justify",
                      verticalAlign: "middle",
                      color: "#01286D1A",
                    }}
                  >
                    01
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-3 z-10">
                  <div className="relative w-[60px] h-[60px] flex-shrink-0">
                    <Image
                      src="/images/about/1.png"
                      alt="01 Badge"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h2
                    className={`${sourceSerif.className} font-bold text-[#01286D] text-[42px] leading-[110%] tracking-[2%]`}
                  >
                    Our Mission
                  </h2>
                </div>

                <div
                  className="w-full pl-4 border-l-3 border-[#FD550A] z-10"
                  style={{ transform: "translateY(-25px)" }}
                >
                  <p className="font-normal text-[#4A4A4A] text-[13px] leading-[200%] tracking-[1%] text-justify">
                    To deliver world-class asset integrity solutions that
                    enhance operational safety, extend asset life, and reduce
                    industrial risk through advanced engineering practices,
                    technical excellence, and adherence to international
                    standards.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Vision Card (Right Half) */}
            <AnimatedSection
              direction="right"
              delay={0.3}
              className="w-full lg:w-1/2 h-full"
            >
              <div
                className="w-full h-full p-8 md:p-10 relative flex flex-col justify-between"
                style={{ backgroundColor: "#E9F3FF80" }}
              >
                <div className="absolute right-8 -top-4 pointer-events-none select-none opacity-40 text-right">
                  <span
                    className={montserrat.className}
                    style={{
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "90px",
                      lineHeight: "192%",
                      letterSpacing: "0.01em",
                      textAlign: "justify",
                      verticalAlign: "middle",
                      color: "#01286D1A",
                    }}
                  >
                    02
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-3 z-10">
                  <div className="relative w-[60px] h-[60px] flex-shrink-0">
                    <Image
                      src="/images/about/1.png"
                      alt="02 Badge"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h2
                    className={`${sourceSerif.className} font-bold text-[#01286D] text-[42px] leading-[120%] tracking-[2%]`}
                  >
                    Our Vision
                  </h2>
                </div>

                <div
                  className="w-full pl-4 border-l-2 border-[#FD550A] z-10"
                  style={{ transform: "translateY(-25px)" }}
                >
                  <p className="font-normal text-[#4A4A4A] text-[13px] leading-[200%] tracking-[2%] text-justify">
                    To become a globally recognized leader in asset integrity
                    management, delivering trusted, innovative, and sustainable
                    engineering solutions that set benchmarks for safety,
                    reliability, and performance.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 5: The Way We Engineer (Core Values) */}
      <section className="w-full bg-white py-20 pt-2">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
            <AnimatedSection direction="up">
              <div className="mb-6">
                <h3 className="font-medium text-[14px] leading-[140%] tracking-[2px] mb-2 text-[#FD550A]">
                  Core Values
                </h3>
                <h2
                  className={`${sourceSerif.className} font-bold text-[#01286D] text-[38px] leading-[110%] tracking-[2%] mb-3`}
                >
                  The Way We Engineer
                </h2>
                <div className="mb-4">
                  <Image
                    src="/images/about/barline.png"
                    alt="Divider"
                    width={70}
                    height={4}
                  />
                </div>
                <p className="font-normal text-[#434343] text-[13px] leading-[175%] max-w-2xl text-justify md:text-left">
                  Our services are adapted to client requirements, operating
                  environments, equipment <br /> conditions, and applicable
                  technical standards.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
              staggerDelay={0.1}
            >
              {[
                {
                  title: "Integrity",
                  desc: "We operate with honesty, transparency, and strong engineering ethics.",
                },
                {
                  title: "Safety",
                  desc: "We prioritize human life and asset protection every time.",
                },
                {
                  title: "Excellence",
                  desc: "We deliver high-quality engineering solutions aligned with international standards.",
                },
                {
                  title: "Innovation",
                  desc: "We adopt modern technologies and advanced inspection methodologies.",
                },
                {
                  title: "Reliability",
                  desc: "We ensure consistent, accurate, and dependable service delivery.",
                },
                {
                  title: "Technical Expertise",
                  desc: "We are supported by a highly skilled and experienced team of professionals ensuring excellent execution.",
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItemVariants}
                  className="card-hover bg-white py-6 px-4 md:px-5 flex flex-col justify-start w-full h-full min-h-[160px]"
                  style={{
                    borderRadius: "9.57px",
                    borderWidth: "0.96px",
                    borderStyle: "solid",
                    borderColor: "#43434333",
                  }}
                >
                  <h3
                    className={`${sourceSerif.className} mb-4`}
                    style={{
                      fontWeight: 700,
                      fontSize: "20px",
                      lineHeight: "118%",
                      letterSpacing: "2%",
                      color: "#01286D",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "170%",
                      letterSpacing: "0%",
                      textAlign: "justify",
                      color: "#4A4A4A",
                    }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 6: Leadership (Core Team) */}
      <section className="w-full py-20 bg-[#F4F7FB]">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
            {/* Top Header */}
            <AnimatedSection direction="up">
              <div className="mb-12 pl-4 border-l-2 border-[#FD550A]">
                <h3 className="font-medium text-[14px] leading-[140%] tracking-[1px] mb-1 text-[#FD550A]">
                  Core Team
                </h3>
                <h2
                  className={`${sourceSerif.className} font-bold text-[#01286D] text-[36px] sm:text-[42px] leading-[110%] tracking-[1px] mb-2`}
                >
                  Leadership
                </h2>
                <p className="font-normal text-[#666666] text-[14px] leading-[160%] max-w-xl">
                  Four directors accountable for engineering, commercial,
                  financial and operational delivery on every project.
                </p>
              </div>
            </AnimatedSection>

            {/* 2x2 Seamless Grid Without Outer/Card Shadows and Borders */}
            <StaggerContainer
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-none shadow-none"
              staggerDelay={0.2}
            >
              {/* Card 01 - Dark Blue */}
              <motion.div
                variants={staggerItemVariants}
                className="bg-[#01286D] text-white p-8 sm:p-10 relative flex flex-col justify-between min-h-[260px]"
              >
                <div className="absolute right-6 -top-4 sm:-top-6 pointer-events-none select-none">
                  <span
                    className={montserrat.className}
                    style={{
                      fontWeight: 900,
                      fontStyle: "normal",
                      fontSize: "90px",
                      lineHeight: "192%",
                      letterSpacing: "0.01em",
                      textAlign: "justify",
                      verticalAlign: "middle",
                      color: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    01
                  </span>
                </div>
                <div className="z-10 max-w-[280px]">
                  <span className="inline-block px-3 py-1 bg-[#FD550A] text-white font-semibold text-[11px] tracking-[0.5px] uppercase rounded-[2px] mb-5">
                    Chief Executive Officer
                  </span>
                  <h3
                    className={`${sourceSerif.className} font-bold text-[26px] sm:text-[30px] leading-[115%] text-white`}
                  >
                    Muhammad Tariq <br /> Khan
                  </h3>
                </div>
                <div className="w-[140px] h-[4px] bg-[#FD550A] mt-6 z-10" />
              </motion.div>

              {/* Card 02 - Clean Light Background (No Border, No Shadow) */}
              <motion.div
                variants={staggerItemVariants}
                className="bg-transparent p-8 sm:p-10 relative flex flex-col justify-between min-h-[260px] border-none shadow-none outline-none"
              >
                <div className="absolute right-6 bottom-[-20px] pointer-events-none select-none">
                  <span
                    className={montserrat.className}
                    style={{
                      fontWeight: 900,
                      fontStyle: "normal",
                      fontSize: "90px",
                      lineHeight: "192%",
                      letterSpacing: "0.01em",
                      textAlign: "justify",
                      verticalAlign: "middle",
                      color: "rgba(1, 40, 109, 0.15)",
                    }}
                  >
                    02
                  </span>
                </div>
                <div className="z-10 max-w-[320px]">
                  <span className="block text-[#FD550A] font-semibold text-[13px] tracking-[0.5px] uppercase mb-2">
                    Director Commercial
                  </span>
                  <h3
                    className={`${sourceSerif.className} font-bold text-[22px] xs:text-[26px] sm:text-[30px] md:text-[34px] leading-[115%] text-[#01286D] whitespace-normal sm:whitespace-nowrap`}
                  >
                    Rana Muhammad Hamad
                  </h3>
                </div>
              </motion.div>

              {/* Card 03 - Clean Light Background (No Border, No Shadow) */}
              <motion.div
                variants={staggerItemVariants}
                className="bg-transparent p-8 sm:p-10 relative flex flex-col justify-between min-h-[260px] border-none shadow-none outline-none"
              >
                <div className="absolute left-1 sm:left-2 bottom-[6px] pointer-events-none select-none">
                  <span
                    className={montserrat.className}
                    style={{
                      fontWeight: 900,
                      fontStyle: "normal",
                      fontSize: "90px",
                      lineHeight: "192%",
                      letterSpacing: "0.01em",
                      textAlign: "justify",
                      verticalAlign: "middle",
                      color: "rgba(1, 40, 109, 0.15)",
                    }}
                  >
                    03
                  </span>
                </div>
                <div className="z-10 w-full -ml-2 sm:-ml-4">
                  <span className="block text-[#FD550A] font-semibold text-[13px] tracking-[0.5px] uppercase mb-2">
                    Director Finance
                  </span>
                  <h3
                    className={`${sourceSerif.className} font-bold text-[30px] sm:text-[34px] leading-[115%] text-[#01286D]`}
                  >
                    Muhammad Rashid Khan
                  </h3>
                </div>
              </motion.div>

              {/* Card 04 - Dark Blue */}
              <motion.div
                variants={staggerItemVariants}
                className="bg-[#01286D] text-white p-8 sm:p-10 relative flex flex-col justify-between min-h-[260px]"
              >
                <div className="absolute left-6 top-6 pointer-events-none select-none">
                  <div className="absolute left-2 -top-8 sm:-top-10 pointer-events-none select-none">
                    <span
                      className={montserrat.className}
                      style={{
                        fontWeight: 900,
                        fontStyle: "normal",
                        fontSize: "90px",
                        lineHeight: "192%",
                        letterSpacing: "0.01em",
                        textAlign: "justify",
                        verticalAlign: "middle",
                        color: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      04
                    </span>
                  </div>
                </div>
                <div className="z-10 ml-auto text-right max-w-[320px] w-full">
                  <span className="inline-block px-3 py-1 bg-[#FD550A] text-white font-semibold text-[11px] tracking-[0.5px] uppercase rounded-[2px] mb-5">
                    Operations & Technical
                  </span>
                  <h3
                    className={`${sourceSerif.className} font-bold text-[30px] sm:text-[34px] leading-[115%] text-white`}
                  >
                    Muhammad Maaz Ahsan
                  </h3>
                </div>
                <div className="w-[140px] h-[4px] bg-[#FD550A] mt-6 ml-auto z-10" />
              </motion.div>
            </StaggerContainer>

            {/* Bottom Text Footer */}
            <AnimatedSection direction="up" delay={0.3}>
              <div className="mt-12 pl-4 border-l-4 border-[#FD550A]">
                <p className="font-normal text-[#555555] text-[13.5px] sm:text-[14px] leading-[170%] max-w-3xl">
                  With an established client base and successful operations
                  under DES, we are now expanding our <br />
                  capabilities through DAIS — a new identity designed to serve
                  clients while building on enhanced <br />
                  technical expertise and our team.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Section 7: Industries We Serve */}
      <section className="w-full bg-white py-20">
        <div className="w-full px-6 xl:px-10">
          <div className="xl:ml-24 xl:mr-24">
            <AnimatedSection direction="up">
              <div className="mb-12">
                <h3 className="font-medium text-[14px] leading-[140%] tracking-[2px] mb-2 text-[#FD550A]">
                  Industry Coverage
                </h3>
                <h2
                  className={`${sourceSerif.className} font-bold text-[#01286D] text-[38px] leading-[110%] tracking-[2%] mb-3`}
                >
                  Industries We Serve
                </h2>
                <div className="mb-4">
                  <Image
                    src="/images/about/barline.png"
                    alt="Divider"
                    width={70}
                    height={4}
                  />
                </div>
                <p className="font-normal text-[#434343] text-[14px] leading-[175%] max-w-3xl">
                  DAIS supports industries where equipment safety, operational
                  continuity, accurate <br /> measurement, regulatory
                  compliance, and asset reliability are critical.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              staggerDelay={0.15}
            >
              {[
                {
                  title: "Energy & Process Industries",
                  items: [
                    "Oil & Gas",
                    "Petrochemical Plants",
                    "Fertilizer & Chemical Industries",
                    "Power Generation",
                    "Energy Infrastructure",
                  ],
                },
                {
                  title: "Manufacturing & Production",
                  items: [
                    "Manufacturing Industries",
                    "Industrial Processing Facilities",
                    "Food & Beverage Industry",
                    "Pharmaceutical & Healthcare Industry",
                  ],
                },
                {
                  title: "Infrastructure & Utilities",
                  items: [
                    "Cement & Construction Industry",
                    "Water & Wastewater Facilities",
                  ],
                },
              ].map((industry) => (
                <motion.div
                  key={industry.title}
                  variants={staggerScaleVariants}
                  className="card-hover bg-[#E9F3FF] rounded-xl p-6 flex flex-col h-full min-h-[250px] border border-[#43434326]"
                >
                  <h3
                    className={`text-[#01286D] font-bold text-lg mb-2 ${sourceSerif.className}`}
                  >
                    {industry.title}
                  </h3>
                  <Image
                    src="/images/home/lowerboarder.png"
                    alt=""
                    width={40}
                    height={3}
                    className="mb-4"
                  />
                  <ul className="space-y-2">
                    {industry.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[#434343] text-[13px] leading-relaxed"
                      >
                        <Image
                          src="/images/home/dot.png"
                          alt=""
                          width={6}
                          height={6}
                          className="mt-1.5 flex-shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Section 8: Sublime Family of Dolphin */}
      <section
        className={`w-full bg-white py-16 pt-2 flex items-center ${montserrat.className}`}
      >
        <div className="w-full px-6 xl:px-10 xl:mx-24">
          <AnimatedSection direction="up">
            <p className="text-[#FD550A] font-medium text-sm mb-2">
              Trusted Partner in Asset Integrity
            </p>
            <h2
              className={`text-[#01286D] font-bold text-3xl sm:text-4xl mb-4 ${sourceSerif.className}`}
            >
              Sublime Family of Dolphin
            </h2>
            <Image
              src="/images/home/upperboarder.png"
              alt=""
              width={60}
              height={3}
              className="mb-4"
            />
            <p className="text-[#434343] text-[13px] sm:text-[14px] mb-8">
              A selection of organisations served across energy, process,
              manufacturing and <br /> infrastructure sectors.
            </p>
          </AnimatedSection>

          <div className="flex flex-col gap-8 w-full -ml-4 sm:-ml-6">
            {[
              [1, 2, 3, 4, 5, 6, 7, 8, 9],
              [10, 11, 12, 13, 14, 15, 16, 17],
              [18, 19, 20, 21, 22, 23, 24, 25, 26],
              [27, 28, 29, 30, 31, 32, 33, 34, 35],
              [36, 37, 38, 39, 40, 41, 42, 43, 44],
              [45, 46, 47, 48, 49, 50, 51, 52, 53],
              [54, 55, 56, 57, 58, 59, 60],
            ].map((row, rowIndex) => {
              const isLastRow = rowIndex === 6;
              const isLastThreeRows = rowIndex >= 4;
              return (
                <StaggerContainer
                  key={`row-${rowIndex}`}
                  className={`flex flex-wrap items-center w-full gap-y-4 ${
                    isLastRow ? "justify-start gap-x-4 sm:gap-x-6" : ""
                  } ${isLastThreeRows ? "ml-3 sm:ml-4" : ""}`}
                  staggerDelay={0.02}
                >
                  {row.map((num) => (
                    <motion.div
                      key={`logo-${num}`}
                      variants={staggerFadeVariants}
                      whileHover={{ scale: 1.12 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className={`flex items-center justify-center h-[50px] sm:h-[60px] md:h-[70px] cursor-pointer ${
                        isLastRow
                          ? "w-[80px] sm:w-[100px] md:w-[110px]"
                          : "w-[60px] sm:w-[80px] md:flex-1 md:w-auto px-1 md:px-2"
                      }`}
                    >
                      <Image
                        src={`/images/home/logo${num}.png`}
                        alt={`Partner logo ${num}`}
                        width={90}
                        height={50}
                        className="object-contain w-full h-full transition-all duration-300"
                      />
                    </motion.div>
                  ))}
                </StaggerContainer>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
