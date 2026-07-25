
import {getMoviesGenre} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";
import Link from "next/link";

interface Props {
    params:Promise<{id:string}>,
    searchParams: Promise<{ page:string}>;
}

const genrePage = async ({params, searchParams}:Props) =>{

    const {id} = await params;
    const resolvedSearchParams = await searchParams;
    const numPage = Number(resolvedSearchParams.page)||1;
    const genreMovies = await getMoviesGenre(id,numPage);
    const fullPages = 500;
    const isFirstPage = numPage <= 1;
    const isLastPage = numPage >= fullPages;
    const prevPage = Math.max(numPage -1,1);
    const nextPage = Math.min(numPage +1,fullPages);


    return(
        <section>
            <div>
                {
                genreMovies.map(movie => <MoviesList key={movie.id} item={movie}/>)

                 }
            </div>
            <div>
                {isFirstPage ?(
                    <button disabled>Back</button>):(<Link href={`?page=${prevPage}`}>Back</Link>
                )}
                <p>{numPage}</p>
                {isLastPage ?(
                    <button disabled>Next</button>):(<Link href={`?page=${nextPage}`}>Next</Link>
                )}
            </div>
        </section>
    )
}

export default genrePage
