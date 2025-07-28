import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReviewStats from './components/Review';
import CarCards from './components/CarCards';
import Why from './components/Why';
import Clients from './components/Clients';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ReviewStats />
      <CarCards />
      <Why />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;