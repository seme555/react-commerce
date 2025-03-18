import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../component/Modal";
import ChangeAddress from "../component/ChangeAddress";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 0012");
  console.log(cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>

          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b border-gray-200 items-center mb-4 text-xs font-bold ">
                <p>PRODUCT</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b border-gray-200"
                >
                  <div className="md:flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>

                  <div className="flex space-x-12 items-center">
                    <p>${product.price}</p>

                    <div className="flex items-center justify-center border border-gray-200">
                      <button
                        className="text-xl font-bold px-1.5 border-r border-gray-200"
                        onClick={() => dispatch(decreaseQuantity(product.id))}
                      >
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button
                        className="text-xl px-1 border-l border-gray-200"
                        onClick={() => dispatch(increaseQuantity(product.id))}
                      >
                        +
                      </button>
                    </div>

                    <p>${(product.quantity * product.price).toFixed(2)}</p>

                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">CART TOTAL</h3>

              <div className="flex justify-between text-lg font-medium mb-2">
                <span>Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="border-t border-gray-200 pt-2">
                <p className="text-sm text-gray-500">Shipping:</p>
                <p className="text-sm text-gray-500">Shipping to:</p>
                <span className="font-semibold">{address}</span>
                <button
                  className="text-blue-600 underline mt-1 ml-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change Address
                </button>
              </div>

              <div className="flex justify-between text-lg font-medium mt-4">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="Empty Cart" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
