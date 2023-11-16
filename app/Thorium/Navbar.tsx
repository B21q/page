'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

function Navbar() {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonControls = useAnimation();

  const Show = {
    initial: { opacity: 0 },
    center: { opacity: 0.5 },
    animate: { opacity: 1 },
    transition: {
      delay: 1.5,
      delayChildren: 0.5
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const body = document.querySelector('body');
    if (body) {
      if (menuOpen) {
        body.style.overflow = 'auto'; // Habilita a rolagem novamente
      } else {
        body.style.overflow = 'hidden'; // Desabilita a rolagem
      }
    }
  };

  const handleButtonClick = () => {
    buttonControls.start({
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    });

    toggleMenu();
  };

  return (
    <nav
      ref={navbarRef}
      className="sticky top-0 z-10 shadow-md font-sora bg-bg-thorium"
    >
      <div className="items-center justify-between hidden mx-4 text-gray-100 lg:flex md:mx-8 lg:mx-8 xl:mx-8">
        <div className="flex gap-4 py-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={'/thorium.svg'}
              alt="thorium icon"
              width={25}
              height={25}
              quality={100}
            />

            <p translate="no" className="font-bold">
              Thorium
            </p>
          </Link>
          <div className="inline-block ml-16 dropdown">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center py-2 font-semibold rounded"
              animate={Show}
            >
              <span className="text-gray-200 font-open hover:text-thorium">
                Projects
              </span>
            </motion.button>

            <motion.ul
              className="absolute hidden rounded-sm shadow-md dropdown-menu centered-dropdown font-open "
              whileHover={Show}
            >
              <li className="">
                <Link href="/Sobre">
                  <motion.div
                    transition={{ type: 'spring', stiffness: 100, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-1 px-6 py-3 hover:bg-blue/50"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        alt="thorium icon"
                        src={'/mercury.png'}
                        width={25}
                        height={25}
                        quality={100}
                      />
                      Mercury
                    </div>
                    <span className="text-gray-400 font-open">
                      Firefox fork with compiler optimizations and patches from
                      Librewolf, Waterfox, and Ghostery.
                    </span>
                  </motion.div>
                </Link>
              </li>

              <li className="">
                <Link href="/Setup">
                  <motion.div
                    whileHover={{ scale: 1 }}
                    className="flex flex-col gap-1 px-6 py-3 hover:bg-blue/50"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        alt="thorium icon"
                        src={'/thorium.svg'}
                        width={25}
                        height={25}
                        quality={100}
                      />
                      ThoriumOS
                    </div>

                    <span className="text-gray-400 font-open">
                      ThoriumOS it is based on tip-o-tree, and contains the
                      compiler optimizations of Thorium applied to the whole OS.
                    </span>
                  </motion.div>
                </Link>
              </li>
            </motion.ul>
          </div>

          <Link
            href=""
            className="flex items-center font-semibold text-gray-200 font-open hover:text-thorium"
          >
            <motion.a whileHover={{ scale: 1.05 }}>Repository</motion.a>
          </Link>

          <Link
            href=""
            className="flex items-center font-semibold text-gray-200 font-open hover:text-thorium"
          >
            <motion.a whileHover={{ scale: 1.05 }}>Support</motion.a>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#"
            className="p-2 font-bold rounded-sm font-open text-thorium"
          >
            Blog
          </a>

          <Link href="/Downloads">
            <motion.div
              whileHover={{ scale: 1.09 }}
              className="bg-thorium w-max p-2.5 flex gap-1 mx-auto font-open font-bold my-2 rounded-sm text-base text-bg"
            >
              Download <span translate="no">Thorium</span>
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between py-4 mx-4 text-gray-100 lg:hidden md:mx-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={'/thorium.svg'}
            alt="thorium icon"
            width={25}
            height={25}
            quality={100}
          />

          <p translate="no" className="font-bold">
            Thorium
          </p>
        </Link>
        <motion.button
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 5.9, ease: 'easeInOut' }}
          onClick={handleButtonClick}
          className="text-3xl transition-all duration-300 focus:text-thorium focus hover:text-thorium"
          animate={buttonControls}
        >
          {menuOpen ? <BiX /> : <BiMenuAltRight />}
        </motion.button>
      </div>

      {menuOpen && (
        <section className="flex flex-col items-center justify-center h-screen text-center lg:hidden xl:hidden">
          <ul className="flex flex-col gap-10 text-xl">
            <li className="font-bold font-open">
              <a href="">Projects</a>
            </li>
            <li className="font-bold font-open">
              <a href="">Repository</a>
            </li>
            <li className="font-bold font-open">
              <a href="">Support</a>
            </li>
            <li className="font-bold font-open">
              <a href="">Blog</a>
            </li>
            <li className="p-3 font-bold rounded-sm font-open bg-thorium">
              <a href="">Dowload Thorium</a>
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
