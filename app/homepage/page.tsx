import React from "react";

export default function HomePage() {
  return (
    <div className="relative h-[100vh] w-screen inset-0 overflow-hidden">
      <div className="absolute bg-gradient-to-b from-black/50 via-20% to-black/50 inset-0 z-20"></div>
      <div className="absolute inset-0 z-10">
        <video src="/npsl.mp4" autoPlay muted playsInline loop />
      </div>
      <div className="flex justify-center items-center z-30 inset-0 absolute font-righteous">
        <h1 className="text-[200px] text-purple-500">NextPixel Design </h1>
      </div>
    </div>
  );
}
