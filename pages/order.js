/* eslint-disable @next/next/no-img-element */
import React from "react";

function Order({ subTotal }) {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden shadow-2xl m-9">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Bend the Trend
              </h1>
              <p className="leading-relaxed mb-4">
                Your Order has been placed successfully
              </p>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500  border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
                <a className="flex-grow  border-gray-300 py-2 text-lg px-1">
                  Quantity
                </a>
                <a className="flex-grow  border-gray-300 py-2 text-lg px-1">
                  Price
                </a>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">tshirts</span>
                <span className="ml-auto text-gray-900">2</span>
                <span className="ml-auto text-gray-900">800</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">hoodies</span>
                <span className="ml-auto text-gray-900">7</span>
                <span className="ml-auto text-gray-900">789</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">mugs</span>
                <span className="ml-auto text-gray-900">4</span>
                <span className="ml-auto text-gray-900">900</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  SubTotal : ₨.{subTotal}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
