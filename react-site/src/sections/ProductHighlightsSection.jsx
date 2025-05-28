import React from "react";
import Card from "../components/ui/Card";

export default function ProductHighlightsSection() {
  return (
    <section style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr 1fr 1fr' }}>
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
  );
}
