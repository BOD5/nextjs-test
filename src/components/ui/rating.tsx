"use client"

import "@smastrom/react-rating/style.css"
import { Rating as R, RatingProps } from "@smastrom/react-rating"

const Rating: React.FC<RatingProps> = ({ ...props }) => {
  return <R {...props} />
}

export default Rating
