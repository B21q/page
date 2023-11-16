import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <main className="">
      <nav className="bg-bg bg-[radial-gradient(#171518_1px,transparent_1px)] [background-size:16px_16px] z-10 fixed top-0 left-0 right-0 flex items-center justify-between py-5 mx-4 md:mx-8 lg:mx-16 xl:mx-16 ">
        <div className="flex">
          <Link
            href="/"
            className="text-gray-50 hover:text-iblue-10 text-xl font-bold drop-shadow-xl"
          >
            ²B¹
          </Link>
        </div>
        <ul className="flex gap-6 text-gray-300 font-bold font-manrope">
          <li className="hover:text-iblue-10">
            <Link href="#Projetos">PROJETOS</Link>
          </li>
          <li className="hover:text-iblue-10">
            <Link href="#Contato">CONTATO</Link>
          </li>
        </ul>
      </nav>

      <nav className="hidden xl:flex xl:fixed lg:flex lg:fixed lg:bottom-2 lg:left-16 py-4">
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-white hover:text-iblue-10 text-2xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-white hover:text-iblue-10 text-2xl">
            <FaGithub />
          </a>
        </nav>
      </nav>
    </main>
  );
}
