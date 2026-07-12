import {getGenres} from "@/src/services/api-service";
import {GenreBadge} from "@/src/components/genre-component/genre-badge/GenreBadge";
import Link from "next/link";


export const GenreBadgeRender = async() => {
    const genres = await getGenres()
    return (
        <ul>
            {
                genres.map(genre => <GenreBadge key={genre.id} item={genre}/>)
            }
            <li><Link href={'/'}>All Movies</Link></li>
        </ul>
    );
};
