import React from "react"

import HeroSection from "../sections/HeroSection"
import AboutSection from "../sections/About"
import ProductsSection from "../sections/Products"
import WorkshopsSection from "../sections/WorkshopsEvents"
import SubscriptionsSection from "../sections/Subscriptions"
import BlogSection from "../sections/Blog"
import ContactSection from "../sections/Contact"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WorkshopsSection />
      <SubscriptionsSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}