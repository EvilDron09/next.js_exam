import {FC} from "react";
import {MovieInfo} from "@/src/components/movie-info-component/movie-info/MovieInfo";
import {getMovie} from "@/src/services/api-service";
import Link from "next/link";
import {MovieListCard} from "@/src/components/movie-list-card-component/movie-list-card/MovieListCard";
import './style.css'


type Props = {
    params:{id:string};
    searchParams: Promise<{ modal?: string }>;
}


const moviePage :FC<Props> = async ({params, searchParams}) =>{

    const {modal} = await searchParams;
    const openModal = modal === "true";
    const {id} = await params;
    const movie = await getMovie(id);

    return(
        <div className={'page'}>
            <MovieInfo item={movie}/>

            <div className={'fullInfo'}>
                <button ><Link href='?modal=true'> All Info</Link></button>
                {
                    openModal && <MovieListCard item={movie}/>
                }
            </div>
        </div>
    )
}
export default moviePage
