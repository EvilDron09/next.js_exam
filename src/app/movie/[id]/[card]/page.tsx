
import {getMovie} from "@/src/services/api-service";;
import {MovieListCard} from "@/src/components/movie-list-card-component/movie-list-card/MovieListCard";
import {FC} from "react";


type Props = {
    params:{id:string};
}


const movieCardPage :FC<Props> = async ({params}) =>{

    const {id} = await params;
    const movie = await getMovie(id);

    return(
        <>
            <MovieListCard item={movie}/>
        </>
    )
}
export default movieCardPage
