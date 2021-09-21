import React from 'react';
import '../styles/components/Payment.css'

const Payment = ({history}) => (
  <div className="Payment">
    <div className="Payment-content">
      <h3>Presumen del pedido:</h3>
      <div className="Payment-button">Boton de pago con paypal</div>
    </div>
    <button type ='button' onClick={()=>history.push('/checkout/success')}>Pagar</button> 
    </div>
);

export default Payment;
