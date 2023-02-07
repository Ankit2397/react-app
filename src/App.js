import logo from './logo.svg';
import React from 'react';
import './App.css';
import Stripe from 'stripe';
import StripeCheckout from 'react-stripe-checkout';


function App() {
  // const stripe = require('stripe')('sk_test_51MYkyKSA9SSCvBhdXANOXVOUmFIWafBMw1LQVRF7nBli8PSteVn5LTbBXAEMgPldVtY7ekWasdZU9Ujy6wm6BCd300ecfHhKpl');

  // stripe.customers.create({
  //   email: 'customer@example.com',
  // })
  //   .then(customer => console.log(customer.id , 'USER ID'))
  //   .catch(error => console.error(error , 'ERROR'));

  // const onToken = (token) => {
  //   fetch('/save-stripe-token', {
  //     method: 'POST',
  //     body: JSON.stringify(token),
  //   }).then(response => {
  //     response.json().then(data => {
  //       alert(`We are in business, ${data.email}`);
  //     });
  //   });
  // }
 
  const onToken = (token) => {
    console.log(token)}


  return (
    <div className="App">
     <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51MYkyKSA9SSCvBhdywqF73Cl9WjltIqrkmFbP5JKNvmnMecot9tkDE4lcUUDLYVs6KcLBnC27jKawy0EkKzfwC5z008hfWpjg1"
         name= 'contriverz'
         amount='50000'
         currency='inr'
         type = 'service'

         
         />
    </div>
  );
}








export default App;


// MasterCard

// 5555555555554444

// MasterCard

// 5105105105105100

// Visa

// 4111111111111111

// Visa

// 4012888888881881

// https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm