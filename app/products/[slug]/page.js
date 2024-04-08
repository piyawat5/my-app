import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  return res.json();
}

export default async function Page({ params }) {
  const products = await getProducts();
  console.log("products!!", products);
  return (
    <div>
      Product page {params.slug}
      <div>
        {products.map((product, index) => (
          <div key={product.id}>
            <span>{index + 1}.</span> <span> </span>{" "}
            <span> {product?.title}</span>
            <div>
              <Link
                href={`/product/${product.id}`}
                className="px-4 bg-blue-400 text-white"
              >
                Read more...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
