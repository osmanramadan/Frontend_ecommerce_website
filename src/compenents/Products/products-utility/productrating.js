import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons';

const Productrating = () => {
  const [rating, setRating] = useState(4.5);

  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };

  const onStarHover = (nextValue) => {
    setRating(Math.round(nextValue * 2) / 2);
  };

  return (
    <div>
      <StarRatingComponent
        name="rating"
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
        onStarHover={onStarHover}
        starColor="gold"
        emptyStarColor="lightgray"
        renderStarIcon={() => (
          <FontAwesomeIcon
            icon={faStar}
            style={{ height: '25px', width: '20px' }}
          />
        )}
        renderStarIconHalf={() => (
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            color="gold"
            style={{ height: '25px', width: '23px' }}
          />
        )}
      />
      {/* <span>{rating} out of 5</span> */}
    </div>
  );
};

export default Productrating;
