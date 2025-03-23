import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="flex flex-col mt-24 justify-center items-center lg:px-0">
      <h1 className="text-white text-5xl lg:text-8xl font-extrabold text-center">
        What Clients Say
      </h1>
      <div className="lg:grid lg:grid-cols-3 ">
        <div className="relative lg:px-24 p-12 flex flex-col text-center justify-center mt-12 lg:mt-24">
          <Image
            src={"/ally.png"}
            alt="ally"
            width={100}
            height={100}
            className="object-cover border-white rounded-full bg-black absolute -top-6 left-37 lg:left-65 border-[8px]"
          />
          <p className="text-white border-[5px] p-8 text-sm rounded-2xl bg-gray-800/20 backdrop-blur-sm -z-10">
            &quot;We couldn&apos;t be happier with the website created for our
            business! The design is sleek, modern, and user-friendly, and the
            functionality is beyond what I imagined.&quot;
          </p>
        </div>
        <div className="relative lg:px-24 p-12 flex flex-col text-center justify-center mt-12 lg:mt-24">
          <Image
            src={"/t2.jpg"}
            alt="ally"
            width={100}
            height={100}
            className="object-cover w-26 h-26 border-white rounded-full bg-black absolute -top-6 left-37 lg:left-65 border-[8px]"
          />
          <p className="text-white border-[5px] p-8 text-sm rounded-2xl bg-gray-800/20 backdrop-blur-sm -z-10">
            &quot;I am absolutely thrilled with the website they created for me!
            From the initial consultation to the final launch, the team was
            professional, attentive, and incredibly talented.&quot;
          </p>
        </div>
        <div className="relative lg:px-24 p-12 flex flex-col text-center justify-center mt-12 lg:mt-24">
          <Image
            src={"/t3.jpg"}
            alt="ally"
            width={100}
            height={100}
            className="object-cover w-26 h-26 border-white rounded-full bg-black absolute -top-6 left-37 lg:left-65 border-[8px]"
          />
          <p className="text-white border-[5px] p-8 text-sm rounded-2xl bg-gray-800/20 backdrop-blur-sm -z-10">
            &quot;I am beyond impressed with the website they built for me! The
            entire experience, from start to finish, was seamless. They took the
            time to listen to my needs.&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
