import React from "react"

export default function WorkshopsSection() {
  return (
    <section id="workshops" className="max-w-6xl mx-auto px-6 py-16 text-[#5D715A]">
      <h2 className="text-3xl font-serif mb-6">Create with your hands. Connect with your heart.</h2>
      <p className="max-w-3xl font-sans text-lg leading-relaxed">
        Join our seasonal workshops in candle-making, soap blending, and natural crafts — hosted by master artisans in a cozy and inspiring setting.
        These are hands-on, family-friendly experiences designed to spark creativity and connection.
      </p>
      <p className="max-w-3xl font-sans text-lg leading-relaxed mt-4">
        We also host small community gatherings and pop-up events throughout the year — from poetry readings to nature walks.
      </p>
      <div className="mt-6 space-x-4">
        <button className="px-4 py-2 bg-[#5D715A] text-white rounded hover:bg-[#7B5E57] transition">See Upcoming Events</button>
        <button className="px-4 py-2 bg-[#5D715A] text-white rounded hover:bg-[#7B5E57] transition">Book a Workshop</button>
      </div>
    </section>
  )
}
