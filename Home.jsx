import React from 'react';
import './Home.css'; // or use Tailwind if configured

const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Swap Skills. Learn More. Grow Together.</h1>
            <p>Join the community and trade knowledge with passionate learners like you.</p>
            <div className="hero-buttons">
              <button className="btn primary">Get Started</button>
              <button className="btn secondary">Browse Skills</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://undraw.co/api/illustrations/skills" alt="Skill Swap Illustration" />
          </div>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h2>Why Skill Swap?</h2>
          <div className="feature-cards">
            <div className="card">
              <img src="https://img.icons8.com/ios-filled/50/7C3AED/exchange.png" alt="Swap Icon" />
              <h3>Easy Swapping</h3>
              <p>Offer what you know, request what you want to learn.</p>
            </div>
            <div className="card">
              <img src="https://img.icons8.com/ios-filled/50/7C3AED/star--v1.png" alt="Ratings Icon" />
              <h3>Trusted Ratings</h3>
              <p>Build credibility through community feedback.</p>
            </div>
            <div className="card">
              <img src="https://img.icons8.com/ios-filled/50/7C3AED/clock--v1.png" alt="Availability Icon" />
              <h3>Flexible Time</h3>
              <p>Choose your own schedule for each skill session.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
