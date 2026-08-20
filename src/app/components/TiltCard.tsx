"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  );
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
    );

    // Glare effect follows mouse
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({
      opacity: 0.15,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
    setGlareStyle({ opacity: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transform,
        transition: "transform 0.3s ease-out",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-[10px] pointer-events-none z-10"
        style={{
          ...glareStyle,
          transition: "opacity 0.3s ease-out",
        }}
      />
    </motion.div>
  );
}
