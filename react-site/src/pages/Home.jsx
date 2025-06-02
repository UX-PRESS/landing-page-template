import React from "react"

export default function HomePage() {
  return (
    <>
      <Section id="home" title="Home" />
      <Section id="about" title="About Us" />
      <Section id="products" title="Products" />
      <Section id="workshops" title="Workshops & Events" />
      <Section id="subscriptions" title="Subscriptions" />
      <Section id="blog" title="Blog" />
      <Section id="contact" title="Contact" />
    </>
  )
}

function Section({ id, title }) {
  return (
    <section id={id} style={{ padding: "80px 20px", borderBottom: "1px solid #ddd" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontFamily: "Playfair Display, serif", marginBottom: "16px" }}>
          {title}
        </h2>
        <p style={{ fontSize: "16px", fontFamily: "Lato, sans-serif", color: "#555" }}>
          This is a placeholder for the <strong>{title}</strong> section. You can add your content here later.
        </p>
      </div>
    </section>
  )
}