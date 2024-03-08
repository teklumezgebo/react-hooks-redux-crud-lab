import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {

  const [name, setName] = useState("")

  const dispatch = useDispatch()

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    dispatch(restaurantAdded(name))
    setName("")
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="text">name</label>
        <input id="text" type="text" onChange={handleNameChange} value={name}/>
        <input type="submit" value="Add Restaurant"/>
      </form>
    </div>
  )
}

export default RestaurantInput;
