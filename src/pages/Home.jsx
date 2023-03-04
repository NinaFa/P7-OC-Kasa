
import React from "react";
import '../styles/home.css';
import Banner from '../components/Banner.jsx';
import Cards from '../components/Cards.jsx';
import HomeBanner from "../assets/IMG.jpg";


function Home() {
  return (
    <div className='body'>
      <Banner img={HomeBanner} origin="home" />
      <Cards />
    </div>
  );
}

export default Home;
