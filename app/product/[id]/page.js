async function getProduct(params) {
  const res = await fetch("https://fakestoreapi.com/products/" + params);
  return res.json();
}

export default async function Page({ params }) {
  const data = await getProduct(params.id);
  return <div>{data?.title}</div>;
}
