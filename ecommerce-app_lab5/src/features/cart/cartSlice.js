import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // {id, title, price, thumbnail, quantity}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) existing.quantity += 1;
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (!existing) return;
      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// selectors
export const selectCartItems = (state) => state.cart.items;

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

export default cartSlice.reducer;
