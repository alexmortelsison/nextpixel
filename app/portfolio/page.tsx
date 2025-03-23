import Image from "next/image";
export default function PortfolioPage() {
  return (
    <div>
      <div className="">
        <Image
          src={"/bg2.png"}
          alt="bg"
          fill
          className="-z-50 brightness-10 object-cover"
        />
      </div>
    </div>
  );
}
