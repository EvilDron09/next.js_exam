import {getGenres} from "@/src/services/api-service";
import {GenreBadge} from "@/src/components/genre-component/genre-badge/GenreBadge";
import Link from "next/link";
import './style/genreBadgeRenderStyle.css'



export const GenreBadgeRender = async() => {
    const genres = await getGenres()
    return (
        <div className={'genresBadgeRender'}>
            <ul>
                {
                    genres.map(genre => <GenreBadge key={genre.id} item={genre}/>)
                }
                <li><Link href={'/'}>All Movies</Link></li>
            </ul>
        </div>
    );
};
