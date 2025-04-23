import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import items from "../components/items.jsx";
import "../styles/product.css";

const ProductPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));

    // Show toast notification
    toast.success(`${item.title} added to cart!`, {
      position: "top-right",
      autoClose: 2000, // Disappears after 2 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <div className="product-container">
        <h1>OUR PRODUCTS</h1>
        <div className="product-grid">
          {items.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <p>Rs:{item.price}</p>
              <button className="buy-btn" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
