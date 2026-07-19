import {getMoviePages} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";
import Link from "next/link";

interface Props{
    searchParams:Promise<{page?:string}>
}

export const MoviesListRender = async ({searchParams}:Props) => {

    const resolvedSearchParams = await searchParams;
    const numPage = Number(resolvedSearchParams.page)||1;
    const moviesList = await getMoviePages(numPage);
    const fullPages = 500;
    const prevPage = Math.max(numPage -1,1);
    const nextPage = Math.min(numPage +1,fullPages);

    return (
        <section className={'movieList'}>
            <div>
                {
                    moviesList.map(movie => <MoviesList key={movie.id} item={movie}/>)
                }
             </div>
            <div>
                <button><Link href={`?page=${prevPage}`}>Back</Link></button>
                <p>{numPage}</p>
                <button><Link href={`?page=${nextPage}`}>Next</Link></button>
            </div>
        </section>

    )
};
