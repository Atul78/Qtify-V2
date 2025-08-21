import "swiper/css";
import "swiper/css/navigation";
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/navbar/Hero/HeroSection';
import Section from './components/AlbumLists/Section';
import { LeftArrow } from "./UIElements";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
       <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/top"
        isCarousel={true}
      />

      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend-labs.crio.do/albums/new"
        isCarousel={true}
      />
    </>
  );
}

export default App;
