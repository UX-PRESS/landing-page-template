import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function HomePage() {
  return (
    <main className="p-6 md:p-12 max-w-6xl mx-auto">
      <section className="text-center space-y-4 mb-12">
        <motion.h1
          className="text-4xl md:text-6xl font-serif text-green-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Willow & Wild
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-700">
          Artisan Goods from the Heart of Southern Ireland
        </p>
        <Button className="mt-4">Explore Our Collection</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold text-green-800">Handmade Candles</h2>
            <p className="text-sm text-gray-600">
              Natural soy candles with local floral scents, hand-poured with love.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold text-green-800">Organic Teas</h2>
            <p className="text-sm text-gray-600">
              Carefully selected blends of herbs grown in the lush Irish countryside.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold text-green-800">Local Ceramics</h2>
            <p className="text-sm text-gray-600">
              Unique handmade pottery crafted by artists from County Cork.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
