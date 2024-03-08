import React from "react";
import Restaurant from "./Restaurant"
import { useSelector } from "react-redux";

function Restaurants() {

  const restaurants = useSelector((state) => (state.restaurants.entities))

  return (
    <div>
      {restaurants.map((restaurant) => <Restaurant key={restaurant.id} restaurant={restaurant}/>)}
    </div>
  );
}

export default Restaurants;
