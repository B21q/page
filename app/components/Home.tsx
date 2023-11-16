import Link from "next/link";
import { motion } from 'framer-motion'
import { BiCheckboxSquare } from "react-icons/bi";


export default function Home() {
  return (
    <main className="bg-bg bg-[radial-gradient(#171518_1px,transparent_1px)] [background-size:16px_16px]">
      <main className="h-screen md:h-screen lg:h-screen xl:h-screen flex items-center justify-center mx-4 md:mx-8 lg:mx-56 xl:mx-32">
        <div className="grid grid-cols-1 lg:grid-cols-1">
          <div className="flex flex-col justify-center item-center text-center">
            <section
              translate="no"
              className="text-gray-200 text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-manrope font-semibold"
            >
              Olá, me chamo{' '}
              <span className="text-gray lg:hidden xl:hidden">
                <br />
              </span>
              Yan Santos{' '}
              <span translate="no" className="text-iblue-10">
                <span>
                  <br />
                </span>{' '}
                Front-end
              </span>{' '}
              <span translate="no" className="underline decoration-iblue-10">
                Developer{' '}
                <span>
                  <br />
                </span>
              </span>{' '}
              <h1 className="">
                <span className="text-iblue-10">&</span>{' '}
                <span className="underline decoration-iblue-10">
                  Nerd Linux
                </span>
              </h1>
            </section>

            <span className="flex gap-1 text-gray-300 font-open text-xl lg:text-xl pt-4  item-center text-center mx-auto">
              Desenvolvimento Web, Administração de Sistemas Linux e Scrum
              Master.
            </span>
            <h2 className="py-6 text-gray-50 font-open flex items-center  item-center text-center mx-auto text-base lg:text-lg">
              <span className="text-iblue-10 animate-bounce transition-all text-sm mr-1 flex items-center justify-center">
                <BiCheckboxSquare />
              </span>
              Meu último projeto:{' '}
              <Link
                href="/Thorium"
                className="flex mx-2 font-bold font text-iblue-10"
              >
                Página do Thorium.
              </Link>
            </h2>

            <div className="flex xl:flex gap-4  item-center text-center mx-auto ">
              <motion.a
                className="p-2.5 w-32 text-xl bg-white text-black rounded-sm font-open transition-all duration-75 hover:bg-iblue-10 hover:text-white"
                target="_blank"
                href="https://www.linkedin.com/in/yan-santos-7513a1244/"
                whileHover={{ scale: 1.1 }}
              >
                Linkedin
              </motion.a>

              <motion.a
                className="p-2.5 w-32 text-xl bg-white text-black rounded-sm font-open transition-all duration-75 hover:bg-iblue-10 hover:text-white"
                target="_blank"
                href="https://github.com/B21q"
                whileHover={{ scale: 1.1 }}
              >
                Github
              </motion.a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-end"></div>
        </div>
      </main>
    </main>
  );
}
