import React, { useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';

function Carrito() {
  return (
    <div>
      <Header />

      <div class="shop-container">
      <h1 class="shop-title">Shop</h1>

      <div class="cart-content">
        <div class="cart-table">
          <div class="cart-header">
            <div class="cart-col">Producto</div>
            <div class="cart-col">Precio</div>
            <div class="cart-col">Cantidad</div>
            <div class="cart-col">Subtotal</div>
             </div>
             <div class="cart-item">
              <div class="cart-col">Gas Duragas</div>
              <div class="cart-col">$3.50</div>
             <div class="cart-col">
              <input type="number" value="1" min="1" class="cart-quantity"/>
              </div>
              <div class="cart-col">$3.50</div>
              </div>
              <div class="cart-item">
              <div class="cart-col">Gas Duragas</div>
              <div class="cart-col">$3.50</div>
              <div class="cart-col">
              <input type="number" value="1" min="1" class="cart-quantity"/>
              </div>
              <div class="cart-col">$3.50</div>
             </div>
        </div>

        <div class="cart-summary">
          <div class="cart-total">
            <span>Subtotal:</span>
            <span>$7.00</span>
          </div>
          <div class="cart-total">
            <span>Total:</span>
            <span>$7.50</span>
          </div>
          <button class="checkout-button">Comprar</button>
          </div>
         </div>
       </div>

      <Footer />
    </div>
  );
}

export default Carrito;
