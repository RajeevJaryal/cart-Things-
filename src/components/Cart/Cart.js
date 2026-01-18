import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice= useSelector((state)=> state.cart.totalPrice);
  return (
    <Card className={classes.cart}>
      <div>
        <h2>Your Shopping Cart</h2>
        <h2>{totalPrice}</h2>
      </div>
      <ul>
        {cartItems.length === 0 && <p>No items yet..</p>}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.total,
              price: item.price
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
