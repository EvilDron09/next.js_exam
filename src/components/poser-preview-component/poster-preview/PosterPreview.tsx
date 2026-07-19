import {IResult} from "@/src/models/movie/IResult";
import Link from "next/link";

interface IPosterPreview {
    item:IResult
}

export const PosterPreview = ({item}:IPosterPreview) => {
    
    return (
        <div>
            <Link href={'/movie/'+item.id.toString()}><img src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}  alt={item.title}/></Link>
        </div>
    );
};
