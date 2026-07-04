import {IResult} from "@/src/models/movie/IResult";

const apiKey = process.env.TMDB_API_KEY
const baseUrl = `https://api.themoviedb.org/3?api_key=${apiKey}`



export const getMovie = async(): Promise<IResult[]> =>{
    return await fetch(`${baseUrl}/discover/movie`)
        .then(value => value.json())
}
