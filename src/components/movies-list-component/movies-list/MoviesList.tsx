import {IResult} from "@/src/models/movie/IResult";
import Link from "next/link";


interface IMoviesList {
    item:IResult
}

export const MoviesList = ({item}:IMoviesList) => {
    return (
        <div><Link href={'/'+item.id.toString()}>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}  alt={item.title}/>
            <h3>{item.title}</h3>
        </Link></div>
    );
};
