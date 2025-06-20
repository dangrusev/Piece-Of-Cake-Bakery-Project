import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfirmationPage() {
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem('latestOrder'));

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000); // Will redirect out of this page after 10 seconds of waiting.
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <header>
        <h1>Your order has been placed!</h1>
        <p>Your cake is being prepared. Thank you very much!</p>
      </header>

      <main>        
        <section>
          <h2>Return to the Homepage</h2>
          <button onClick={() => navigate('/')}>Return to Homepage</button>
          <p>You’ll be automatically redirected to the homepage soon.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Piece of Cake Bakery. All rights reserved.</p>
      </footer>
    </>
  );
}

export default ConfirmationPage;
