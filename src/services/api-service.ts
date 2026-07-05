import {IResult} from "@/src/models/movie/IResult";

const apiKey = process.env.TMDB_API_TOKEN




export const getMovies = async(): Promise<IResult[]> =>{
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie`,{
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
