import {MoviesListRender} from "@/src/components/movies-list-component/movies-list-render/MoviesListRender";
import {PopularMovieRender} from "@/src/components/popular-movies-component/popular-movies-render/PopularMovieRender";

export default function Home() {
  return (
   <>
     <MoviesListRender/>
       <PopularMovieRender/>
   </>
  );
}
