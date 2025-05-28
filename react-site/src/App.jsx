import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import HomePage from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Main>
        <HomePage />
      </Main>
      <Footer />
    </>
  )
}

export default App
