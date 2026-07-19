import {IResult} from "@/src/models/movie/IResult";
import Link from "next/link";

interface IPopularMovies {
    item:IResult
}

export const PopularMovies = ({item}:IPopularMovies) => {
    return (
        <div>
            <Link href={'/movie/'+item.id.toString()}><img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title}/></Link>
        </div>
    );
};
