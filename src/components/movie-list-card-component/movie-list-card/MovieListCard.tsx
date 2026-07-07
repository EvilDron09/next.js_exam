import {IResult} from "@/src/models/movie/IResult";

interface IMovieListCard {
    item:IResult
}

export const MovieListCard = ({item}:IMovieListCard) => {
    return (
        <div className={'movieListCard'}>
            <p>Language:{item.original_language}</p>
            <div>Genre: {item.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}</div>
            <p>{item.overview}</p>
            <p>Release data: {item.release_date}</p>
        </div>
    );
};
