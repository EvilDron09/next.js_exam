import {getMovieSearch} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";
import Link from "next/link";
import './style/searchMoviesStyle.css'
import '../movies-list-component/movies-list-render/style/movieListRenderStyle.css'

interface Props {
    searchParams:{query?:string, page?:number}
}

export const SearchMovies = async ({searchParams}:Props) => {

    const query = searchParams.query || "";
    const currentPage = Number(searchParams.page)||1
    const searchMovies =await getMovieSearch(query, currentPage);

    if(!searchMovies || searchMovies.length===0){
        return (
            <div className={"noMovies"}>
                <p> Sorry, there are no movies matching this request</p>
            </div>
        )
    }

    const fullPages = searchMovies.length;
    const isFirstPage = currentPage <= 1;
    const isLastPage = currentPage >= fullPages;
    const prevPage = Math.max(currentPage -1,1);
    const nextPage = Math.min(currentPage +1,fullPages);



    return (
        <section>

            <div className={'movieList'}>
                {
                    searchMovies.map(movie => <MoviesList key={movie.id} item={movie}/>)
                }
            </div>

            <div  className={'search'}>
                {isFirstPage ?(
                <button disabled>Back</button>):(<Link href={`/search?query=${query}&page=${prevPage}`}>Back</Link>
                )}
                <p>{currentPage}</p>
                {isLastPage || searchMovies.length<20 ?(
                <button disabled>Next</button>):(<Link href={`/search?query=${query}&page=${nextPage}`}>Next</Link>
                    )}
            </div>

        </section>
    );
};
