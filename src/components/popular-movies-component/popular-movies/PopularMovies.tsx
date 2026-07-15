import {IResult} from "@/src/models/movie/IResult";

interface IPopularMovies {
    item:IResult
}

export const PopularMovies = ({item}:IPopularMovies) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title}/>
        </div>
    );
};
