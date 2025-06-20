import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import ConfirmationPage from './components/ConfirmationPage';
import ImageTransitions from './components/ImageTransitions';
import CustomPage from './components/CustomPage';
import PaymentPage from './components/PaymentPage';
import AuthPage from './components/AuthPage';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import CheckoutFormWrapper from './components/CheckoutForm';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/ConfirmationPage" element={<ConfirmationPage/>}/>
        <Route path="/images" element={<ImageTransitions/>}/>
        <Route path="/Auth" element={<AuthPage/>}/>
        <Route path="/paymentPage" element={ <PrivateRoute><PaymentPage/></PrivateRoute>}/>
        <Route path="/customPage" element={ <PrivateRoute><CustomPage/></PrivateRoute>}/>
        <Route path="/checkoutForm" element={ <PrivateRoute><CheckoutFormWrapper/></PrivateRoute>}/>
        <Route path="*" element={<h1>Page Not Found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
