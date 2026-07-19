import {getPopularMovies} from "@/src/services/api-service";
import {PosterPreview} from "@/src/components/poser-preview-component/poster-preview/PosterPreview";
import './style/posterPreviewStyle.css'

export const PosterPreviewRender = async () => {
 const previews = await getPopularMovies()
    return (
        <div className={'posterPreview'}>
            {
                previews.map(preview => <PosterPreview key={preview.id} item={preview}/>)
            }
        </div>
    );
};
