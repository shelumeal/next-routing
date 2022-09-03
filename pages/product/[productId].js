import { useRouter } from "next/router";

function ProductDetail() {
  const rounter = useRouter();
  const productId = rounter.query.productId;

  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
}

export default ProductDetail;
