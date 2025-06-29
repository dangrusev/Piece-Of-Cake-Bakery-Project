// This code simulates the payment process with Stripe. Original is running into a persistant payment intent issue. Original is still up to view
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements, CardElement, Elements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckoutForm = ({ amount, orderDetails, deliveryDate, paymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const userId = "6861b5c15c6bf55b651c4c33";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(async() => {
      try {await axios.post('https://pieceofcakebakerybackend-agbkfxenccbbh5gg.centralus-01.azurewebsites.net/api/ordersRoute', {
        userId, items: [{productId: "customCake", quantity: 1}], total: amount, shippingAddress: {address: orderDetails.address || "", city: orderDetails.city || "", state: orderDetails.state || "", zip: orderDetails.zip || "", country: "United States of America"}
      });
    
        localStorage.setItem('latestOrder', JSON.stringify({
          total: amount, deliveryDate: deliveryDate || null,}));

        paymentSuccess();
        } catch (error) {console.error("Error: Issue with submitting your order:", error); 
        alert("Error");
        setProcessing(false);}}, 3000); // Simulates payment with Stripe. Also simulates a 3 second processing wait
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
const CheckoutFormWrapper = ({ amount, orderDetails, deliveryDate }) => {
  const navigate = useNavigate();
  return(
  <Elements stripe={stripePromise}>
    <CheckoutForm amount={amount} orderDetails={orderDetails} deliveryDate={deliveryDate} paymentSuccess={() => navigate('/ConfirmationPage')}/>
  </Elements>
  // paymentSuccess was added due to running into payment intent error with the Stripe API. This allows for payment simulation to occur without processing through Stripe.
  );
};

export default CheckoutFormWrapper;
