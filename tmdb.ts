import axios from 'axios'
import { get } from 'http'


const API_KEY = "63f70bce8858bb215b389543d72b61c9"
const API_BASE = 'https://api.themoviedb.org/3/'


export const fetchData = async (endpoint: string) => {
    try{
        const req = await axios.get(`${API_BASE}${endpoint}`)
        return req.data.results
    }catch(err){
        return null
    }
   
}

export const getHomeList = async () => {
    return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await fetchData(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await fetchData(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await fetchData(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await fetchData(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await fetchData(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
                 
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await fetchData(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)

        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await fetchData(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await fetchData(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
            
    ]
}