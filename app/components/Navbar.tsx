import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto py-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="logo"
              width={200}
              height={200}
              className="object-cover w-40 h-40"
            />
          </Link>
        </div>
        <p></p>
      </div>
    </nav>
  );
}
