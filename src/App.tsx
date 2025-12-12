// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Tours } from './components/Tours';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { TourDetail } from './pages/TourDetail';
import { useParams } from 'react-router-dom';
import { getTourById } from './data/tours';
import { useLanguage } from './context/LanguageContext';

function HomePage() {
  return (
    <>
      <Hero />
      <Tours />
      <WhyChooseUs />
      <WhatsAppButton />
    </>
  );
}

// Wrapper pour TourDetail avec WhatsApp contextuel
function TourDetailPage() {
  const { tourId } = useParams<{ tourId: string }>();
  const { language } = useLanguage();
  const tour = tourId ? getTourById(tourId) : undefined;
  const tourName = tour ? (language === 'es' ? tour.titleEs : tour.titleEn) : undefined;

  return (
    <>
      <TourDetail />
      <WhatsAppButton tourName={tourName} />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tour/:tourId" element={<TourDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;