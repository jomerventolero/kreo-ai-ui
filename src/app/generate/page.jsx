import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div>
      <motion.div
        className="px-10"
        >
        <Navbar />
      </motion.div>
      <motion.div
        className=""
        >
        Enter Prompt Here:
        <textarea id="prompt" defaultValue="studio ghibli, aesthetic, rendering, forest, swamp, scatter lighting, volumetrics, (masterpiece), best quality, (detailed)"/>
      </motion.div>
    </div>
  )
}

export default page