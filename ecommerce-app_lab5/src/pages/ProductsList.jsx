import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Pagination from "../components/Pagination.jsx";

const LIMIT = 10; // bonus: 10 items per page

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      const skip = (page - 1) * LIMIT;

      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
        );
        const data = await res.json();
        setProducts(data.products || []);
        setTotal(data.total || 0);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <div>
      <h2 className="mb-3">Products</h2>
      {loading && <p>Loading products...</p>}
      {error && <p className="text-danger">{error}</p>}

      <div className="row">
        {!loading &&
          products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <Pagination
        page={page}
        total={total}
        limit={LIMIT}
        onPageChange={setPage}
      />
    </div>
  );
}
