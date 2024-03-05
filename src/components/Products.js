import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Products = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item Added To Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  };

  const isItemInCart = cart.some((p) => p.id === item.id);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img src={item.image} alt="Product" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-gray-800 font-semibold text-lg truncate">{item.title}</h2>
        <p className="text-gray-600 mt-1">{item.publisher}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-green-600 font-semibold">₹{item.price}</p>
          <button
            onClick={isItemInCart ? removeFromCart : addToCart}
            className={`text-xs font-semibold py-2 px-4 rounded-full uppercase ${
              isItemInCart ? "bg-red-500 text-white" : "bg-green-500 text-white"
            } hover:bg-gray-800 hover:text-gray-100 transition duration-300 ease-in`}
          >
            {isItemInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
