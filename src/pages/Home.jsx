
import React from "react";
import './home.css';
import Banner from '../components/Banner.jsx';
import Cards from '../components/Cards.jsx';
import HomeBanner from "../assets/IMG.webp";

// retourner la version adaptée du composant <Banner />, et la liste des logements sous forme de <Cards />
function Home() {
  return (
    <main className='body'>
      <Banner img={HomeBanner} origin="home" />
      <Cards />
    </main>
  );
}

export default Home;
