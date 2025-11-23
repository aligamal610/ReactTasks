import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/cartSlice.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Navbar() {
  const cartCount = useSelector(selectCartCount);
  const { lang, setLang } = useLanguage();

  const handleLangChange = (e) => setLang(e.target.value);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/products">
          Products App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <select
              className="form-select form-select-sm w-auto"
              value={lang}
              onChange={handleLangChange}
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>

            <NavLink className="btn btn-outline-secondary position-relative" to="/register">
              Register
            </NavLink>
              <NavLink className="btn btn-outline-secondary position-relative" to="/login">
                Login
              </NavLink>

            <NavLink
              className="btn btn-outline-secondary position-relative"
              to="/cart"
            >
              Cart
              {cartCount > 0 && (
                <span className="badge bg-danger text-white position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
