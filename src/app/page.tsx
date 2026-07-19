import {MoviesListRender} from "@/src/components/movies-list-component/movies-list-render/MoviesListRender";
import {PopularMovieRender} from "@/src/components/popular-movies-component/popular-movies-render/PopularMovieRender";
import {PosterPreview} from "@/src/components/poser-preview-component/poster-preview/PosterPreview";
import {PosterPreviewRender} from "@/src/components/poser-preview-component/poster-preview-render/PosterPreviewRender";

interface PageProps {
        searchParams: Promise<{ page:string}>;
}

export default async function Home({searchParams}:PageProps) {
  return (
   <>
       <PosterPreviewRender/>
     <MoviesListRender searchParams={searchParams}/>
       <PopularMovieRender/>
   </>
  );
}
