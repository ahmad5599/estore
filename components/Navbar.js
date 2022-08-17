import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { TbShoppingCart } from "react-icons/tb";
import { BsFillBagCheckFill, BsFillCartXFill } from "react-icons/bs";

import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

function Navbar({ cart, addToCart, removeFromCart, clearCart, subTotal }) {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  function showCart() {
    ref.current.classList.remove("translate-x-full");
    ref.current.classList.add("translate-x-0");
  }
  function removeCart() {
    ref.current.classList.remove("translate-x-0");
    ref.current.classList.add("translate-x-full");
  }
  const ref = useRef();

  return (
    <div className="sticky top-0 bg-white z-50">
      <header className="text-gray-600 body-font shadow-md ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src="/Logo.png" width="30px" height="30px" alt="Logo" />
              <span className="ml-3 text-xl">Bend the Trend</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/tshirts"}>
              <a className="mr-5 hover:text-gray-900">Tshirts</a>
            </Link>
            <Link href={"/hoodies"}>
              <a className="mr-5 hover:text-gray-900">Hoodies</a>
            </Link>
            <Link href={"/mugs"}>
              <a className="mr-5 hover:text-gray-900">Mugs</a>
            </Link>
            <Link href={"/stickers"}>
              <a className="mr-5 hover:text-gray-900">Stickers</a>
            </Link>
          </nav>
          <button
            onClick={showCart}
            className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:Fill-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            <TbShoppingCart />
          </button>
        </div>
        <div
          ref={ref}
          className="w-72 h-[100vh] sideCart absolute top-0 right-0 bg-slate-300 p-10 trasform transition-transform translate-x-full  px-8 shadow-2xl rounded-md z-10"
        >
          <h2 className="font-bold text-xl text-center">Shoping Cart</h2>
          <span
            onClick={removeCart}
            className=" absolute top-3 text-2xl cursor-pointer right-3"
          >
            <AiFillCloseCircle />
          </span>
          <ol className="list-decimal p-4">
            {Object.keys(cart).length == 0 && (
              <div className="mx-4">No items in the cart</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold flex items-center justify-start ">
                      {cart[k].name}
                    </div>
                    <div className="w-1/3 text-lg font-semibold flex items-center justify-center ">
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer mx-1 text-7xl"
                      />
                      {cart[k].qty}
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer mx-1 text-7xl"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="flex">
            <Link href={"/checkout"}>
              <button className="flex mx-2 text-green bg-slate-50 border-0 py-2 px-2 focus:outline-none hover:bg-slate-50 rounded text-md">
                <BsFillBagCheckFill className="m-1 text-lg" />
                Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex mx-2 text-green bg-slate-50 border-0 py-2 px-2 focus:outline-none hover:bg-slate-50 rounded text-md"
            >
              <BsFillCartXFill className=" text-lg m-1" /> ClearCart
            </button>
          </div>
          <span className="subTotal flex mx-11 justify-center items-center my-8 text-green bg-slate-200 border-0 py-2 px-2  rounded text-md ">
            SubTotal : {subTotal}
          </span>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
