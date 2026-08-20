"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="hidden xl:flex w-full bg-[#01286D] justify-between items-center px-10 py-2">
        <div className="flex items-center ml-24">
          <Image
            src="/images/navbar/ICTT.png"
            alt="Inspection Calibration Testing Training"
            width={210}
            height={40}
            unoptimized
            quality={100}
          />
        </div>

        <div className="flex items-center gap-6 mr-24">
          <div className="flex items-center gap-1.5 text-white text-[12px]">
            <Image
              src="/images/navbar/watsapp.png"
              alt="WhatsApp"
              width={14}
              height={14}
              unoptimized
              quality={100}
            />
            <span className="whitespace-nowrap">WHATSAPP</span>
          </div>

          <div className="flex items-center gap-1.5 text-white text-[12px]">
            <Image
              src="/images/navbar/phone.png"
              alt="Phone"
              width={14}
              height={14}
              unoptimized
              quality={100}
            />
            <span className="whitespace-nowrap">+92 300 6624494</span>
          </div>

          <div className="flex items-center gap-1.5 text-white text-[12px]">
            <Image
              src="/images/navbar/email.png"
              alt="Email"
              width={14}
              height={14}
              unoptimized
              quality={100}
            />
            <span className="whitespace-nowrap">info@dolphinais.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full bg-white flex justify-between items-center px-6 xl:px-10 py-3 transition-all duration-300 ${
          scrolled ? "shadow-lg bg-white/95 backdrop-blur-sm" : "shadow-sm"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center xl:ml-24">
          <Image
            src="/images/navbar/logo.png"
            alt="Dolphin Asset Integrity Solutions"
            width={180}
            height={50}
            unoptimized
            quality={100}
            className="w-[140px] xl:w-[180px] h-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden xl:flex items-center gap-8 -ml-24 text-[12px] font-medium text-[#434343]">
          <Link href="/" className={`relative group ${pathname === "/" ? "text-[#FD550A] font-semibold" : "hover:text-[#FD550A]"} transition-colors duration-200`}>
            HOME
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#FD550A] transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>

          <Link href="/services" className={`relative group ${pathname === "/services" ? "text-[#FD550A] font-semibold" : "hover:text-[#FD550A]"} transition-colors duration-200`}>
            SERVICES
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#FD550A] transition-all duration-300 ${pathname === "/services" ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>

          <Link href="/about" className={`relative group ${pathname === "/about" ? "text-[#FD550A] font-semibold" : "hover:text-[#FD550A]"} transition-colors duration-200`}>
            ABOUT
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#FD550A] transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>

          <Link href="/why-choose-us" className={`relative group ${pathname === "/why-choose-us" ? "text-[#FD550A] font-semibold" : "hover:text-[#FD550A]"} transition-colors duration-200`}>
            WHY CHOOSE US
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#FD550A] transition-all duration-300 ${pathname === "/why-choose-us" ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>

          <Link href="/contact" className={`relative group ${pathname === "/contact" ? "text-[#FD550A] font-semibold" : "hover:text-[#FD550A]"} transition-colors duration-200`}>
            CONTACT US
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#FD550A] transition-all duration-300 ${pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`} />
          </Link>
        </div>

        {/* Request a Quote Button */}
        <div className="hidden xl:block mr-24">
          <Link
            href="/quote"
            className="flex items-center gap-2 bg-[linear-gradient(269.77deg,#FF6221_3.66%,#D9480D_116.34%)] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition animate-pulse-glow"
          >
            REQUEST A QUOTE
            <Image
              src="/images/navbar/arrow.png"
              alt="Arrow"
              width={6}
              height={6}
              unoptimized
              quality={100}
            />
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#01286D] focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown — Animated */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col px-6 py-4 space-y-4 z-50 overflow-hidden"
          >
            <Link href="/" className={pathname === "/" ? "text-[#FD550A] font-semibold" : "text-[#434343] hover:text-[#FD550A]"}>
              HOME
            </Link>
            <Link href="/services" className={pathname === "/services" ? "text-[#FD550A] font-semibold" : "text-[#434343] hover:text-[#FD550A]"}>
              SERVICES
            </Link>
            <Link href="/about" className={pathname === "/about" ? "text-[#FD550A] font-semibold" : "text-[#434343] hover:text-[#FD550A]"}>
              ABOUT
            </Link>
            <Link href="/why-choose-us" className={pathname === "/why-choose-us" ? "text-[#FD550A] font-semibold" : "text-[#434343] hover:text-[#FD550A]"}>
              WHY CHOOSE US
            </Link>
            <Link href="/contact" className={pathname === "/contact" ? "text-[#FD550A] font-semibold" : "text-[#434343] hover:text-[#FD550A]"}>
              CONTACT US
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[12px] text-[#434343]">
                  <span className="font-semibold text-[#01286D]">WhatsApp:</span> WHATSAPP
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#434343]">
                  <span className="font-semibold text-[#01286D]">Phone:</span> +92 300 6624494
                </div>
                <div className="flex items-center gap-2 text-[12px] text-[#434343]">
                  <span className="font-semibold text-[#01286D]">Email:</span> info@dolphinais.com
                </div>
              </div>
            </div>

            <div className="pt-2">
               <Link
                href="/quote"
                className="flex items-center justify-center gap-2 bg-[linear-gradient(269.77deg,#FF6221_3.66%,#D9480D_116.34%)] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition w-full animate-pulse-glow"
              >
                REQUEST A QUOTE
                <Image
                  src="/images/navbar/arrow.png"
                  alt="Arrow"
                  width={6}
                  height={6}
                  unoptimized
                  quality={100}
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
