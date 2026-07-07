import {IResult} from "@/src/models/movie/IResult";

const apiKey = process.env.TMDB_API_TOKEN
const baseUrl = 'https://api.themoviedb.org/3'



export const getMovies = async(): Promise<IResult[]> =>{
    try {
        const response = await fetch(`${baseUrl}/discover/movie`,{
            headers:{
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data.results || []
    }catch (error) {
        console.log('error')
        return []
    }

}
export const getMovie = async(id:string): Promise<IResult> =>{
    const response =  await fetch(`${baseUrl}/movie/${id}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
                 },
            })
          return response.json()
        }
