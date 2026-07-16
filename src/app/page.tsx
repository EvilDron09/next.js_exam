import {MoviesListRender} from "@/src/components/movies-list-component/movies-list-render/MoviesListRender";
import {PopularMovieRender} from "@/src/components/popular-movies-component/popular-movies-render/PopularMovieRender";

interface PageProps {
    searchParams: Promise<{ page:string}>;
}

export default async function Home({searchParams}:PageProps) {
  return (
   <>
     <MoviesListRender params={searchParams}/>
       <PopularMovieRender/>
   </>
  );
}
