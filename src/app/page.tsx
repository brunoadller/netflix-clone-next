'use client'
import { ListMovies } from "@/types/ListMovies"
import Image from "next/image"
import { useEffect, useState } from "react"
import { getHomeList } from "../../tmdb"



  const Home = () => {
    const [data, setData] = useState<ListMovies[] | null>([])
    const  getData = () => {
      
    }
    useEffect(() => {
      getHomeList().then(res => {
      console.log(res)
      setData(res)   
      })
     
    },[])
  return (
    <div className="flex flex-col ">
     {
      data?.map((lists, key) => {
        return(
         <div key={key} className="flex flex-col gap-3">
           <h1 className="mt-3">{lists.title}</h1>
           <div className="flex items-center justify-center gap-5">
           {lists.items?.map(list => {
            return(
              <div key={list.id} className="flex items-center justify-center">
                <img 
                className="w-[300px]"
                src={`https://image.tmdb.org/t/p/w300${list?.poster_path}`} alt={list.title} width={300} />
              </div>
            )
           })}
           </div>
         </div>
          
        )
      })
     }
    </div>
  )
}

export default Home