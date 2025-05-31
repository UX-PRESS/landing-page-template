import React from "react"

export default function Header() {
  return (
    <header style={{ backgroundColor: "#F5F1EA", padding: "16px", borderBottom: "1px solid #ccc" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Lato, sans-serif", color: "#5D715A" }}>
           {/* Logo + Name */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img 
            src="./src/assets/logo_50x50.png" alt="Willow & Wild Logo" 
            style={{ width: "32px", height: "32px", objectFit: "contain" }} 
          />
          <span style={{ fontSize: "24px", fontWeight: "600", fontFamily: "Playfair Display, serif" }}>
            Willow & Wild
          </span>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: "flex", gap: "24px", fontSize: "16px" }}>
          <a href="#home" style={{ textDecoration: "none", color: "#5D715A" }}>Home</a>
          <a href="#about" style={{ textDecoration: "none", color: "#5D715A" }}>About</a>
          <a href="#products" style={{ textDecoration: "none", color: "#5D715A" }}>Products</a>
          <a href="#contact" style={{ textDecoration: "none", color: "#5D715A" }}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
