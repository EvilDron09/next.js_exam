'use client'


import {useEffect, useState} from "react";
import {Rating} from "react-simple-star-rating";
import {apiKey, authentication, baseUrl} from "@/src/services/api-service";


interface IStarRating {
    movieId: number | string;
}

export const StarRating = ({movieId}:IStarRating) => {

    const[rating ,  setRating] = useState(0);
    const [isReadOnly, setIsReadOnly] = useState(false);
    const [guestSessionId, setGuestSessionId] = useState<string>('')

    useEffect(() => {
        const fetchGuestSession = async () =>{
           let session = localStorage.getItem("tmdb_guest_session");
            if (!session) {
                session = await authentication();
                if (session) {
                    localStorage.setItem("tmdb_guest_session", session);
                }
            }
            setGuestSessionId(session);
        }
        fetchGuestSession()
    }, []);


    const handleRating = async (rate: number)=>{
        setRating(rate);
        setIsReadOnly(true);


        try{
            const url = `${baseUrl}/movie/${movieId}/rating${guestSessionId ? `?guest_session_id=${guestSessionId}` : ''}`;
            const postRating = await fetch(url,{
                method:'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    value:rate
                })
            })
            const data = await postRating.json()
            return data
        }catch (e) {
            console.log('error')
        }
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


