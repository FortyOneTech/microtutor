// payment-service/controllers/paymentController.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Subscription = require('../models/Subscription');

exports.createCheckoutSession = async (req, res) => {
  try {
    const { plan } = req.body;
    const userId = req.user.sub;

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: req.user.email,
      line_items: [
        {
          price: plan === 'pro' ? process.env.STRIPE_PRO_PRICE_ID : process.env.STRIPE_BASIC_PRICE_ID,
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/pricing`,
      metadata: {
        userId: userId,
        plan: plan,
      },
    });

    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
};

exports.handleWebhook = async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      await updateSubscription(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await deleteSubscription(event.data.object);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
};

exports.getSubscriptionStatus = async (req, res) => {
  try {
    const userId = req.user.sub;
    const subscription = await Subscription.findOne({ userId: userId });
    if (!subscription) {
      return res.status(404).json({ message: 'No subscription found' });
    }
    res.status(200).json(subscription);
  } catch (error) {
    console.error('Error fetching subscription status:', error.message);
    res.status(500).json({ error: 'Failed to fetch subscription status' });
  }
};

// Helper functions
const updateSubscription = async (subscriptionData) => {
  const userId = subscriptionData.metadata.userId;
  const plan = subscriptionData.metadata.plan;
  const subscription = await Subscription.findOneAndUpdate(
    { userId: userId },
    {
      stripeCustomerId: subscriptionData.customer,
      stripeSubscriptionId: subscriptionData.id,
      plan: plan,
      status: subscriptionData.status,
      currentPeriodEnd: new Date(subscriptionData.current_period_end * 1000),
    },
    { upsert: true, new: true }
  );
  console.log('Subscription updated:', subscription);
};

const deleteSubscription = async (subscriptionData) => {
  const subscription = await Subscription.findOneAndDelete({
    stripeSubscriptionId: subscriptionData.id,
  });
  console.log('Subscription deleted:', subscription);
};
