import React from 'react';
import NavBar from './Navbar';
import Footer from './FooterSection';
import Hero from './HeroSection';
import AppSection from './AppSection';
import CardSection from './CardSection';

const App = () => (
  <div>
    <NavBar />
    <Hero />
    <AppSection />
    <CardSection />
    <Footer />
  </div>
);

export default App;
