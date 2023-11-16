'use client';

import Image from 'next/image';

import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { BiSolidLock } from 'react-icons/bi';
import { IoSpeedometerOutline } from 'react-icons/io5';
import Toggle from './Toggle';

export default function About() {
  return (
    <main>
      <What />
      <Why />
      <Features />
      <Collaborators />
    </main>
  );
}

export function What() {
  return (
    <main className="flex flex-col justify-center mx-4 h-max lg:h-screen md:mx-8 lg:mx-20 xl:mx-20 ">
      <div className="grid grid-cols-1 gap-24 lg:grid-cols-2 lg:gap-32 font-open">
        <section className="flex flex-col justify-between">
          <p className="text-lg font-medium text-gray-200 font-sora">
            What is <span translate="no">Thorium</span>?
          </p>
          <span className="pt-8 pb-4 text-5xl sm:pt-8 sm:pb-4 lg:hidden xl:hidden text-thorium">
            <IoSpeedometerOutline />
          </span>
          <h1 className="py-3 mr-16 text-2xl font-semibold font-poppins">
            Thorium is a fork of Chromium, but with improved and more powerful
            performance.
          </h1>
          <h2 className="font-open">
            The difference is the absence of the 'bloat' of features typical of
            Google products, providing a faster and more efficient experience
            for users who want an alternative to the standard browser.
          </h2>
          <motion.a
            target="_blank"
            whileHover={{ scale: 1.1 }}
            href=""
            className="flex gap-1 mt-10 text-lg font-open text-thorium w-max"
          >
            Become a contributor now!{' '}
            <span className="items-center mb-1 lg:flex">
              <FaArrowRight />
            </span>
          </motion.a>
        </section>

        <section className="flex items-center justify-center">
          <span className="hidden lg:flex text-thorium text-9xl">
            <IoSpeedometerOutline />
          </span>

          <div></div>

          <span className="text-thorium text-8xl"></span>
        </section>
      </div>
    </main>
  );
}

export function Why() {
  return (
    <main className="flex flex-col justify-center mx-4 h-max lg:h-screen md:mx-8 lg:mx-20 xl:mx-20">
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-32 h-max">
        <section className="items-center justify-center hidden lg:flex">
          <span className="text-9xl text-thorium">
            <BiSolidLock />
          </span>
        </section>

        <section className="flex flex-col justify-normal">
          <p className="text-lg font-medium text-gray-200 font-sora">
            What is the difference between <span translate="no"> Thorium </span>
            and <span translate="no"> Chromium </span>?
          </p>
          <span className="pt-8 pb-4 text-5xl sm:pt-8 sm:pb-4 lg:hidden xl:hidden text-thorium">
            <BiSolidLock />
          </span>
          <h1 className="py-3 text-2xl font-semibold font-poppins">
            Performance, security and privacy are crucial elements for an
            effective and protected digital experience.
          </h1>
          <h2 className="font-open">
            We are firmly convinced that performance, security and privacy play
            a fundamental role in creating an effective and secure digital
            experience. These principles set us apart from Chromium.
          </h2>
          <motion.a
            target="_blank"
            whileHover={{ scale: 1.1 }}
            href=""
            className="flex items-center gap-1 mt-10 text-lg font-open text-thorium w-max"
          >
            Become a contributor now!{' '}
            <span className="flex items-center mb-1">
              <FaArrowRight />
            </span>
          </motion.a>
        </section>
      </div>
    </main>
  );
}

export function Features() {
  return (
    <main className="">
      <Toggle />
    </main>
  );
}

export function Collaborators() {
  return (
    <main className="flex flex-col justify-center h-screen mx-4 md:mx-8 lg:mx-20 xl:mx-20">
      <p className="flex mx-auto text-2xl font-extrabold font-open">
        Collaborators
      </p>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-1 mx-auto">
        <div className="flex-col lg:flex ">
          <Image
            src={'/profile.png'}
            alt="profile"
            width={205}
            height={205}
            quality={100}
          />

          <div className="flex flex-col justify-center">
            <p className="text-2xl font-bold text-gray-200 font-open">
              Owner Project
            </p>
            <h1 className="py-1 text-xl text-gray-100 font-open">
              Alexander David Frick
            </h1>
            <h2 className="flex text-lg text-gray-300 font-open">
              Currently working on Thorium Browser, ThoriumOS, Firefox, and
              Electron apps. <br /> I'm a Linux/FOSS enthusiast, as well as a
              Windows 7 enthusiast.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
