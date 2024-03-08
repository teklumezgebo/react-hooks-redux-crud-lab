import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux";
import { restaurantRemoved } from "./restaurantsSlice";

function Restaurant({ restaurant }) {

  const dispatch = useDispatch()

  function handleDeleteButton() {
    dispatch(restaurantRemoved(restaurant.id))
  }

  return (
    <div>
        {restaurant.name}
        <button onClick={handleDeleteButton}> Delete Restaurant </button>
        <ReviewsContainer restaurant={restaurant} />
    </div>
  );
}

export default Restaurant;
