import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/upwardsTrees.jpg" />
      </Head>
      <div
        className="flex sm:hidden relative min-h-screen bg-scroll bg-center bg-cover items-center justify-start"
        style={{
          backgroundImage: 'url("/upwardsTrees.jpg")',
          backgroundAttachment: "scroll",
        }}
      >
        <div className="absolute inset-0 bg-opacity-40"></div>
        <div className="relative z-10 ml-4">
          <h1 className="text-3xl font-bold text-white text-left mb-4 drop-shadow-[0_4px_1px_rgba(0,0,0,0.9)]">
            Elite Tree & Snow
            <hr />
          </h1>
        </div>
      </div>

      {/* Desktop: Parallax hero, full height */}
      <div
        className="hidden sm:flex relative min-h-screen bg-fixed bg-center bg-cover items-center justify-start"
        style={{
          backgroundImage: 'url("/upwardsTrees.jpg")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0  bg-opacity-40"></div>
        <div className="relative z-10 ml-12">
          <h1 className="text-7xl font-bold text-white text-left mb-4 drop-shadow-[0_4px_3px_rgba(0,0,0,0.9)]">
            Elite Tree & Snow
            <hr />
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-black to-gray-700 text-white">
        <div className="px-4 py-8 sm:py-12"></div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center px-2 sm:px-4 pb-8 sm:pb-12 items-stretch">
          {/* Service 1 */}
          <div className="flex h-full">
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-4 rounded-2xl sm:p-6 shadow-md text-center md:text-left h-full flex flex-col  w-full">
              <Image
                loading="lazy"
                draggable="false"
                src="/layingLog.jpg"
                alt="Tree Trimming"
                width={176}
                height={176}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 176px"
                className="object-cover w-32 h-32 sm:w-44 sm:h-44 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                24 Hour Emergency Service
              </h3>
              <p className="text-justify mt-2 text-sm sm:text-base">
                Regular tree trimming improves the health, appearance, and
                safety of your trees. Our experts remove dead or overgrown
                branches, shape the canopy, and encourage healthy growth.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex h-full">
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-2xl p-4 sm:p-6 shadow-md text-center md:text-left h-full flex flex-col  w-full">
              <Image
                loading="lazy"
                draggable="false"
                src="/stumpRemoveal.jpg"
                alt="Tree Trimming"
                width={176}
                height={176}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 176px"
                className="object-cover w-32 h-32 sm:w-44 sm:h-44 rounded-full mx-auto"
              />

              <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                Stump Grinding
              </h3>
              <p className="text-justify mt-2 text-sm sm:text-base">
                Our stump grinding service removes unsightly stumps, enhancing
                your landscape&apos;s appearance and preventing pest
                infestations. We use specialized equipment to grind stumps below
                ground level, allowing for easy replanting or landscaping.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex h-full">
            <div className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-2xl p-4 sm:p-6 shadow-md text-center md:text-left h-full flex flex-col w-full">
              <Image
                loading="lazy"
                draggable="false"
                src="/hangingTree.jpg"
                alt="Tree Removal"
                width={176}
                height={176}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 176px, 176px"
                className="object-cover w-32 h-32 sm:w-44 sm:h-44 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                Tree Transplanting
              </h3>
              <p className="text-justify mt-2 text-sm sm:text-base">
                Our removal service eliminates hazardous or unwanted trees with
                care. Using professional tools, we ensure safety and efficiency
                whether it&apos;s storm damage, disease, or space clearing.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="px-2 sm:px-6 py-10 sm:py-16 text-white">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-6 sm:mb-10">
            Why Choose (Insert Company Name)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 max-w-6xl mx-auto text-base sm:text-lg font-normal">
            {/* Left Column */}
            <div className="text-justify space-y-4">
              <p>
                ✅ We deliver expert tree care with a focus on safety,
                professionalism, and customer satisfaction.
              </p>
              <p>
                ✅ Certified team handles everything from routine maintenance to
                emergency storm cleanup.
              </p>
              <p>
                ✅ Fast response, reliable service, and free estimates for every
                job.
              </p>
            </div>

            {/* Right Column */}
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md text-center md:text-left mt-6 md:mt-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                📞 Contact Us Today!
              </h3>
              <p>
                Call us, email us, or fill out our contact form. We’re ready to
                help you with reliable, affordable, and safe tree care
                solutions.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 sm:mt-16">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
