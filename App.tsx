import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import TechnicalComparison from './components/TechnicalComparison';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-sans bg-background-light">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <TechnicalComparison />
      </main>
      <Footer />
    </div>
  );
}

export default App;