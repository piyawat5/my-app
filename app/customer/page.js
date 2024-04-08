"use client";

import { useState, useEffect } from "react";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  return res.json();
}

export default function Page({ params }) {
  const [item, setItem] = useState([]);

  const getData = async () => {
    try {
      const products = await getProducts();
      setItem(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();

    console.log("products!!");
  }, []);

  console.log(item);
  return (
    <div>
      customer page {params.slug}
      <div>
        {item &&
          item?.map((product, index) => (
            <div key={product.id}>
              <span>{index + 1}.</span> <span> </span>{" "}
              <span> {product?.title}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
