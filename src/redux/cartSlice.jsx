import { createSlice, findNonSerializableValue } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newitem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newitem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newitem.price;
      } else {
        state.products.push({
          id: newitem.id,
          name: newitem.name,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          image: newitem.image,
        });
      }
      state.totalPrice += newitem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalPrice += findItem.price;
        state.totalQuantity++;
      }
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const findItem = state.products.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalPrice -= findItem.price;
        state.totalQuantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
