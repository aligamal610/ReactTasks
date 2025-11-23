import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice.js";

export default function CartPage() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div>
        <h2>Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-3">Cart</h2>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Description</th>
              <th style={{ width: "160px" }}>Quantity</th>
              <th>Remove</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      style={{ width: "70px", height: "70px", objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0">{item.title}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <span className="btn btn-sm btn-light">{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    ×
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-outline-danger" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>
    </div>
  );
}
