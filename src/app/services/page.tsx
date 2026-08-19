"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-start py-20 px-6 xl:px-10 overflow-hidden text-white bg-[#01286D]">
        {/* Layer 1: Base Image (img.png) */}
        <Image
          src="/images/Services/img.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Layer 2: Pattern Overlay (box.png) */}
        <div
          className="absolute inset-0 z-10 bg-repeat bg-auto opacity-70"
          style={{ backgroundImage: `url('/images/Services/box.png')` }}
        />

        {/* Layer 3: Dark Blue Gradient Overlay */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(90deg, rgba(1, 40, 109, 0.92) 0%, rgba(1, 40, 109, 0.75) 45%, rgba(1, 40, 109, 0.45) 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-30 max-w-2xl xl:ml-24">
          {/* Subheading */}
          <h3 className="text-[#FD550A] font-montserrat font-semibold text-[12px] leading-[140%] tracking-[2px] mb-2">
            Service Domains
          </h3>

          {/* Main Heading */}
          <h1 className="font-source-serif-pro font-bold text-[30px] sm:text-[34px] md:text-[44px] leading-[110%] tracking-[2%] mb-3 text-white">
            Our Services
          </h1>

          {/* Orange Line */}
          <div
            className="mb-4"
            style={{
              width: "71px",
              height: "3px",
              backgroundColor: "#FD550A",
              opacity: 1,
            }}
          />

          {/* Description Text */}
          <p className="font-montserrat font-normal text-[10px] md:text-[12px] lg:text-[14px] leading-[160%] text-white/95 max-w-lg mt-6">
            Advanced inspection, integrity assessment, calibration, testing and
            training solutions delivered through structured engineering
            practices and international standards.
          </p>
        </div>
      </section>

      {/* Choose A Service Domain Section */}
      <section className="w-full py-20 bg-white relative">
        {/* Wrapping container matching Navbar padding */}
        <div className="w-full px-6 xl:px-10">
          {/* Inner content matching Navbar left/right margins */}
          <div className="xl:ml-24 xl:mr-24">
            {/* Section Header */}
            <div className="mb-2">
              <span className="text-[#FD550A] font-montserrat font-semibold text-[11px] leading-[140%] tracking-[2px] mb-1.5 block">
                Four Domains
              </span>
              <h2 className="font-source-serif-pro font-bold text-[34px] md:text-[40px] text-[#01286D] mb-2.5">
                Choose A Service Domain
              </h2>
              {/* Orange Line */}
              <div
                className="mb-4"
                style={{
                  width: "71px",
                  height: "3px",
                  backgroundColor: "#FD550A",
                  opacity: 1,
                }}
              />
              <p className="font-montserrat font-normal text-[#4A5568] text-[13px] md:text-[14px] max-w-2xl leading-[160%]">
                Each domain has its own dedicated page covering scope,
                methodology and the specific services we deliver.
              </p>
            </div>

      {/* Cards Grid (2x2) */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-16">
  {/* Card 1: Inspection & Integrity Assessment */}
  <Link
    href="/assesement"
    className="bg-white rounded-[10px] overflow-hidden flex flex-col group cursor-pointer block hover:shadow-xl transition-shadow"
    style={{
      border: "1px solid #4343434D",
      boxShadow: "1px 3px 7.5px rgba(1, 40, 109, 0.15)",
    }}
  >
    <div>
      {/* Image Container with Badge */}
      <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden rounded-t-[10px]">
        <Image
          src="/images/services/IIA.png"
          alt="Inspection & Integrity Assessment"
          fill
          className="object-cover"
        />
        {/* Number Badge 01 */}
        <div className="absolute top-4 left-4 w-9 h-9 md:w-10 md:h-10 bg-[#FD550A] rounded-[4px] flex items-center justify-center shadow-md">
          <span className="font-source-serif-pro font-bold text-white text-[16px] md:text-[18px] leading-none">
            01
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-5 md:px-6 pt-6 md:pt-8 pb-2">
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

        <h3 className="font-source-serif-pro font-bold text-[22px] md:text-[24px] text-[#01286D] mb-1">
          Inspection & Integrity Assessment
        </h3>

        <p className="font-montserrat font-normal text-[#4A5568] text-[11px] lg:text-[11.5px] xl:text-[12px] leading-[1.6] tracking-tight mb-2 h-[36px]">
          Systematic evaluation of industrial equipment, structures,
          and mechanical systems to determine their present
          condition and fitness for continued operation.
        </p>
      </div>
    </div>

    {/* Action Link */}
    <div className="px-5 md:px-6 pb-6 md:pb-8 pt-0">
      <span className="inline-flex items-center gap-2 font-montserrat font-semibold text-[14px] text-[#FD550A] group-hover:text-[#e04a05] transition-colors">
        Explore Inspection
        <span className="text-[16px]">&rarr;</span>
      </span>
    </div>
  </Link>

  {/* Card 2: Calibration Services */}
  <Link
    href="/callibrationservices"
    className="bg-white rounded-[10px] overflow-hidden flex flex-col group cursor-pointer block hover:shadow-xl transition-shadow"
    style={{
      border: "1px solid #4343434D",
      boxShadow: "1px 3px 7.5px rgba(1, 40, 109, 0.15)",
    }}
  >
    <div>
      {/* Image Container with Badge */}
      <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden rounded-t-[10px]">
        <Image
          src="/images/services/CS.png"
          alt="Calibration Services"
          fill
          className="object-cover"
        />
        {/* Number Badge 02 */}
        <div className="absolute top-4 left-4 w-9 h-9 md:w-10 md:h-10 bg-[#FD550A] rounded-[4px] flex items-center justify-center shadow-md">
          <span className="font-source-serif-pro font-bold text-white text-[16px] md:text-[18px] leading-none">
            02
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-5 md:px-6 pt-6 md:pt-8 pb-2">
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

        <h3 className="font-source-serif-pro font-bold text-[22px] md:text-[24px] text-[#01286D] mb-1">
          Calibration Services
        </h3>

        <p className="font-montserrat font-normal text-[#4A5568] text-[11px] lg:text-[11.5px] xl:text-[12px] leading-[1.6] tracking-tight mb-2 h-[36px]">
          Verifying measuring instruments against recognized
          reference standards to ensure accurate, consistent, and
          reliable readings.
        </p>
      </div>
    </div>

    {/* Action Link */}
    <div className="px-5 md:px-6 pb-6 md:pb-8 pt-0">
      <span className="inline-flex items-center gap-2 font-montserrat font-semibold text-[14px] text-[#FD550A] group-hover:text-[#e04a05] transition-colors">
        Explore Calibration
        <span className="text-[16px]">&rarr;</span>
      </span>
    </div>
  </Link>

  {/* Card 3: Testing Services */}
  <Link
    href="/testingservices"
    className="bg-white rounded-[10px] overflow-hidden flex flex-col group cursor-pointer block hover:shadow-xl transition-shadow"
    style={{
      border: "1px solid #4343434D",
      boxShadow: "1px 3px 7.5px rgba(1, 40, 109, 0.15)",
    }}
  >
    <div>
      {/* Image Container with Badge */}
      <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden rounded-t-[10px]">
        <Image
          src="/images/services/TS.png"
          alt="Testing Services"
          fill
          className="object-cover"
        />
        {/* Number Badge 03 */}
        <div className="absolute top-4 left-4 w-9 h-9 md:w-10 md:h-10 bg-[#FD550A] rounded-[4px] flex items-center justify-center shadow-md">
          <span className="font-source-serif-pro font-bold text-white text-[16px] md:text-[18px] leading-none">
            03
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-5 md:px-6 pt-6 md:pt-8 pb-2">
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

        <h3 className="font-source-serif-pro font-bold text-[22px] md:text-[24px] text-[#01286D] mb-1">
          Testing Services
        </h3>

        <p className="font-montserrat font-normal text-[#4A5568] text-[11px] lg:text-[11.5px] xl:text-[12px] leading-[1.6] tracking-tight mb-2 h-[36px]">
          Verifying the strength, condition, performance, and
          operational safety of industrial equipment, pressure
          systems, pipelines, valves, cylinders, and electrical
          installations.
        </p>
      </div>
    </div>

    {/* Action Link */}
    <div className="px-5 md:px-6 pb-6 md:pb-8 pt-0">
      <span className="inline-flex items-center gap-2 font-montserrat font-semibold text-[14px] text-[#FD550A] group-hover:text-[#e04a05] transition-colors">
        Explore Testing
        <span className="text-[16px]">&rarr;</span>
      </span>
    </div>
  </Link>

  {/* Card 4: Training Services */}
  <Link
    href="/trainingservices"
    className="bg-white rounded-[10px] overflow-hidden flex flex-col group cursor-pointer block hover:shadow-xl transition-shadow"
    style={{
      border: "1px solid #4343434D",
      boxShadow: "1px 3px 7.5px rgba(1, 40, 109, 0.15)",
    }}
  >
    <div>
      {/* Image Container with Badge */}
      <div className="relative w-full h-[140px] md:h-[160px] overflow-hidden rounded-t-[10px]">
        <Image
          src="/images/services/TRS.png"
          alt="Training Services"
          fill
          className="object-cover"
        />
        {/* Number Badge 04 */}
        <div className="absolute top-4 left-4 w-9 h-9 md:w-10 md:h-10 bg-[#FD550A] rounded-[4px] flex items-center justify-center shadow-md">
          <span className="font-source-serif-pro font-bold text-white text-[16px] md:text-[18px] leading-none">
            04
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-5 md:px-6 pt-6 md:pt-8 pb-2">
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

        <h3 className="font-source-serif-pro font-bold text-[22px] md:text-[24px] text-[#01286D] mb-1">
          Training Services
        </h3>

        <p className="font-montserrat font-normal text-[#4A5568] text-[11px] lg:text-[11.5px] xl:text-[12px] leading-[1.6] tracking-tight mb-2 h-[36px]">
          Industry-focused training programs designed to strengthen
          technical knowledge, practical skills, workplace safety
          and operational awareness.
        </p>
      </div>
    </div>

    {/* Action Link */}
    <div className="px-5 md:px-6 pb-6 md:pb-8 pt-0">
      <span className="inline-flex items-center gap-2 font-montserrat font-semibold text-[14px] text-[#FD550A] group-hover:text-[#e04a05] transition-colors">
        Explore Training
        <span className="text-[16px]">&rarr;</span>
      </span>
    </div>
  </Link>
</div>
          </div>
        </div>
      </section>
    </div>
  );
}
