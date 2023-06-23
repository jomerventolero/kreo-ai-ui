import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <main className="p-8">
      <section className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-600 rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">DDPM Image Generation</h2>
            <p className="text-gray-300">
              Our services include generating high-quality images from text inputs using DDPM machine learning algorithm.
              DDPM utilizes deep neural networks and density estimation to create realistic and visually appealing images.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-600 rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Conditional Generation</h2>
            <p className="text-gray-300">
              With our DDPM model, we can generate images that are conditioned on specific text inputs. Simply provide
              a descriptive text, and our algorithm will generate an image that aligns with the provided description.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-600 rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Customization and Post-Processing</h2>
            <p className="text-gray-300">
              We offer customization options and post-processing techniques to further enhance and refine the generated
              images. Additional filters and neural networks can be applied to meet specific quality or constraint requirements.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
