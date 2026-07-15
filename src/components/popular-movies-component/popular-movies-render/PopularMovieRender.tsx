import {getPopularMovies} from "@/src/services/api-service";
import {PopularMovies} from "@/src/components/popular-movies-component/popular-movies/PopularMovies";
import './style/popularMovieRenderStyle.css'

export const PopularMovieRender = async () => {

    const popularMovies = await getPopularMovies()
    const movies = [...popularMovies, ...popularMovies]
    return (
        <div className={'popularMovies'}>
            <div>
                {
                    movies.map((movie, index) => <div  key={`${movie.id}-${index}`}>
                    <PopularMovies key={movie.id} item={movie}/>
                    </div>)
                }
            </div>
        </div>
    );
};
