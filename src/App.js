import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { showNotification, clearNotification } from "./components/reducers/notificationSlice";
import Notification from "./components/UI/Notification";

function App() {
  const showCart = useSelector((state) => state.cartVisible.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const isInitial = useRef(true);

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    const sendCartData = async () => {
      dispatch(showNotification({ status: "pending", message: "Sending cart data..." }));

      try {
        const response = await fetch(
          "https://react-http-95a1f-default-rtdb.firebaseio.com/cart.json",
          { method: "PUT", body: JSON.stringify(cart) }
        );

        if (!response.ok) throw new Error("Sending failed.");

        dispatch(showNotification({ status: "success", message: "Cart saved successfully!" }));
      } catch {
        dispatch(showNotification({ status: "error", message: "Failed to send cart data!" }));
      }
    };

    sendCartData();
  }, [cart, dispatch]);

  useEffect(() => {
    if (!notification.status) return;

    const timer = setTimeout(() => {
      dispatch(clearNotification());
    }, 3000);

    return () => clearTimeout(timer);
  }, [notification, dispatch]);

  return (
    <Layout>
      {notification.status && (
        <Notification status={notification.status} message={notification.message} />
      )}
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
