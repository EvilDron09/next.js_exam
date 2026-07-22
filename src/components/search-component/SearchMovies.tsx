import {getMovieSearch} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";

interface Props {
    params:{query?:string, page?:number}
}

export const SearchMovies = async ({params}:Props) => {

    const {query} = await params;
    const {page} = await params;

    const currentPage = Number(page)||1


    const searchMovies = query? await getMovieSearch(query, currentPage):[];

    return (
        <>
            {
                searchMovies.map(movie => <MoviesList key={movie.id} item={movie}/>)
            }
        </>
    );
};
