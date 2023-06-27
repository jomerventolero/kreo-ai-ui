"use client";
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'

const page = () => {
  const [formData, setFormData] = useState({
    guidance_scale: 7.0,
    height: 512,
    hypernetwork_strength: 0,
    negative_prompt: "(easynegative),(signature:1.2),(artist name:1.2),(watermark:1.2)",
    num_inference_steps: 25,
    num_outputs: 1,
    preserve_init_image_color_profile: "False",
    prompt: "studio ghibli, aesthetic, rendering, forest, swamp, scatter lighting, volumetrics, (masterpiece), best quality, (detailed)",
    sampler_name: "dpmpp_2s_a",
    seed: 3441212,
    width: 512
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='flex flex-col justify-center mx-auto'>
      <motion.div
        className="px-10 pt-4"
        >
        <Navbar />
      </motion.div>
      <form>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col justify-start px-12 pt-8"
          >
          <span className='font-sans pb-4'>Enter Prompt:</span>
          <textarea id="prompt"
            onChange={handleChange}
            className='p-2 w-1/4 h-[250px] rounded-xl text-black' defaultValue="studio ghibli, aesthetic, rendering, forest, swamp, scatter lighting, volumetrics, (masterpiece), best quality, (detailed)"/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col justify-start px-12 pt-8"
          >
          <span className='font-sans pb-4'>Negative Prompt:</span>
          <textarea id="negative_prompt"
            onChange={handleChange}
            className='p-2 w-1/4 h-[100px] rounded-xl text-black' 
            defaultValue="(easynegative),(signature:1.2),(artist name:1.2),(watermark:1.2)"
          />
        </motion.div>
      </form>
    </div>
  )
}

export default page