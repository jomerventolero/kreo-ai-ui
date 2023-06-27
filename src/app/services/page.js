"use client"
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ServicesPage from '@/components/ServicesPages';
import Image from 'next/image';

const services = () => {
  const services = [
    {
      title: 'Image Generation',
      description: 'Transform your text inputs into stunning and realistic images using state-of-the-art machine learning algorithms.',
    },
    {
      title: 'Customization',
      description: 'Tailor the generated images to your specific needs by adjusting various parameters and styles.',
    },
    {
      title: 'Support',
      description: 'Receive dedicated support and assistance throughout the image generation process to ensure a smooth experience.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full pt-8 pb-8">
      <Navbar />
      <ServicesPage />
      <div className="flex flex-col justify-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-row px-8 pb-8"
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col justify-start self-center items-center">
            <h1 className="font-semibold text-2xl text-violet-500">Image Generation</h1>
            <p className="px-44 text-center">Transform your text inputs into stunning and realistic images using state-of-the-art machine learning algorithms.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Image src="/photo5.jpeg" width={500} height={500} className="rounded-lg"/>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-row px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Image src="/photo9.jpeg" width={500} height={500} className="rounded-lg"/>
            <code className="">Prompt: studio ghibli, aesthetic, rendering, forest, swamp, scatter lighting, volumetrics, (masterpiece), best quality, (detailed)</code>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col justify-start self-center items-center"
          >
            <h1 className="font-semibold text-2xl text-violet-500">Customization</h1>
            <p className="px-24 py-2 text-center">Tailor the generated images to your specific needs by adjusting various parameters and styles.</p>
            <Image src="/photo10.png" width={300} height={300} className="rounded-lg"/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default services;
