import {SearchMovies} from "@/src/components/search-component/SearchMovies";

interface Props {
    params:{query:string, page:number}
}
const search= ({params}:Props) =>{



    return(
        <>
          <SearchMovies params={params}/>
        </>
    )
}
export default search
