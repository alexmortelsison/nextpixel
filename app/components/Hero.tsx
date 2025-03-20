export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-8xl font-extrabold w-[1000px] mx-auto tracking-tighter">
            Next-Level Web Design - Built to{" "}
            <span className="text-cyan-400">Impress</span>
          </h1>
          <p className="text-gray-400 text-xl mt-4 w-[600px] tracking-tight">
            At NextPixel, we combine thoughtful design with smart technology to
            create websites that are not only visually stunning but also highly
            effective.
          </p>
        </div>

        <video
          src={"/hero.mp4"}
          width={1000}
          height={1000}
          className="object-cover ml-62 w-150 h-150"
          loop
          muted
          autoPlay={true}
        />
      </div>
    </div>
  );
}
