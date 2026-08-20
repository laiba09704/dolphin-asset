"use client";

import Image from "next/image";
import { Source_Serif_4, Montserrat, Inter } from "next/font/google";
import { motion } from "framer-motion";
import AnimatedSection from "./components/AnimatedSection";
import StaggerContainer, {
  staggerItemVariants,
  staggerScaleVariants,
  staggerFadeVariants,
} from "./components/StaggerContainer";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full min-h-[400px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/home/bg.png"
          alt="Industrial facility background"
          fill
          priority
          className="object-fill object-center -z-30"
        />

        {/* Rectangle overlapping fully on top of bg */}
        <Image
          src="/images/home/Rectangle.png"
          alt=""
          fill
          className="object-fill -z-20 opacity-100"
        />

        {/* Dark overlay for text readability (gradient to fade out towards center and right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-blue-950/10 to-transparent -z-10" />

        {/* Content */}
        <div
          className={`relative z-10 max-w-3xl px-6 xl:px-10 py-12 mt-8 xl:ml-24 ${montserrat.className}`}
        >
          <AnimatedSection direction="left" delay={0.1}>
            <p className="text-[#FD550A] font-medium text-sm sm:text-base mb-4">
              Trusted Asset Integrity &amp; Engineering Solutions
            </p>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.3}>
            <h1
              className={`text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 ${sourceSerif.className}`}
            >
              Ensuring the{" "}
              <span className="text-[#FD550A]">Integrity, Safety</span> &amp;
              Reliability of Critical Industrial Assets
            </h1>
          </AnimatedSection>

          {/* Accent border image */}
          <AnimatedSection direction="left" delay={0.5}>
            <Image
              src="/images/home/border.png"
              alt=""
              width={80}
              height={4}
              className="mb-6"
            />
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.6}>
            <p className="text-[#FFFFFF] text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              We provide comprehensive inspection, testing, calibration, and
              engineering solutions that help industries enhance operational
              safety, maximize asset performance, and maintain compliance with
              international quality standards.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.8}>
            <div className="flex flex-wrap gap-4">
              <button
                className={`bg-[linear-gradient(270deg,#FF6221_0%,#E04D10_111.95%)] hover:opacity-90 text-white text-[14px] font-medium px-5 py-4 rounded-md flex items-center gap-4 transition animate-pulse-glow ${inter.className}`}
              >
                REQUEST A QUOTE
                <Image
                  src="/images/home/arrow.png"
                  alt="arrow"
                  width={6}
                  height={6}
                />
              </button>
              <motion.button
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`border border-white text-white text-[14px] font-medium px-5 py-4 rounded-md hover:border-[#FD550A] hover:text-[#FD550A] hover:shadow-[0_0_20px_rgba(253,85,10,0.5)] transition-colors duration-300 ${inter.className}`}
              >
                EXPLORE OUR SERVICES
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={`w-full bg-[#F4F7FA] py-8 flex items-center ${montserrat.className}`}
      >
        <StaggerContainer
          className="w-full flex flex-col md:flex-row justify-between gap-4 xl:gap-6 px-6 xl:px-10 xl:mx-24"
          staggerDelay={0.15}
        >
          {/* Card 1 */}
          <motion.div
            variants={staggerItemVariants}
            className="card-hover bg-white rounded-md shadow-sm border border-[#43434333] p-4 flex items-center gap-4 w-full md:w-1/3"
          >
            <div className="flex-shrink-0 relative w-[40px] h-[40px] flex items-center justify-center">
              <Image
                src="/images/home/BGRectangle.png"
                alt=""
                fill
                className="object-contain"
              />
              <Image
                src="/images/home/SE.png"
                alt="Structured Engineering"
                width={20}
                height={20}
                className="object-contain relative z-10"
              />
            </div>
            <div>
              <h3
                className={`text-[#01286D] font-bold text-[14px] mb-1 ${sourceSerif.className}`}
              >
                Structured Engineering
              </h3>
              <p
                className={`text-[#434343] text-[11px] ${montserrat.className}`}
              >
                International standards &amp; practices
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={staggerItemVariants}
            className="card-hover bg-white rounded-md shadow-sm border border-[#43434333] p-4 flex items-center gap-4 w-full md:w-1/3"
          >
            <div className="flex-shrink-0 relative w-[40px] h-[40px] flex items-center justify-center">
              <Image
                src="/images/home/BGRectangle.png"
                alt=""
                fill
                className="object-contain"
              />
              <Image
                src="/images/home/OSP.png"
                alt="On-Site Capability"
                width={20}
                height={20}
                className="object-contain relative z-10"
              />
            </div>
            <div>
              <h3
                className={`text-[#01286D] font-bold text-[14px] mb-1 ${sourceSerif.className}`}
              >
                On-Site Capability
              </h3>
              <p
                className={`text-[#434343] text-[11px] ${montserrat.className}`}
              >
                Services delivered at your facility
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={staggerItemVariants}
            className="card-hover bg-white rounded-md shadow-sm border border-[#43434333] p-4 flex items-center gap-4 w-full md:w-1/3"
          >
            <div className="flex-shrink-0 relative w-[40px] h-[40px] flex items-center justify-center">
              <Image
                src="/images/home/BGRectangle.png"
                alt=""
                fill
                className="object-contain"
              />
              <Image
                src="/images/home/CT.png"
                alt="Certified Team"
                width={20}
                height={20}
                className="object-contain relative z-10"
              />
            </div>
            <div>
              <h3
                className={`text-[#01286D] font-bold text-[14px] mb-1 ${sourceSerif.className}`}
              >
                Certified Team
              </h3>
              <p
                className={`text-[#434343] text-[11px] ${montserrat.className}`}
              >
                Skilled inspection &amp; calibration engineers
              </p>
            </div>
          </motion.div>
        </StaggerContainer>
      </section>

      {/* What We Do Section */}
      <section
        className={`w-full bg-white py-16 flex items-center ${montserrat.className}`}
      >
        <div className="w-full px-6 xl:px-10 xl:mx-24">
          <AnimatedSection direction="up">
            <p className="text-[#FD550A] font-medium text-sm mb-2">
              Service Domains
            </p>
            <h2
              className={`text-[#01286D] font-bold text-3xl sm:text-4xl mb-4 ${sourceSerif.className}`}
            >
              What We Do
            </h2>
            <Image
              src="/images/home/border2.png"
              alt=""
              width={60}
              height={3}
              className="mb-4"
            />
            <p className="text-[#434343] text-[8px] sm:text-[14px] mb-10">
              Four integrated technical domains covering the full lifecycle of
              industrial asset integrity.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            staggerDelay={0.15}
          >
            {[
              {
                icon: "/images/home/inspection.png",
                number: "/images/home/01.png",
                title: "Inspection & Integrity Assessment",
                desc: "Systematic evaluation of industrial equipment, structures, and mechanical systems to determine their present condition and fitness for continued operation.",
                link: "Explore Inspection",
              },
              {
                icon: "/images/home/services.png",
                number: "/images/home/02.png",
                title: "Calibration Services",
                desc: "Verifying measuring instruments against recognized reference standards to ensure accurate, consistent, and reliable readings.",
                link: "Explore Calibration",
              },
              {
                icon: "/images/home/testing.png",
                number: "/images/home/03.png",
                title: "Testing Services",
                desc: "Verifying the strength, condition, performance, and operational safety of industrial equipment, pressure systems, pipelines, valves, cylinders, and electrical installations.",
                link: "Explore Testing",
              },
              {
                icon: "/images/home/training.png",
                number: "/images/home/04.png",
                title: "Training Services",
                desc: "Industry-focused training programs designed to strengthen technical knowledge, practical skills, workplace safety and operational awareness.",
                link: "Explore Training",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItemVariants}
                className="card-hover relative border border-[#43434333] rounded-md p-6 lg:pr-0 overflow-hidden flex flex-col h-full"
              >
                {/* Faded number in top right */}
                <Image
                  src={service.number}
                  alt=""
                  width={40}
                  height={40}
                  className="absolute top-6 right-6 lg:top-8 lg:right-8 opacity-80"
                />

                <div className="h-[54px] flex items-start">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={38}
                    height={38}
                  />
                </div>

                <h3
                  className={`text-[#01286D] font-bold text-lg mb-2 ${sourceSerif.className}`}
                >
                  {service.title}
                </h3>
                <p className="text-[#434343] text-[12px] leading-relaxed mb-6 w-full">
                  {service.desc}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#FD550A] font-medium text-sm mt-auto"
                >
                  {service.link}
                  <Image
                    src="/images/home/arrow.png"
                    alt=""
                    width={18}
                    height={18}
                  />
                </a>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative w-full py-16 overflow-hidden flex items-center">
        {/* Background Image */}
        <Image
          src="/images/home/bg33.png"
          alt=""
          fill
          className="object-cover object-center -z-20"
        />

        {/* Lines overlay on top of bg */}
        <Image
          src="/images/home/linesbg.png"
          alt=""
          fill
          className="object-cover -z-10"
        />

        <div
          className={`relative z-10 w-full px-6 xl:px-10 xl:mx-24 ${montserrat.className}`}
        >
          <AnimatedSection direction="up">
            <p className="text-[#FD550A] font-medium text-sm mb-2">
              Core Values
            </p>
            <h2
              className={`text-white font-bold text-3xl sm:text-4xl mb-4 ${sourceSerif.className}`}
            >
              The Way We Engineer
            </h2>
            <Image
              src="/images/home/border2.png"
              alt=""
              width={60}
              height={3}
              className="mb-10"
            />
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10"
            staggerDelay={0.12}
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
            ].map((value) => (
              <motion.div key={value.title} variants={staggerItemVariants}>
                <Image
                  src="/images/home/breaker.png"
                  alt=""
                  width={280}
                  height={1}
                  className="mb-4"
                />
                <h3
                  className={`text-white font-bold text-lg mb-2 ${sourceSerif.className}`}
                >
                  {value.title}
                </h3>
                <p className="text-[#FFFFFF] text-[10px] leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section
        className={`w-full bg-white py-16 flex items-center ${montserrat.className}`}
      >
        <div className="w-full px-6 xl:px-10 xl:mx-24">
          <AnimatedSection direction="up">
            <p className="text-[#FD550A] font-medium text-sm mb-2">
              Industry Coverage
            </p>
            <h2
              className={`text-[#01286D] font-bold text-3xl sm:text-4xl mb-4 ${sourceSerif.className}`}
            >
              Industries We Serve
            </h2>
            <Image
              src="/images/home/upperboarder.png"
              alt=""
              width={60}
              height={3}
              className="mb-4"
            />
            <p className="text-[#434343] text-[8px] sm:text-[14px] mb-10">
              DAIS supports industries where equipment safety, operational
              continuity, accurate measurement, regulatory compliance, and asset
              reliability are critical.
            </p>
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
      </section>

      {/* Why Choose DAIS Section */}
      <section
        className={`w-full bg-[#E9F3FF] py-16 flex items-center ${montserrat.className}`}
      >
        <div className="w-full px-6 xl:px-10 xl:mx-24">
          <AnimatedSection direction="up">
            <p className="text-[#FD550A] font-medium text-sm mb-2">
              Our Advantage
            </p>
            <h2
              className={`text-[#01286D] font-bold text-3xl sm:text-4xl mb-4 ${sourceSerif.className}`}
            >
              Why Choose DAIS
            </h2>
            <Image
              src="/images/home/upperboarder.png"
              alt=""
              width={60}
              height={3}
              className="mb-4"
            />
            <p className="text-[#434343] text-[8px] sm:text-[14px] mb-10">
              Technical expertise, structured engineering practices, and a
              strong commitment to safety and quality.
            </p>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.15}
          >
            {[
              {
                number: "/images/home/one.png",
                title: "Why Choose DAIS",
                desc: "We are supported by a highly skilled, certified, and experienced team of professionals with strong technical expertise in inspection, testing, calibration, and engineering services, ensuring precise and reliable service execution.",
              },
              {
                number: "/images/home/two.png",
                title: "Safety-Focused Approach",
                desc: "Human safety, asset protection, and operational risk reduction remain central to our service execution.",
              },
              {
                number: "/images/home/3.png",
                title: "Reliable Technical Reporting",
                desc: "Clear, accurate, and dependable technical findings support informed maintenance and operational decisions.",
              },
            ].map((advantage) => (
              <motion.div
                key={advantage.title}
                variants={staggerItemVariants}
                className="card-hover bg-[#FFFFFF] rounded-xl p-6 flex flex-col h-full min-h-[250px] shadow-sm"
              >
                <Image
                  src={advantage.number}
                  alt=""
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <h3
                  className={`text-[#01286D] font-bold text-lg mb-2 ${sourceSerif.className}`}
                >
                  {advantage.title}
                </h3>
                <p className="text-[#434343] text-[13px] leading-relaxed">
                  {advantage.desc}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sublime Family of Dolphin Section */}
      <section
             className={`w-full bg-white py-16  flex items-center ${montserrat.className}`}
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
    </main>
  );
}
