'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="flex mx-auto justify-center text-center items-center border-t border-blue font-open text-gray-300 font-bold py-4">
      Copyright © 2021 <span className='text-thorium flex mx-1.5'>Thorium</span> All rights reserved.
    </footer>
  );
}
