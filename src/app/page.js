"use client";
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute left-48 top-48 rounded-xl z-10"
      >
        <h1 className="text-4xl font-bold glass-text text-left mb-8 leading-snug">
          Generate <br/>Images from <br/>Text. 
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute right-1/2 top-48 rounded-xl"
      >
        <Image src="/photo1.jpeg" width={180} height={260} className='rounded-xl' />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute right-96 top-44 rounded-xl"
      >
        <Image src="/photo4.jpeg" width={180} height={260} className='rounded-xl'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-32 left-1/2 rounded-xl"
      >
        <Image src="/photo6.jpeg" width={180} height={260} className='rounded-xl'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-96 right-98 rounded-xl"
      >
        <Image src="/photo7.jpeg" width={180} height={260} className='rounded-xl'/>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute top-80 left-96 rounded-xl"
      >
        <Image src="/photo8.jpg" width={180} height={260} className='rounded-xl'/>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-10 mb-16 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://3b2d-45-194-11-194.ngrok-free.app/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold transition-transform group-hover:translate-x-1 motion-reduce:transform-none`}>
            GENERATE
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 hover:text-md`}>
            Generate AI Images from your text input.
          </p>
        </a>
      </motion.div>
    </main>
  );
}
