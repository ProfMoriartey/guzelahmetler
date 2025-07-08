"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500); // Change dot every 500ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 sm:px-20 sm:pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[20px] row-start-2 items-center ">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Next.js logo"
          width={4800}
          height={2700}
          priority
        />
        <h1 className="text-sm/6 sm:text-6xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Generating ideas
          <span className="inline-block font-mono w-8 text-left ml-3">
            {dots}
          </span>
        </h1>
      </main>
    </div>
  );
}
