/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

import Product from "../models/Product";
import mongoose from "mongoose";

function Tshirts({ products }) {
  return (
    <div>
      {products.map((p) => {
        return (
          <div key={p._id}>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                  <Link href={"/product/t-shirts"}>
                    <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-7">
                      <a className="block relative rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="m-auto  h-[40vh] md:h-[46vh] block"
                          src="https://m.media-amazon.com/images/I/61vSCNUCqxL._AC_UX569_.jpg"
                        />
                      </a>
                      <div className="mt-4 text-center">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          {p.title}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          Bend the Trend
                        </h2>
                        <p className="mt-1">{p.price}</p>
                        <p className="mt-1">{p.size}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Tshirts;
