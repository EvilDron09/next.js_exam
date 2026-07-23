import {getMovieSearch} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";
import Link from "next/link";

interface Props {
    searchParams:{query?:string, page?:number}
}

export const SearchMovies = async ({searchParams}:Props) => {

    const query = searchParams.query || "";
    const currentPage = Number(searchParams.page)||1
    const searchMovies =await getMovieSearch(query, currentPage);
    const fullPages = 500;
    const prevPage = Math.max(currentPage -1,1);
    const nextPage = Math.min(currentPage +1,fullPages);




    return (
        <section>
            <div>
                {
                    searchMovies.map(movie => <MoviesList key={movie.id} item={movie}/>)
                }
            </div>
            {searchMovies && searchMovies.length>19 &&(
                <div>
                    <button><Link href={`/search?query=${query}&page=${prevPage}`}>Back</Link></button>
                    <p>{currentPage}</p>
                    <button><Link href={`/search?query=${query}&page=${nextPage}`}>Next</Link></button>
                </div>
            )
            }

        </section>
    );
};
