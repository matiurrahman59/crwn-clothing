import { Outlet, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsCartOpen } from '../../store/cart/cart-selector';
import { selectCurrentUser } from '../../store/user/user-selector';
import { signOutStart } from '../../store/user/user-action';

// componets
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropDown from '../../components/cart-dropdown/CartDropDown';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

// Styles
import './Navigation.scss';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  console.log(currentUser);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/auth'>
            {currentUser ? (
              <span className='nav-link' onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <span className='nav-link'>SIGN IN</span>
            )}
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
