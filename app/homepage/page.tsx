"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HomePage() {
  const bgRef = useRef(null);
  const primaryRef = useRef(null);
  const secondaryRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      y: -20,
      opacity: 1,
      duration: 0.3,
      delay: 0.2,
      ease: "power2.inOut",
    });
    gsap.to(primaryRef.current, {
      y: -20,
      opacity: 1,
      duration: 1,
      delay: 0.7,
      ease: "power2.inOut",
    });
    gsap.to(secondaryRef.current, {
      y: -20,
      opacity: 1,
      duration: 1,
      delay: 1.5,
      ease: "power2.inOut",
    });
    gsap.to(imageRef.current, {
      y: -20,
      opacity: 1,
      duration: 1,
      delay: 1.2,
      ease: "power2.inOut",
    });
    gsap.to(textRef.current, {
      x: 80,
      opacity: 1,
      duration: 1,
      delay: 1.8,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <div className="relative h-[100vh] w-screen inset-0 overflow-hidden">
      <div
        className="absolute inset-0 z-10 flex justify-center opacity-0"
        ref={bgRef}
      >
        <Image
          alt=""
          src="/background.svg"
          width={3000}
          height={3000}
          className="object-contain"
        />
      </div>
      <div
        className="absolute inset-0 z-10 flex justify-center opacity-0"
        ref={primaryRef}
      >
        <Image
          alt=""
          src="/primary.svg"
          width={3000}
          height={3000}
          className="object-contain"
        />
      </div>
      <div
        className="absolute inset-0 z-30 flex justify-center opacity-0"
        ref={secondaryRef}
      >
        <Image
          alt=""
          src="/secondary.svg"
          width={3000}
          height={3000}
          className="object-contain"
        />
      </div>

      <div
        className="absolute inset-0 z-20 flex justify-end pr-125 pt-58 opacity-0"
        ref={imageRef}
      >
        <Image
          alt=""
          src="/hands-laptop-keyboard.jpg"
          width={500}
          height={500}
          className="object-cover w-[450px] h-[450px] rounded-full"
        />
      </div>
      <div
        className="flex absolute z-40 text-black justify-start items-center inset-0 max-w-7xl w-[600px] mx-auto right-150 opacity-0 -translate-x-80"
        ref={textRef}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl font-black tracking-tighter text-orange-500">
            NextPixel Studio Labs
          </h1>
          <h2 className="text-white font-righteous text-8xl tracking-tighter pt-12">
            Next-Level Web Design
            <br /> <span className="text-6xl">Built to Impress</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
