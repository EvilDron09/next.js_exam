import {SearchMovies} from "@/src/components/search-component/SearchMovies";

interface Props {
    searchParams:{query:string, page:number}
}
const search= async ({searchParams}:Props) =>{

    const resolvedSearchParams = await searchParams;

    return(
        <div className={'page'}>
          <SearchMovies searchParams={resolvedSearchParams}/>
        </div>
    )
}
export default search
