import type { Metadata } from 'next';
import {FC} from "react";
import {MovieInfo} from "@/src/components/movie-info-component/movie-info/MovieInfo";
import {getMovie} from "@/src/services/api-service";


type Props = {
    params:{id:string}
}

export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{
    const {id} =await params
    return {
        title:'Movie page title'+id
    }
}


const MoviePage :FC<Props> = async ({params}) =>{

    const {id} = await params;
    const movie = await getMovie(id);


    return(
        <>
            <MovieInfo item={movie}/>
            <button>Full information</button>
        </>
    )
}
export default MoviePage
