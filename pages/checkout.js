import Link from "next/link";
import React from "react";

import { BsFillCartXFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

function Checkout({ cart, clearCart, addToCart, removeFromCart, subTotal }) {
  return (
    <div className="conatiner m-10">
      <h1 className="font-bold text-2xl my-8 text-left">Checkout</h1>
      <form action="#" method="POST">
        <h3>1.Delivery details</h3>
        <div className="shadow-xl overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="First Name"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Last Name"
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Email Address"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Street Address"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="City"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="State / Province"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP / Postal code
                </label>
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md p-2"
                  placeholder="Your ZIP / Postal code"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
        <h3 className="pt-3">2.Review cart</h3>

        <div className=" sideCart  right-0  p-10  px-8  rounded-md z-10 shadow-xl  sm:rounded-md">
          <ol className="list-decimal p-4">
            {Object.keys(cart).length == 0 && (
              <div className="mx-4">No items in the cart</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className=" font-semibold flex items-center justify-start ">
                      {cart[k].name}
                    </div>
                    <div className="w-1/3 font-semibold flex items-center justify-center ">
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
                        className="cursor-pointer mx-1 text-3xl text-slate-500"
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
                        className="cursor-pointer mx-1 text-3xl  text-slate-500"
                      />
                    </div>
                    <span className="subTotal flex mx-2 text-green bg-slate-200 border-0 py-2 px-2  rounded text-md ">
                      SubTotal : {subTotal}
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="flex">
            <Link href="#" scroll={false}>
              <button
                onClick={clearCart}
                className="flex mx-2 text-green bg-slate-200 border-0 py-2 px-2 focus:outline-none hover:bg-slate-50 rounded text-md "
              >
                <BsFillCartXFill className=" text-lg m-1" /> ClearCart
              </button>
            </Link>
            <button className="flex mx-2 text-green bg-slate-200 border-0 py-2 px-2 focus:outline-none hover:bg-slate-50 rounded text-md">
              <MdPayment className="m-1 text-lg" />
              Total : {subTotal}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
