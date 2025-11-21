import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAdd = () => {
    if (product) dispatch(addToCart(product));
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (!product) return null;

  const inStock = product.stock > 0;

  return (
    <div className="row">
      <div className="col-md-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="img-fluid mb-3"
        />
        <div className="d-flex flex-wrap gap-2">
          {product.images?.slice(0, 4).map((img) => (
            <img
              key={img}
              src={img}
              alt=""
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
          ))}
        </div>
      </div>

      <div className="col-md-7">
        <h3>{product.title}</h3>
        <p className="text-muted">{product.brand}</p>
        <p>{product.description}</p>
        <p className="fs-4 fw-bold">${product.price}</p>
        <p>
          <span className="badge bg-secondary me-2">
            {product.category}
          </span>
          <span
            className={
              "badge " + (inStock ? "bg-success" : "bg-danger")
            }
          >
            {inStock ? "In stock" : "Out of stock"}
          </span>
        </p>

        <button
          className="btn btn-success mt-2"
          disabled={!inStock}
          onClick={handleAdd}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
