import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice"

function ReviewInput({ restaurant }) {

  const [comment, setComment] = useState("")

  const dispatch = useDispatch()

  function handleCommentChange(event) {
    event.preventDefault()
    setComment(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    dispatch(reviewAdded({
      comment: comment,
      restaurantId: restaurant
    }))
    setComment("")
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="comment">comment</label>
        <input id="comment" type="textarea" onChange={handleCommentChange} value={comment}/>
        <input type="submit" value="Add Review"/>
      </form>
    </div>
  )
}

export default ReviewInput;
