import {IResult} from "@/src/models/movie/IResult";
import Link from "next/link";


interface IMoviesList {
    item:IResult
}

export const MoviesList = ({item}:IMoviesList) => {
    return (
        <div className={'moviesList'}><Link href={'/'+item.id.toString()}>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}  alt={item.title}/>
            <div>
                <h3>{item.title} </h3>
                <p>{item.vote_average}<span className={'star'}>&#9733;</span></p>
            </div>
        </Link></div>
    );
};
