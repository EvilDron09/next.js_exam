import {FC} from "react";
import {getMoviesGenre} from "@/src/services/api-service";
import {MoviesList} from "@/src/components/movies-list-component/movies-list/MoviesList";

type Props ={
    params:{id:string}
}

const genrePage:FC<Props> = async ({params}) =>{

    const {id} = await params
    const genreMovies = await getMoviesGenre(id)

    return(
        <section>
            {
                genreMovies.map(movie => <MoviesList key={movie.id} item={movie}/>)
            }
        </section>
    )
}

export default genrePage
