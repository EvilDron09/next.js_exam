import {getPopularMovies} from "@/src/services/api-service";
import {PosterPreview} from "@/src/components/poser-preview-component/poster-preview/PosterPreview";
import './style/posterPreviewStyle.css'


export const PosterPreviewRender = async () => {
 const previews = await getPopularMovies();
 if(!previews|| previews.length === 0) return null;
const currentMovies = previews.slice(0,4)
    return (
        <div className={'posterPreview'}>
            {
                currentMovies.map(movie =><PosterPreview key={movie.id} item={movie}/>)
            }
        </div>
    );
};
