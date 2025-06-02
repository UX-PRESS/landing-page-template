import React from "react"

export default function ProductsSection() {
  return (
    <section id="products" className="max-w-6xl mx-auto px-6 py-16 text-[#5D715A]">
      <h2 className="text-3xl font-serif mb-6">From soothing soy candles to hand-thrown pottery, our collections reflect the rhythm of nature and the soul of Irish artistry.</h2>
      <ul className="list-disc list-inside space-y-2 font-sans text-lg max-w-3xl">
        <li>Candles with soul – hand-poured with locally inspired scents</li>
        <li>Natural soaps – kind to your skin and the planet</li>
        <li>Herbal teas – wild, warming, and wellness-focused</li>
        <li>Art & Ceramics – crafted by local makers</li>
        <li>Textiles & Wool – soft, traditional, and timeless</li>
        <li>Preserves & Honey – small-batch goodness from nearby farms</li>
        <li>Art Prints & Postcards – snapshots of the Irish coast</li>
      </ul>
    </section>
  )
}
