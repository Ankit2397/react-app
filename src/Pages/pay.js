import GooglePayButton from '@google-pay/button-react';
import { useState, useEffect } from 'react';

 function Googlepay() {

return(

<GooglePayButton
  environment="TEST"
  paymentRequest="jfj"
  onLoadPaymentData={() => {}}
  />
  )};
  export default Googlepay;