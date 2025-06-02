import React from "react"

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16 text-[#5D715A]">
      <h2 className="text-3xl font-serif mb-6">We’d love to hear from you.</h2>
      <p className="max-w-3xl font-sans text-lg leading-relaxed">
        Have a question, want to collaborate, or planning a visit to Kinsale? Reach out — we’re always happy to connect.
      </p>
      <address className="not-italic mt-6 max-w-3xl font-sans text-lg space-y-2">
        <div>📍 27 Main Street, Kinsale, County Cork, Ireland</div>
        <div>☎️ +353 (0)21 555 1234</div>
        <div>✉️ hello@willowandwild.ie</div>
      </address>

      <form className="mt-8 max-w-3xl space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          className="w-full p-2 border border-gray-300 rounded resize-none"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-[#5D715A] text-white rounded hover:bg-[#7B5E57] transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 max-w-3xl flex space-x-6 text-2xl">
        <a href="#" aria-label="Instagram" className="hover:text-[#7B5E57]">📸</a>
        <a href="#" aria-label="Pinterest" className="hover:text-[#7B5E57]">📌</a>
        <a href="#" aria-label="Facebook" className="hover:text-[#7B5E57]">📘</a>
      </div>

      {/* Placeholder for embedded map */}
      <div className="mt-8 max-w-3xl h-64 bg-gray-200 flex items-center justify-center text-gray-500">
        [Map placeholder]
      </div>
    </section>
  )
}
