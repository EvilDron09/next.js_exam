import {IGenre} from "@/src/models/gener/IGenre";
import Link from "next/link";
import './style/genreBangeDtyle.css'

interface IGenreBadge {
    item:IGenre
}

export const GenreBadge = ({item}:IGenreBadge) => {

    return (
        <li className={'genresBadge'}>
            <label htmlFor="genreToggle">
                <Link href={'/genre/'+ item.id.toString()} >{item.name}</Link>
            </label>
        </li>
    );
};
