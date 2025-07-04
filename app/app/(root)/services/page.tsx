import React from "react";
// import Image from "next/image";
import { servicesData } from "@/utils/data"; // Adjust path if needed
import Footer from "@/components/Footer";
import Head from "next/head";
import SnowRemoval from "@/components/SnowRemoval";

export default function Service() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/services.jpg" />
      </Head>
      <div className="bg-gradient-to-b from-black to-gray-800 text-white">
        {/* Mobile: Simple hero, smaller height, no parallax */}
        <div
          className="flex sm:hidden relative min-h-[40vh] bg-scroll bg-center bg-cover items-center justify-start"
          style={{
            backgroundImage: 'url("/services.jpg")',
            backgroundAttachment: "scroll",
          }}
        >
          <div className="relative z-10 ml-4">
            <h1 className="text-3xl font-bold text-white text-left mb-4 drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)]">
              Our Services
              <hr />
            </h1>
          </div>
        </div>

        {/* Desktop: Parallax hero, full height */}
        <div
          className="hidden sm:flex relative min-h-screen bg-fixed bg-center bg-cover items-center justify-start"
          style={{
            backgroundImage: 'url("/services.jpg")',
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0  bg-opacity-40"></div>
          <div className="relative z-10 ml-12">
            <h1 className="text-7xl font-bold text-white text-left mb-4 drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)]">
              Our Services
              <hr />
            </h1>
          </div>
        </div>

        {/* Services Grid */}
        <div className="p-6 rounded-xl shadow-md text-center md:text-left max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {servicesData.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-2xl p-4 sm:p-6 shadow-md text-center md:text-left h-full flex flex-col w-full"
              >
                {/* <img
                loading="lazy"

                draggable="false"
                src={item.image}
                alt={item.name}
                width={120}
                height={120}
                className="object-cover w-28 h-28 rounded-full mb-4"
                /> */}
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="mb-2">{item.desription}</p>
                
              </div>
            ))}
          </div>
          <div  
          id="snow-removal"
          >
            </div>
            <SnowRemoval/>
        </div>
        <Footer />
      </div>
    </>
  );
}
