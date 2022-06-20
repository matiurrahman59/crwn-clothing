import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

import './cartdropdown.scss';

const CartDropDown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutPage = () => {
    navigate('/checkout');
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckOutPage}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
