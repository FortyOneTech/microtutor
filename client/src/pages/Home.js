// client/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <h1>Empower Your Tutoring – Simplify, Automate, Excel.</h1>
        <p>Automate lesson planning, note-taking, and exercise generation with MicroTutor.</p>
        <Link to="/signup" className="cta-button">
          Get Started
        </Link>
      </section>
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="icon-exercises"></i>
            <h3>AI-Generated Exercises</h3>
            <p>Create customized practice exercises tailored to your students' needs.</p>
          </div>
          <div className="feature-item">
            <i className="icon-notes"></i>
            <h3>Automated Note-Taking</h3>
            <p>Capture key points during sessions and organize them effortlessly.</p>
          </div>
          <div className="feature-item">
            <i className="icon-templates"></i>
            <h3>Lesson Plan Templates</h3>
            <p>Access a library of editable templates to expedite lesson planning.</p>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <h2>What Tutors Are Saying</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>"MicroTutor has revolutionized the way I plan lessons."</p>
            <h4>- Alex, Math Tutor</h4>
          </div>
          <div className="testimonial-item">
            <p>"The AI-generated exercises are a game-changer for personalized teaching."</p>
            <h4>- Maria, Science Tutor</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
