import Image from "next/image";
import { Source_Serif_4, Montserrat } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
  return (
    <footer className={`w-full bg-[#01286D] text-white ${montserrat.className}`}>
{/* Top CTA Bar */}
<div className="flex flex-wrap justify-between items-center gap-4 px-6 xl:px-10 py-12 border-b border-[#FFFFFF33] bg-[linear-gradient(270.1deg,#0F2D5D_12.8%,#113978_45.26%,#0F2D5D_79.77%)]">
  <div className="flex items-center gap-3 xl:ml-24">
    <Image
      src="/images/footer/trust.png"
      alt="Trust"
      width={28}
      height={28}
      unoptimized
      quality={100}
    />

    <div>
      <h3 className={`text-lg sm:text-2xl font-bold ${sourceSerif.className}`}>
        Trusted engineering support for safer operations
      </h3>

      <p className="text-xs sm:text-sm text-[#FFFFFF] mt-1">
        Technical Expertise | Safety | Accuracy | Reliability | Quality
      </p>
    </div>
  </div>

  <a
    href="/quote"
    className="flex items-center gap-4 bg-[linear-gradient(269.77deg,#FF6221_3.66%,#D9480D_116.34%)] text-white text-[12px] font-semibold px-5 py-3 rounded-lg xl:mr-24 hover:opacity-90 transition whitespace-nowrap"
  >
    REQUEST A QUOTE
    <Image
      src="/images/footer/arrow.png"
      alt="Arrow"
      width={4}
      height={4}
      unoptimized
      quality={100}
    />
  </a>
</div>

      {/* Main Footer Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 xl:px-[136px] pt-10 pb-24 bg-[linear-gradient(330.07deg,#0F2D5D_31.94%,#133772_150.32%)]">
        {/* Column 1 - About */}
        <div>
          <h4 className={`text-xl font-bold ${sourceSerif.className}`}>Dolphin Asset Integrity Solutions</h4>
          <p className="text-[#FD550A] text-[12px] font-medium mt-2 tracking-[0.10em]">
            Ensuring Safety, Integrity, and Reliability
          </p>
          <p className="text-[11px] text-[#FFFFFF] mt-3 leading-relaxed">
            Engineering and asset integrity services ensuring the safety,
            integrity and reliability of industrial assets — inspection,
            calibration, testing and training.
          </p>
        </div>

        {/* Column 2 - Service Domains */}
        <div className="lg:ml-20">
          <h4 className={`text-xl font-bold ${sourceSerif.className}`}>Service Domains</h4>
          <ul className="mt-3 flex flex-col gap-3 text-xs text-[#FFFFFF]">
            <li>Inspection &amp; Integrity Assessment</li>
            <li>Calibration Services</li>
            <li>Testing Services</li>
            <li>Training Services</li>
          </ul>
        </div>

        {/* Column 3 - Head Office */}
        <div>
          <h4 className={`text-xl font-bold ${sourceSerif.className}`}>Head Office</h4>
          <div className="mt-3 flex flex-col gap-5 text-xs text-[#FFFFFF]">
            <div className="flex items-start gap-2">
              <Image
                src="/images/footer/location.png"
                alt="Location"
                width={12}
                height={12}
                className="mt-0.5"
              />
              <span>
                First Floor, Plaza No. 29 Broadway, Paragon Housing Society,
                Barki Road, Lahore, Pakistan.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/images/footer/phone1.png"
                alt="Phone"
                width={16}
                height={16}
              />
              <span>+92 4235305335</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/images/footer/phone2.png"
                alt="Phone"
                width={16}
                height={16}
              />
              <span>+92 300 6624494</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/images/footer/email.png"
                alt="Email"
                width={16}
                height={16}
              />
              <span>info@dolphinais.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/images/footer/internet.png"
                alt="Website"
                width={16}
                height={16}
              />
              <span>dolphinais.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-wrap justify-between items-center gap-3 px-6 xl:px-[136px] pt-6 pb-4 border-t border-[#FFFFFF33] bg-[linear-gradient(330.07deg,#0F2D5D_31.94%,#133772_150.32%)] text-xs text-[#FFFFFF]">
        <p>© 2026.Dolphin Asset Integrity Solutions (Private) Limited-All rights reserved.</p>
        <p>Inspection | Calibration | Testing | Training</p>
      </div>
    </footer>
  );
}