import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, placeOrder } from "../store/CartSlice";
import "../styles/cart.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderDetailsModal from "../components/OrderDetailsModal";

const CartPage = () => {
  const dispatch = useDispatch();
  const [totalSum, setTotalSum] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalSum(totalPrice);
  }, [cartItems]);

  const handleOrder = (orderDetails) => {
    dispatch(placeOrder());
    toast.success(`Order placed successfully!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("Order Details:", orderDetails);
  };

  return (
    <>
      <div className="cart-container">
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, key) => (
                <div key={key} className="cart-item">
                  <img src={item.img} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{item.price * item.quantity}</p>
                  </div>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <h2>Total: ₹{totalSum}</h2>
            <div className="button-container">
              <button className="clear-btn" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
              <button className="clear-btn" onClick={() => setIsModalOpen(true)}>
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleOrder}
      />
    </>
  );
};

export default CartPage;