import React from "react"

export default function BlogSection() {
  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 py-16 text-[#5D715A]">
      <h2 className="text-3xl font-serif mb-6">Stories from the wild.</h2>
      <p className="max-w-3xl font-sans text-lg leading-relaxed">
        From tips on sustainable living to behind-the-scenes peeks at our workshop, the Willow & Wild blog shares stories that nurture a slower, more mindful way of life.
      </p>
      <ul className="list-disc list-inside space-y-2 font-sans text-lg max-w-3xl mt-4">
        <li>The Benefits of Natural Skincare</li>
        <li>How a Candle is Made — Behind the Scenes</li>
        <li>Why Supporting Local Matters</li>
        <li>A Weekend in Kinsale: Local Tips & Trails</li>
      </ul>
      <button className="mt-6 px-4 py-2 bg-[#5D715A] text-white rounded hover:bg-[#7B5E57] transition">Read the Blog</button>
    </section>
  )
}
