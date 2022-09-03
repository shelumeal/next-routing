import { useRouter } from "next/router";

function Review() {
  const rounter = useRouter();
  const { productId, reviewId } = rounter.query;

  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
}

export default Review;
