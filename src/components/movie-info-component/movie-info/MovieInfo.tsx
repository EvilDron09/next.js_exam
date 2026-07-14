
import {IResult} from "@/src/models/movie/IResult";
import Link from "next/link";

interface IMovieInfo {
    item:IResult;

}

export const MovieInfo = ({item}:IMovieInfo) => {

    return (
        <div className={'movieInfo'}>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}/>
            <div>
                <h3>{item.original_title}</h3>
                <p>{item.vote_average}<span className={'star'}>&#9733;</span>/ Vote count: {item.vote_count}</p>
                <button><Link href={`/movie/${item.id}/card`}> All Info</Link></button>
            </div>
        </div>
    );
};
