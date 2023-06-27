"use client"
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
    <div>
      <motion.div
        className="px-10 pt-4"
        >
        <Navbar />
      </motion.div>
      <form>
        <motion.div
          className="flex flex-col justify-start px-12 pt-4"
          >
          Enter Prompt Here:
          <textarea id="prompt"
            onChange={handleChange}
            className='p-2 w-1/4 h-[250px] rounded-xl text-black' defaultValue="studio ghibli, aesthetic, rendering, forest, swamp, scatter lighting, volumetrics, (masterpiece), best quality, (detailed)"/>
        </motion.div>
      </form>
    </div>
  )
}

export default page