import {getMovies} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";

export const MoviesListRender = async () => {
    const moviesList = await getMovies()

    return (
        <section>
            {
                moviesList.map(movie => <MoviesList key={movie.id} item={movie}/>)
            }
        </section>
    );
};
