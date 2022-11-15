import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../store/cart/cart-actions';
import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart-selector';

// components
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

// style
import './cartdropdown.scss';

const CartDropDown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();

  const goToCheckOutPage = () => {
    navigate('/checkout');
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckOutPage}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
