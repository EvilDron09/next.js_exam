
import {FC} from "react";
import {MovieInfo} from "@/src/components/movie-info-component/movie-info/MovieInfo";
import {getMovie} from "@/src/services/api-service";


type Props = {
    params:{id:string}
}


const moviePage :FC<Props> = async ({params}) =>{

    const {id} = await params;
    const movie = await getMovie(id);

    return(
        <>
            <MovieInfo item={movie}/>
        </>
    )
}
export default moviePage
