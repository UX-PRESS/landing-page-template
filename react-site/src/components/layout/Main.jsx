import React from 'react';

export default function Main({ children }) {
  return (
    <main className="p-6 md:p-12 max-w-6xl mx-auto">
      {children}
    </main>
  );
}