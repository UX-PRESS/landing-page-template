import React from 'react';
import HomePage from './pages/Home'; 
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import FeaturesSection from './sections/FeaturesSection';

function App() {
  return (
    <>
      <Header />
      <Main>
        <HomePage/>
        <FeaturesSection />
      </Main>
      <Footer />
    </>
  );
}

export default App;
