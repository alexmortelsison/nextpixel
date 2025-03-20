import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Image src={"/bg.png"} alt="bg" fill className="-z-50" />
        <div className="max-w-7xl mx-auto">
          <h1 className="text-8xl font-extrabold w-[1000px] mx-auto tracking-tighter font-sans text-white">
            Next-Level Web Design - Built to{" "}
            <span className="text-[#82d8dd]">Impress.</span>
          </h1>
          <p className="text-gray-200 text-xl w-[600px] tracking-tighter font-sans mt-4">
            At <span className="text-[#82d8dd]">NextPixel</span>, we combine
            thoughtful design with smart technology to create websites that are
            not only visually stunning but also highly effective.
          </p>
          <button className="bg-[#82d8dd] text-white px-8 py-2 rounded-xl mt-12 shadow-md shadow-gray-400">
            Learn More.
          </button>
        </div>

        <Image
          alt="hero"
          src={"/hero.png"}
          width={1000}
          height={1000}
          className="object-cover ml-24 w-150 h-150"
        />
      </div>
    </div>
  );
}
