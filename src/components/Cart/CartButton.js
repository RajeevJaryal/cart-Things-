import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartShow } from '../reducers/cartSlice';

const CartButton = (props) => {
  
  const dispatch=useDispatch();
  return (
    <button onClick={()=>dispatch(cartShow())} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
