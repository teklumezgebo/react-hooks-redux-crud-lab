import React from "react";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({ restaurant }) {
  return (
    <div>
      <ReviewInput restaurant={restaurant.id}/>
      <Reviews restaurant={restaurant.id}/>
    </div>
  );
}

export default ReviewsContainer;
