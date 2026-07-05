import {IResult} from "@/src/models/movie/IResult";
import Image from "next/image";

interface IMoviesList {
    item:IResult
}

export const MoviesList = ({item}:IMoviesList) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}  alt={item.title}/>
            <h3>{item.title}</h3>
        </div>
    );
};
