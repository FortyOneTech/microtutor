// client/src/pages/Pricing.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const Pricing = () => {
  const history = useHistory();

  const handleSubscribe = plan => {
    history.push('/dashboard', { plan });
  };

  return (
    <div className="pricing-page">
      <h2>Choose Your Plan</h2>
      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Basic Plan</h3>
          <p>$10/month</p>
          <ul>
            <li>Limited AI-generated exercises</li>
            <li>Access to lesson plan templates</li>
          </ul>
          <button onClick={() => handleSubscribe('basic')} className="subscribe-button">
            Choose Basic
          </button>
        </div>
        <div className="pricing-card">
          <h3>Pro Plan</h3>
          <p>$20/month</p>
          <ul>
            <li>Unlimited AI-generated exercises</li>
            <li>Automated note-taking features</li>
            <li>All features included</li>
          </ul>
          <button onClick={() => handleSubscribe('pro')} className="subscribe-button">
            Choose Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
