import {getMoviePages} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";
import Link from "next/link";
import './style/movieListRenderStyle.css'

interface Props{
    searchParams:Promise<{page?:string}>
}

export const MoviesListRender = async ({searchParams}:Props) => {

    const resolvedSearchParams = await searchParams;
    const numPage = Number(resolvedSearchParams.page)||1;
    const moviesList = await getMoviePages(numPage);
    const fullPages = 500;
    const isFirstPage = numPage <= 1;
    const isLastPage = numPage >= fullPages;
    const prevPage = Math.max(numPage -1,1);
    const nextPage = Math.min(numPage +1,fullPages);

    return (
        <div>
                <div className={'movieList'}>
                    {
                        moviesList.map(movie => <MoviesList key={movie.id} item={movie}/>)
                    }
                 </div>
            <section>
                <div className={'search'}>
                    {isFirstPage ?(
                    <button disabled>Back</button>):(<Link href={`?page=${prevPage}`}>Back</Link>
                    )}
                    <p>{numPage}</p>
                    {isLastPage ?(
                    <button disabled>Next</button>):(<Link href={`?page=${nextPage}`}>Next</Link>
                    )}
                </div>
            </section>
        </div>
    )
};
