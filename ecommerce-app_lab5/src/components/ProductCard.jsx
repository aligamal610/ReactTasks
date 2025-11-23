import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const inStock = product.stock > 0;

  const handleAdd = () => {
    if (!inStock) return;
    dispatch(addToCart(product));
  };

  return (
    <div className="col-md-4 col-lg-3 mb-3">
      <div className="card h-100">
        <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
          <img
            src={product.thumbnail}
            className="card-img-top"
            alt={product.title}
            style={{ objectFit: "cover", height: "160px" }}
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{product.title}</h6>
          <p className="mb-1 small text-muted">
            ${product.price}
          </p>
          <span
            className={
              "badge mb-2 " +
              (inStock ? "bg-success" : "bg-danger")
            }
          >
            {inStock ? "In stock" : "Out of stock"}
          </span>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <Link to={`/products/${product.id}`} className="btn btn-sm btn-outline-secondary">
              Details
            </Link>
            <button
              className="btn btn-sm btn-success"
              onClick={handleAdd}
              disabled={!inStock}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
