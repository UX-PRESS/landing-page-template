import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import Button from './components/ui/button'

export default function App() {
   return (
    <>
      <Header />
      <Main>
        <h1>Hello World</h1>
        <Button>Click me</Button>
        {/* Aqui entram as seções (Hero, About, etc.) */}
      </Main>
      <Footer />
    </>
  )
}