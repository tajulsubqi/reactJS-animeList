import React from "react"
import Anime from "../../types/Anime"

interface AnimeListProps {
  api: Anime[]
}

const AnimeList: React.FC<AnimeListProps> = ({ api }) => {
  return (
    <>
      <div className="container my-8  flex flex-wrap justify-center gap-4">
        {api.map((anime) => (
          <div key={anime.mal_id} className="">
            <div className="card w-[300px] h-[550px] bg-slate-50  p-2 rounded-sm shadow-lg border-slate-300 border">
              <img
                src={anime.images.webp.image_url}
                alt="png"
                className="h-[350px] w-full"
              />
              <div>
                <h3 className="text-sm font-medium mt-2">Judul: {anime.title}</h3>
                <h3 className="text-sm font-medium mt-2">
                  Japanese: {anime.title_japanese}
                </h3>
                <h3 className="text-sm font-medium mt-2">Season: {anime.season}</h3>
                <h3 className="text-sm font-medium mt-2">Duration: {anime.duration}</h3>
                <h3 className="text-sm font-medium mt-2">Episode: {anime.episodes}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default AnimeList
