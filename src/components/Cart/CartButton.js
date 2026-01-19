import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartShow } from '../UI/cartVisible';

const CartButton = (props) => {
  const totalItems=useSelector((state)=> state.cart.totalItems);
  const dispatch=useDispatch();
  return (
    <button onClick={()=>dispatch(cartShow())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
