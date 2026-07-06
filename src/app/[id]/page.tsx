import type { Metadata } from 'next';
import {FC} from "react";


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

    const {id} = await params
    return(
        <>
        <p>{params.id}</p>
        </>
    )
}
export default MoviePage
