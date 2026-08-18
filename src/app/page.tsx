import Image from "next/image";
import { Source_Serif_4, Montserrat, Inter } from "next/font/google";

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
          <p className="text-[#FD550A] font-medium text-sm sm:text-base mb-4">
            Trusted Asset Integrity &amp; Engineering Solutions
          </p>

          <h1
            className={`text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 ${sourceSerif.className}`}
          >
            Ensuring the{" "}
            <span className="text-[#FD550A]">Integrity, Safety</span> &amp;
            Reliability of Critical Industrial Assets
          </h1>

          {/* Accent border image */}
          <Image
            src="/images/home/border.png"
            alt=""
            width={80}
            height={4}
            className="mb-6"
          />

          <p className="text-[#FFFFFF] text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            We provide comprehensive inspection, testing, calibration, and
            engineering solutions that help industries enhance operational
            safety, maximize asset performance, and maintain compliance with
            international quality standards.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className={`bg-[linear-gradient(270deg,#FF6221_0%,#E04D10_111.95%)] hover:opacity-90 text-white text-[14px] font-medium px-5 py-4 rounded-md flex items-center gap-4 transition ${inter.className}`}
            >
              REQUEST A QUOTE
              <Image
                src="/images/home/arrow.png"
                alt="arrow"
                width={6}
                height={6}
              />
            </button>
            <button
              className={`border border-white text-white text-[14px] font-medium px-5 py-4 rounded-md hover:bg-white hover:text-blue-950 transition ${inter.className}`}
            >
              EXPLORE OUR SERVICES
            </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section
        className={`w-full bg-[#F4F7FA] py-8 flex items-center ${montserrat.className}`}
      >
        <div className="w-full flex flex-col md:flex-row justify-between gap-4 xl:gap-6 px-6 xl:px-10 xl:mx-24">
          {/* Card 1 */}
          <div className="bg-white rounded-md shadow-sm border border-[#43434333] p-4 flex items-center gap-4 w-full md:w-1/3">
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
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-md shadow-sm border border-[#43434333] p-4 flex items-center gap-4 w-full md:w-1/3">
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
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-md shadow-sm border border-[#43434333] p-4 flex items-center gap-4 w-full md:w-1/3">
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
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        className={`w-full bg-white py-16 flex items-center ${montserrat.className}`}
      >
        <div className="w-full px-6 xl:px-10 xl:mx-24">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div
                key={service.title}
                className="relative border border-[#43434333] rounded-md p-6 lg:pr-0 overflow-hidden flex flex-col h-full"
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
              </div>
            ))}
          </div>
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
    <p className="text-[#FD550A] font-medium text-sm mb-2">Core Values</p>
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

    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
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
        <div key={value.title}>
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
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Industries We Serve Section */}
           {/* Industries We Serve Section */}
      <section
        className={`w-full bg-white py-16 flex items-center ${montserrat.className}`}
      >
        <div className="w-full px-6 xl:px-10 xl:mx-24">
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
            continuity, accurate measurement, regulatory compliance, and
            asset reliability are critical.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div
                key={industry.title}
               className="bg-[#F4F7FC] rounded-xl p-6 flex flex-col h-full min-h-[250px] border border-[#43434326]"
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
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Why Choose DAIS Section */}
      <section
        className={`w-full bg-[#E9F3FF] py-16 flex items-center ${montserrat.className}`}
      >
        <div className="w-full px-6 xl:px-10 xl:mx-24">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <div
                key={advantage.title}
                className="bg-[#FFFFFF] rounded-xl p-6 flex flex-col h-full min-h-[250px] shadow-sm"
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
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Sublime Family of Dolphin Section */}
      <section
        className={`w-full bg-white py-16 flex items-center ${montserrat.className}`}
      >
        <div className="w-full px-6 xl:px-10 xl:mx-24">
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
            manufacturing and infrastructure sectors.
          </p>

          <div className="flex flex-wrap justify-start gap-[10px]">
            {[
              "GE",
              "PSO",
              "Engro Energy",
              "Parco",
              "Hubco",
              "Nishat",
              "Attock",
              "Total",
              "Hyundai",
              "FFC",
              "BP",
              "TUV Rheinland",
              "Veloxi",
              "Nestlé",
              "Engro Energy",
              "Shell",
              "Byco",
              "PDL",
              "Packages Group",
              "Coca-Cola",
              "Descon",
              "Rousch Pakistan",
              "Coats",
              "Style Textile",
              "TUV Austria",
              "Nimir",
            ].map((company, index) => (
              <span
                key={`${company}-${index}`}
                className="bg-white border border-[#BEBCBC] text-[#434343] px-3.5 py-1.5 rounded-[4px] text-[12px] sm:text-[13px] font-semibold flex-grow text-center"
              >
                {company}
              </span>
            ))}
            {/* Spacer to prevent the last line from stretching out of proportion */}
            <div style={{ flexGrow: 100 }}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
