import { AxiosResponse } from "axios"
import { DataMoviesItems } from "./Movies"

export type ListMovies = {
    slug: string
    title: string
    items: DataMoviesItems[]
}