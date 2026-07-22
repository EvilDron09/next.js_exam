import {IResult} from "@/src/models/movie/IResult";
import {IGenre} from "@/src/models/gener/IGenre";

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

export const getGenres = async(): Promise<IGenre[]> =>{
    try {
        const response = await fetch(`${baseUrl}/genre/movie/list`,{
            headers:{
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data.genres || []
    }catch (error) {
        console.log('error')
        return []
    }
}

export const getMoviesGenre = async(id:string, page:number): Promise<IResult[]> => {
    try {
        const response = await fetch(`${baseUrl}/discover/movie?with_genres=${id}&page=${page}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data.results || []
    } catch (error) {
        console.log('error')
        return []
    }
}

export const getPopularMovies = async(): Promise<IResult[]> => {
    try {
        const response = await fetch(`${baseUrl}/discover/movie?sort_by=popularity.desc`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data.results || []
    } catch (error) {
        console.log('error')
        return []
    }
}

export const getMoviePages = async(page:number): Promise<IResult[]> => {
    try {
        const response = await fetch(`${baseUrl}/discover/movie?page=${page}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data.results || []
    } catch (error) {
        console.log('error')
        return []
    }
}

export const getMovieSearch = async(query:string, page:number): Promise<IResult[]> => {
    try {
        const response = await fetch(`${baseUrl}/search/movie?query=${encodeURIComponent(query)}&page=${page}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data.results || []
    } catch (error) {
        console.log('error')
        return []
    }
}
