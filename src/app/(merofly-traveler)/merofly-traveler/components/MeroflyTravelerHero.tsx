"use client";

import Image from "next/image";
import type React from "react";

const MeroflyTravelerHero = () => {
  return (
    <main className="relative h-[110vh]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/traveler-hero.jpg"
          alt="Delivery service background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl px-4 md:px-0 mx-auto flex flex-col justify-center gap-y-10 items-start">
        hii
      </div>
    </main>
  );
};

export default MeroflyTravelerHero;
