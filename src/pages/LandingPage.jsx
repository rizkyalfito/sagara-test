import Features from '../components/Features';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ItSertification from '../components/ItSertification';
import Sertification from '../components/Sertification';
import SertificationList from '../components/SertificationList';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ItSertification />
      <Features />
      <Sertification />
      <SertificationList />
      <Footer />
    </div>
  );
};

export default LandingPage;
