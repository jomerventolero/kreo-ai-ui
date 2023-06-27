"use client";
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AnimatedHeading from '@/components/AnimatedHeading';

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-4">
      <Navbar />
      <div className="max-w-4xl p-8 mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 justify-center flex flex-col items-center"
        >
          <AnimatedHeading className="text-4xl text-violet-500" headingText={'KREO IMAGINE AI'} />
          <p className="text-lg text-center">
            Welcome to my website! Here, I leverage the power of the DDPM machine learning algorithm to generate high-quality images from text inputs. This cutting-edge technology allows me to transform your descriptions and ideas into stunning visual representations. Whether you're a designer, writer, or simply someone who wants to explore the creative possibilities, I'm here to bring your imagination to life.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <AnimatedHeading className="text-4xl text-violet-500 text-center" headingText={'ABOUT ME'} />
          <p className="text-lg text-center">
            I am an independent developer based in the Philippines. Currently, I work as an IT Administrator at Bespoke Enterprise Solutions Inc. and I am also a Fullstack Developer. With my combined experience in IT administration and development, I bring a unique perspective to solving problems and creating innovative solutions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <a href="https://www.facebook.com/jomer6496">
            <img src="/profile-image.jpg" alt="Profile" className="rounded-full w-32 h-32" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <code className="text-xl">Jomer Augustin Ventolero</code>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-2">
            <path
              className="fill-current text-blue-500"
              d="M17.293 12.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4zM7 15a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0v6zm4-2a1 1 0 1 1-2 0V5a1 1 0 0 1 2 0v8zm4 2a1 1 0 1 1-2 0V7a1 1 0 0 1 2 0v8z"
            />
          </svg>
          <p className="text-lg">Location: Philippines</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-2">
            <path
              className="fill-current text-blue-500"
              d="M12 2C6.486 2 2 6.486 2 12c0 2.764 1.053 5.298 2.782 7.211L12 22l7.218-2.789C20.947 17.298 22 14.764 22 12c0-5.514-4.486-10-10-10zm0 18.313L4.687 15H9v-3h6v3h4.313L12 20.313z"
            />
            <path
              className="fill-current text-blue-500"
              d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            />
          </svg>
          <p className="text-lg">Profession: IT Administrator & Fullstack Developer</p>
        </motion.div>
      </div>
    </div>
  );
};

export default about
