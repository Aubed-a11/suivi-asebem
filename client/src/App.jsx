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

    // Apparition douce des sections au défilement
    const els = document.querySelectorAll('.section .wrap');
    els.forEach((el) => el.classList.add('reveal'));
    const io = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
          });
        }, { threshold: 0.08 })
      : null;
    els.forEach((el) => (io ? io.observe(el) : el.classList.add('is-visible')));

    return () => {
      window.removeEventListener('keydown', onKey);
      io && io.disconnect();
    };
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
