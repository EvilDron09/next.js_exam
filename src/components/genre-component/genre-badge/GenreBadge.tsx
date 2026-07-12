import {IGenre} from "@/src/models/gener/IGenre";
import Link from "next/link";

interface IGenreBadge {
    item:IGenre
}

export const GenreBadge = ({item}:IGenreBadge) => {
    return (
        <li>
            <Link href={'/genre/'+ item.id.toString()}>{item.name}</Link>
        </li>
    );
};
