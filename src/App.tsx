import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import KeyTakeaways from './components/KeyTakeaways';
import ComparisonTable from './components/ComparisonTable';
import ContentSection from './components/ContentSection';
import TableOfContents from './components/TableOfContents';
import Footer from './components/Footer';

function App() {
  const [showToc, setShowToc] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowToc(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Hero />
      <KeyTakeaways />
      <ComparisonTable />
      <ContentSection />
      {showToc && <TableOfContents />}
      <Footer />
    </div>
  );
}

export default App;
