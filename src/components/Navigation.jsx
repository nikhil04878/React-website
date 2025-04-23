import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const location = useLocation(); 
  const isLoginPage = location.pathname === "/login";

  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className={location.pathname === "/products" ? "active-link" : ""}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active-link" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active-link" : ""}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" className={location.pathname === "/cart" ? "active-link" : ""}>
            Cart
          </Link>
        </li>
        <li>
    <Link to="/order-history" className={location.pathname === "/order-history" ? "active-link" : ""}>
      Order History
    </Link>
  </li>
      </ul>
      <div style={{display: "flex", gap: "1rem"}}>
      <Link to="/login" className={isLoginPage ? "hidden-link" : "login-btn"}>
      Sign in 
      </Link>
      
      {/* <Link to="/signup" className={isLoginPage ? "hidden-link" : "login-btn"}>
      Sign up 
      </Link> */}
      </div>
      
    </nav>
  );
};

export default Navigation;