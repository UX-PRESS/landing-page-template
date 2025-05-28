import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

export default function HeroSection() {
  return (
    <section className="text-center space-y-4 py-12 bg-gray-100">
      <motion.h1
        className="text-4xl md:text-6xl font-serif text-green-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Willow & Wild
      </motion.h1>
      <p className="text-lg md:text-xl text-gray-700">
        Artisan Goods from the Heart of Southern Ireland
      </p>
      <Button className="mt-4">Explore Our Collection</Button>
    </section>
  )
}