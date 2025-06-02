import React, { useState, useRef } from "react"

export default function HeroSection() {
  const videos = [
    "/src/assets/hero_video.mp4",
    "src/assets/hero_video2.mp4",
    
  ]

  const [currentVideo, setCurrentVideo] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const videoRef = useRef(null)

  const handleVideoEnd = () => {
    setIsFading(true)

    setTimeout(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
      setIsFading(false)
    }, 1000) // Duration of fade transition in ms
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-[#F5F1EA] overflow-hidden">
      {/* 🔁 Video Background */}
      <video
        ref={videoRef}
        key={videos[currentVideo]} // forces React to reload video element
        autoPlay
        loop={false}
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔒 Overlay (optional) */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">
          Welcome to Willow & Wild
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto font-sans mb-6">
          An artisanal retreat in the heart of Kinsale — where handcrafted goods
          meet the wild charm of Ireland’s coast.
        </p>
        <div className="space-x-4">
          <a
            href="#products"
            className="inline-block bg-[#5D715A] text-white px-6 py-3 rounded hover:bg-[#7B5E57] transition"
          >
            → Shop Now
          </a>
          <a
            href="#about"
            className="inline-block border border-white px-6 py-3 rounded hover:bg-white hover:text-[#5D715A] transition"
          >
            → Meet the Makers
          </a>
        </div>
      </div>
    </section>
  )
}