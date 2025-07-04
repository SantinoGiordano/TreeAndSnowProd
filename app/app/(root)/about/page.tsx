"use client";
import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";


const page = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white min-h-screen flex flex-col">
      <div className="p-8 text-center animate-fade-in ">
        <div className="p-20"></div>
        <Image
          draggable="false"
          src="/headshotCropped.jpg"
          alt="Logo"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6 shadow-lg"
        />
        <h1 className="font-bold text-4xl mb-2">Anthony Mulka</h1>
        <p className="font-light text-2xl text-gray-300 mb-6">
          Owner / Operator
        </p>
        <hr className="my-6 rounded-full shadow-md w-1/2 mx-auto" />
        <p className="text-justify text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          I&apos;ve been apart of the industriy for about a decade now. I
          started in the woods doing small jobs on trees for myseslf and others,
          then branching out into larger companyies and corporations. I started
          moving around alot, starting to cut huge trees, that&apos;s when i
          really fell in love with the job. After reciving complementds for my
          work i decided to vnture of to do my own and 
          <br />
          <br />
          As a proud locally owned and operated business, we’re more than just a
          service — we’re your neighbors. We take great pride in supporting our
          community with dependable top-quality tree care and property
          maintenance.
          <br />
          <br />
          Whether it’s carefully removing a hazardous tree, grinding stumps to
          restore your yard’s beauty, or ensuring your walkways stay clear
          during the harshest winter storms, we approach every job with care,
          professionalism, and a personal touch. At the heart of our work is a
          commitment to keeping your property safe, beautiful, and
          well-maintained — all year long.
        </p>
      </div>

      <div className=" p-8 text-center animate-fade-in flex justify-center px-6 pb-12">
        <div className="bg-gradient-to-br from-gray-700 to-white-500 text-white p-6 rounded-2xl shadow-xl max-w-xl w-full text-center md:text-left">
          <h3 className="text-2xl font-bold mb-3">📞 Contact Us Today!</h3>
          <p className="text-md mb-2">
            Call us, email us, or fill out our contact form — we’re ready to
            help you with reliable, affordable, and safe tree care solutions.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Get in Touch
          </a>
          <Footer />
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default page;

