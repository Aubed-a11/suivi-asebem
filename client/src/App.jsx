import { useEffect } from 'react';
import EmergencyBar from './components/EmergencyBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Doors from './components/Doors.jsx';
import ShareForm from './components/ShareForm.jsx';
import Talk from './components/Talk.jsx';
import Directory from './components/Directory.jsx';
import Charter from './components/Charter.jsx';
import Footer from './components/Footer.jsx';
import { quickExit } from './quickExit.js';


export default function App() {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') quickExit();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <EmergencyBar />
      <Header />
      <main>
        <Hero />
        <Doors />
        <ShareForm />
        <Talk />
        <Directory />
        <Charter />
      </main>
      <Footer />
    </>
  );
}
