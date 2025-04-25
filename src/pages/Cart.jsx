import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images/EmptyCart.png";
import { FaTrashAlt } from "react-icons/fa";
import Model from "../components/Model";
import ChangeAddress from "../components/ChangeAddress";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("vvmk ,143");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate=useNavigate();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="grid grid-cols-[2.8fr_1fr_1fr_1fr_0.7fr] text-xs font-bold border-b mb-4 p-2">
                <p>PRODUCT</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>SUB-TOTAL</p>
                <p>REMOVE</p>
              </div>

              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] items-center p-3 border-b"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <p className="text-center">₹{product.price}</p>
                  <div className="flex items-center justify-center border w-[80px]">
                    <button
                      className="text-xl font-bold px-1.5 border-r"
                      onClick={() => dispatch(decreaseQuantity(product.id))}
                    >
                      -
                    </button>
                    <p className="w-8 text-center">{product.quantity}</p>
                    <button
                      className="text-xl px-1 border-l"
                      onClick={() => dispatch(increaseQuantity(product.id))}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-center w-[80px]">
                    ₹{(product.price * product.quantity).toFixed(2)}
                  </p>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => dispatch(removeFromCart(product.id))}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border w-[300px]">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>

              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">TOTAL ITEMS:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2 break-words overflow-wrap anywhere">
                  Shipping to{" "}
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change address
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>₹{Number(cart.totalPrice).toFixed(2)}</span>
              </div>

              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800"
              onClick={()=>navigate('/checkout ')}>
                Proceed to checkout
              </button>
            </div>
          </div>
          <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModelOpen={setIsModelOpen}
            />
          </Model>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
