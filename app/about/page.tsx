import { CgPlayButton } from "react-icons/cg";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto bg-none ">
      <div className="">
        <Image
          src={"/bg2.png"}
          alt="bg"
          fill
          className="-z-50 brightness-30 object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-800/20 backdrop-blur-sm p-8 rounded-2xl mx-4 md:mx-8">
        <h1 className="text-white lg:text-7xl text-5xl font-extrabold tracking-tight text-center md:text-start">
          OUR VISION
        </h1>
        <div className="text-white md:grid md:grid-cols-2 gap-x-2 items-center">
          <div>
            <Image
              src={"/logo.png"}
              alt=""
              width={300}
              height={300}
              className="object-cover w-100 h-100 hidden md:inline-grid"
            />
          </div>
          <div className="md:w-[80%] w-screen px-4 overflow-y-auto md:text-start text-center items-center justify-center mt-2">
            We specialize in building dynamic, user-friendly websites that
            enhance user engagement and drive business results. Whether
            you&apos;re a startup looking to establish an online presence or a
            well-established brand aiming to refresh your digital identity,
            we&apos;ve got you covered. Our services include:
            <ul>
              <div className="flex items-center mt-3 px-3 text-center justify-center md:justify-start space-x-4">
                <CgPlayButton />
                <li>Custom Web Design & Development</li>
              </div>
              <div className="flex items-center mt-3 px-3 text-center justify-center md:justify-start space-x-4">
                <CgPlayButton />
                <li>UI/UX Design</li>
              </div>
              <div className="flex items-center mt-3 px-3 text-center justify-center md:justify-start space-x-4">
                <CgPlayButton />
                <li>SEO & Performance Optimization</li>
              </div>
              <div className="flex items-center mt-3 px-3 text-center justify-center md:justify-start space-x-4">
                <CgPlayButton />
                <li>Ongoing Support & Maintenance</li>
              </div>
            </ul>
            <p className="mt-4">
              At NextPixel, we don&apos;t just build websites We build lasting
              relationships. We&apos;re here to help you grow your business,
              reach your goals, and elevate your digital presence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
