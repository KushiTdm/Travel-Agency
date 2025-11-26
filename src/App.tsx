// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Tours } from './components/Tours';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { TourDetail } from './pages/TourDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <Tours />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tour/:tourId" element={<TourDetail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;