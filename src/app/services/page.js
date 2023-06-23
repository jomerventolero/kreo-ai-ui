"use client"
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="max-w-4xl p-8 mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Services</h1>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-lg">{service.description}</p>
          </motion.div>
        ))}
        {/* Rest of the code... */}
      </div>
    </div>
  );
};

export default services;
