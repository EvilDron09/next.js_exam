
import {IResult} from "@/src/models/movie/IResult";
import "./style/movieInfoStyle.css"
import {StarRating} from "@/src/components/star-rating-component/StarRating";

interface IMovieInfo {
    item:IResult;
}

export const MovieInfo = ({item}:IMovieInfo) => {

    return (
        <div className={'movieInfo'}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title}/>
            </div>

            <div>
                <h3>{item.original_title}</h3>
                <p>{item.vote_average}<span className={'star'}>&#9733;</span>/ Vote count: {item.vote_count}</p>
                <StarRating movieId={item.id}/>
            </div>
        </div>
    );
};
