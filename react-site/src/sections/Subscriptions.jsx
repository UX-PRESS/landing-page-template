import React from "react"

export default function SubscriptionsSection() {
  return (
    <section id="subscriptions" className="max-w-6xl mx-auto px-6 py-16 text-[#5D715A]">
      <h2 className="text-3xl font-serif mb-6">Ireland in a box — delivered to your door.</h2>
      <p className="max-w-3xl font-sans text-lg leading-relaxed">
        Subscribe to our monthly Willow & Wild Box and receive a handpicked selection of local, artisanal goods — from soothing teas to handmade soaps and seasonal surprises.
        Each box is a celebration of Irish nature and craftsmanship, curated with love.
      </p>
      <ul className="list-disc list-inside space-y-2 font-sans text-lg max-w-3xl mt-4">
        <li>Monthly</li>
        <li>Seasonal (every 3 months)</li>
        <li>Gifting subscriptions</li>
      </ul>
      <button className="mt-6 px-4 py-2 bg-[#5D715A] text-white rounded hover:bg-[#7B5E57] transition">Subscribe Now</button>
    </section>
  )
}
