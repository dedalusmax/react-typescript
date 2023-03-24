import { useState } from 'react';

export default function App() {
  const [checkoutStep, setCheckoutStep] = useState("Details");

  return (
    <>
      {checkoutStep === 'Details' && (
        <>
          <h1>Details</h1>
          <button type='button' onClick={() => setCheckoutStep("Shipping")}>Next</button>
        </>
      )}
      {checkoutStep === 'Shipping' && (
        <>
          <h1>Shipping</h1>
          <button type='button' onClick={() => setCheckoutStep("Payment")}>Next</button>
        </>
      )}
      {checkoutStep === 'Payment' && (
        <>
          <h1>Payment</h1>
        </>
      )}
    </>
  );
}
