import {IResult} from "@/src/models/movie/IResult";

export interface IMovie {
    page: number,
    results: IResult[],
    total_pages: number,
    total_results: number,
}
