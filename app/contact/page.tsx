import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className="px-8 lg:px-0 tracking-tight lg:mt-24 mt-12">
      <div className="bg-gray-800/20 backdrop-blur-sm px-4 border lg:px-16 pt-4 pb-16 lg:mx-44 rounded-2xl">
        <div className="lg:grid lg:grid-cols-2 text-white">
          <div className="mt-24 flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-[#82d8dd] font-extrabold text-4xl lg:text-6xl">
              Just Say Hello!
            </h1>
            <p className=" mt-8">Let us know what you need!</p>
            <div className="flex space-x-2 mt-8">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <div className="flex space-x-2 mt-2 lg:mt-4">
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
            </div>
            <div className="flex space-x-2 mt-2 lg:mt-4 w-full md:w-[60%] lg:w-[56%]">
              <Textarea placeholder="Message" />
            </div>
            <div className="mt-4 w-[100%] flex justify-center items-center lg:justify-start">
              <button className="bg-[#82d8dd] w-full md:w-[56%] px-16 py-2 rounded-full cursor-pointer hover:bg-[#82d9ddc7] lg:mt-4">
                Submit
              </button>
            </div>
          </div>
          <div className="mt-24 flex flex-col md:justify-center md:items-center lg:items-start">
            <h1 className="text-white font-extrabold text-3xl lg:text-6xl">
              Contact Information
            </h1>
            <p className="mt-8">
              Email:{" "}
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&to=nextpixelstudiolabs@gmail.com&su=Hello&body=This%20is%20a%20test%20email"
                className="underline underline-offset-2 text-[#82d8dd]"
              >
                nextpixelstudiolabs@gmail.com
              </a>
            </p>
            <p className=" mt-8">
              We are open from Monday to Saturday from 8:00 - 17:00
            </p>
            <p className=" mt-8 text-lg font-bold">Follow us:</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.instagram.com/nextpixelstudiolabs/"
                target="_blank"
              >
                <AiFillInstagram size={40} className="text-[#82d8dd]" />
              </a>
              <a
                href="https://www.instagram.com/nextpixelstudiolabs/"
                target="_blank"
              >
                <AiFillFacebook size={40} className="text-[#82d8dd]" />
              </a>
              <a
                href="https://www.instagram.com/nextpixelstudiolabs/"
                target="_blank"
              >
                <FaSquareXTwitter size={40} className="text-[#82d8dd]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
