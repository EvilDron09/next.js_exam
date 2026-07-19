'use client'


import {useState} from "react";
import {Rating} from "react-simple-star-rating";


export const StarRating = () => {

    const[rating ,  setRating] = useState(0);
    const [isReadOnly, setIsReadOnly] = useState(false);

    const handleRating = (rate:number)=>{
        setRating(rate);
        setIsReadOnly(true);
    }

    return (
       <>
         <Rating
            onClick={handleRating}
            initialValue={rating}
            iconsCount={10}
            allowFraction
            transition
            readonly={isReadOnly}
         />
       </>
    );
};


