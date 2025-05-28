import React from "react"
//import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import Card from "../components/ui/card"
// import { Card, CardContent } from "./components/ui/card" 

export default function HomePage() {
  return (
    <main className="p-6 md:p-12 max-w-6xl mx-auto">
      <section className="text-center space-y-4 mb-12">
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

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Handmade Candles"
          description="Natural soy candles with local floral scents, hand-poured with love."
        />
        <Card
          title="Organic Teas"
          description="Carefully selected blends of herbs grown in the lush Irish countryside."
        />
        <Card
          title="Local Ceramics"
          description="Unique handmade pottery crafted by artists from County Cork."
        />
      </section>
    </main>
  )
}
