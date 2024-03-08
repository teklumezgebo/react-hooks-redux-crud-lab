import React from "react";
import Review from "./Review";
import { useSelector } from "react-redux";

function Reviews({ restaurant }) {

  const reviews = useSelector((state) => state.reviews.entities)

  const filteredReviews = reviews.filter((review) => review.restaurantId === restaurant)

  return (
    <div>
      {filteredReviews.map((review) => <Review key={review.id} review={review}/>)}
    </div>
  )
}

export default Reviews;
