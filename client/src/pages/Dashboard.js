// client/src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { auth } from '../utils/firebase';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [subscription, setSubscription] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await axios.get('/payment/subscription-status', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubscription(response.data);
      } catch (error) {
        console.error('Error fetching subscription status:', error.message);
      }
    };
    fetchSubscriptionStatus();
  }, []);

  const handleUpgrade = async () => {
    try {
      const token = await auth.currentUser.getIdToken();
      const response = await axios.post(
        '/payment/create-checkout-session',
        { plan: 'pro' },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const { sessionId } = response.data;
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error('Error creating checkout session:', error.message);
    }
  };

  return (
    <div className="dashboard-page">
      <h2>Welcome to Your Dashboard</h2>
      {subscription ? (
        <div>
          <p>Your subscription status: {subscription.status}</p>
          {subscription.plan !== 'pro' && (
            <button onClick={handleUpgrade} className="upgrade-button">
              Upgrade to Pro
            </button>
          )}
        </div>
      ) : (
        <div>
          <p>You do not have an active subscription.</p>
          <button onClick={() => history.push('/pricing')} className="subscribe-button">
            Subscribe Now
          </button>
        </div>
      )}
      {/* Additional dashboard content */}
    </div>
  );
};

export default Dashboard;
