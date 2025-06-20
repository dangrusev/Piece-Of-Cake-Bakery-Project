// This was the original code for the checkout form. The code had to be changed due to running into a persistant issue with Stripe not processing the payment intent.
 
/* import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutForm = ({ amount, orderDetails, deliveryDate, paymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    
    setProcessing(true);

    try {
      const { data } = await axios.post('https://final-project-cake-website.onrender.com/api/stripe/create-payment-intent', { amount });
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        alert(result.error.message);
        setProcessing(false);
      } else if (result.paymentIntent.status === 'succeeded') {
        localStorage.setItem('latestOrder', JSON.stringify({
          total: amount,
          deliveryDate: orderDetails?.deliveryDate || null,
        }));
        await axios.post('https://final-project-cake-website.onrender.com/api/orders', {
          ...orderDetails,
          paymentIntentId: result.paymentIntent.id,
        });

        navigate('/ConfirmationPage');
      }
    } catch (error) {
      console.error('Payment failed', error);
      alert('There was an error processing your payment.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || processing}>
        {processing ? 'Processing Payment' : 'Pay Now'}
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51RalP5QtsBZ6lZQ9s6IEpqrK6VmJncnIiAVgrMzQVTHPIjIvR8Lnld9ZjPmIim6iY77Phunlq21hprod3VBAzgUa00smmf1Bis');
const CheckoutFormWrapper = ({ amount, orderDetails, deliveryDate }) => (
  <>
  <Elements stripe={stripePromise}>
    <CheckoutForm amount={amount} orderDetails={orderDetails} deliveryDate={deliveryDate}/>
  </Elements>
</>
);

export default CheckoutFormWrapper;
 */