import Image from "next/image";

export default function Hero() {
  return (
    <div className="lg:max-w-[85%] mx-auto">
      <div className="lg:grid grid-cols-1 md:grid-cols-2">
        <div className="mt-2 px-12 lg:px-0">
          <h1 className="lg:text-8xl font-extrabold md:text-7xl md:pt-44 text-4xl lg:w-[1050px] mx-auto tracking-tighter font-sans text-white text-center lg:text-start">
            Next-Level Web Design - Built to{" "}
            <span className="text-[#82d8dd]">Impress.</span>
          </h1>
          <p className="text-gray-200 text-xl lg:w-[600px] tracking-tighter font-sans mt-6 text-center lg:text-start">
            At <span className="text-[#82d8dd] font-bold">NextPixel</span>, we
            combine thoughtful design with smart technology to create websites
            that are not only visually stunning but also highly effective.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#82d8dd] text-white px-8 py-2 rounded-xl mt-16 md:mt-12 shadow-md shadow-gray-600 hover:bg-[#77c5c9f6] cursor-pointer">
              Learn More.
            </button>
          </div>
        </div>

        <Image
          alt="hero"
          src={"/hero5.png"}
          width={1000}
          height={1000}
          className="object-cover 2xl:ml-55 2xl:w-185 2xl:h-185 hidden lg:flex pb-8 ml-40 w-140 h-140 -z-40 lg:mt-16 brightness-70 2xl:brightness-100 2xl:mt-0"
        />
      </div>
    </div>
  );
}
