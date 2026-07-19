
import {FC} from "react";
import {MovieInfo} from "@/src/components/movie-info-component/movie-info/MovieInfo";
import {getMovie} from "@/src/services/api-service";
import Link from "next/link";
import {MovieListCard} from "@/src/components/movie-list-card-component/movie-list-card/MovieListCard";
import {StarRating} from "@/src/components/star-rating-component/StarRating";



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
        <>
            <MovieInfo item={movie}/>
            <div>
                <StarRating/>
            </div>
            <div>
                <button><Link href='?modal=true'> All Info</Link></button>
                {
                    openModal && <MovieListCard item={movie}/>
                }
            </div>
        </>
    )
}
export default moviePage
