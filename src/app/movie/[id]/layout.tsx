import type { Metadata } from 'next';
import React from "react";


export const metadata:Metadata ={
    title:"MovieInfo metadata"
}

type Props = {children:React.ReactNode}
const MovieInfoLayout = ({children}:Props) =>{
    return(
        <>
            {children}
        </>

    )
}

export default MovieInfoLayout
