import {SearchMovies} from "@/src/components/search-component/SearchMovies";

interface Props {
    searchParams:{query:string, page:number}
}
const search= async ({searchParams}:Props) =>{

    const resolvedSearchParams = await searchParams;

    return(
        <>
          <SearchMovies searchParams={resolvedSearchParams}/>
        </>
    )
}
export default search
