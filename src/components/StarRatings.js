import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'


const StarRatings = ({noOfStars = 5}) => {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState();

    const handleMouseMove = (index) => {
        setHover(index)
    }

    const handleMouseLeave = () => {
        setHover(rating)
    }

    const handleClick = (index) => {
        setRating(index)
    }

  return (
    <div>
        <style>
            {`
            .inactive {
                color: #000000;
            }

            .active{
                color: #fff700;
            }
                
            `}
        </style>
        {[...Array(noOfStars)].map((item,i) => {
            i++;
            return (
            <FaStar key={i} 
            className={i <= (hover || rating)?'active':'inactive'}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleMouseMove(i)}
            onMouseLeave={handleMouseLeave}
            size={40}
            />)
        })}
    </div>
  )
}

export default StarRatings