'use client'
import {IResult} from "@/src/models/movie/IResult";
import {useRef, useState} from "react";
import {MovieListCard} from "@/src/components/movie-list-card-component/movie-list-card/MovieListCard";

interface IMovieInfo {
    item:IResult
}

export const MovieInfo = ({item}:IMovieInfo) => {
    const [fullInfo, setFullInfo] = useState(false)
    const fullInfoRef = useRef<HTMLDivElement>(null)
    const toggleFullInf = () =>{
        if(!fullInfo){
            setFullInfo(true)
            setTimeout(() =>{
                fullInfoRef.current?.scrollIntoView({
                    behavior:'smooth'
                })
            })
        }
    }
    return (
        <div className={'movieInfo'}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}/>
            <div>
                <h3>{item.original_title}</h3>
                <p>{item.vote_average}<span className={'star'}>&#9733;</span>/ Vote count: {item.vote_count}</p>
            </div>
            <button onClick={toggleFullInf}>Full info</button>
            {fullInfo && (
                <div ref={fullInfoRef}>
                    <MovieListCard key={item.id} item={item}/>
                </div>
            )}
        </div>
    );
};
