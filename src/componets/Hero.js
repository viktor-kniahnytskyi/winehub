import React from 'react';
import './Hero.scss';
import heroImage from '../img/first-screen.png'; // Імпорт зображення фону
import arrowIcon from '../img/arrow-icon.png'; // Імпорт іконки стрілки

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src={heroImage} alt="Hero Background" className="hero__background-image" />
      </div>
      <div className="hero__content">
        <div className="hero__upper">
          <div className="hero__upper-column">
            <h1 className="hero__title">Personal</h1>
          </div>
          <div className="hero__upper-column">
            <p className="hero__subtitle">Surprise your guests with a perfectly selected wine</p>
            <p className="hero__subtitle">Choose the wine, using the newest technology</p>
          </div>
          <div className="hero__upper-column">
            
          </div>
        </div>
        <div className="hero__lower">
          <span className="hero__highlighted-text">
            <img src={arrowIcon} alt="Arrow Icon" className="hero__icon" />
            Virtual
          </span>
          <span className="hero__main-title">Sommelier</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
