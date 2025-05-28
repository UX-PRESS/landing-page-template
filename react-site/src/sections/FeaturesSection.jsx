import React from 'react'
import Card from '../components/ui/Card'

export default function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
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
  )
}