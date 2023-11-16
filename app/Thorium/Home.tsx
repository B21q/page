'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="h-screen justify-center items-center text-center flex flex-col mx-4 md:mx-8 lg:mx-32 xl:mx-32">
      <div className="grid grid-cols-1 lg:grid-cols-1">
        <section className="flex flex-col">
          <span className="flex mx-auto pb-4">
            <Image
              alt='thorium logo'
              src={'/thorium.svg'}
              width={105}
              height={105}
              quality={100}
            />
          </span>
          <p
            translate="no"
            className="text-5xl lg:text-7xl font-bold font-manrope text-gray-50"
          >
            Thorium
          </p>
          <h1 className=" text-gray-100 text-2xl lg:text-2xl font-sora">
            The fastest browser on Earth.
          </h1>
          <h2 className="font-open text-lg text-gray-300 py-2">
            An enhanced version of Chromium designed for exceptional
            performance.
          </h2>

          <Link href="/Downloads">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-thorium w-max p-2.5 flex mx-auto font-open font-bold my-2 rounded-sm text-lg text-bg"
            >
              Download Thorium
            </motion.div>
          </Link>
        </section>

        <section className="hidden flex-col gap-2 font-open">
          <p className="font-marope text-2xl font-bold">Highlights</p>
          <span>
            Compiler optimizations include SSE4.2, AVX, AES, and modifications
            to CFLAGS, LDFLAGS, thinLTO flags, import_instr_limit flags, and
            PGO, as well as other compiler flags.
          </span>
          <span>LLVM LOOP optimizations as -mllvm flags</span>
          <span>
            Learn more about these compiler optimizations and how they work
            Here.
          </span>
          <span>
            UI Changes and Patches for Linux and Windows that fix bugs, enhance
            useability, and strengthen privacy/security.
          </span>
        </section>
      </div>
    </main>
  );
}
