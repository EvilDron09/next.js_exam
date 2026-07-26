
import {getMoviesGenre} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";
import Link from "next/link";
import '../../../components/movies-list-component/movies-list-render/style/movieListRenderStyle.css'

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


    return (
        <div className={'page'}>
            <div className={'movieList'}>
                {
                    genreMovies.map(movie => <MoviesList key={movie.id} item={movie}/>)
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
}

export default genrePage
