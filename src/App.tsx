import { useState } from "react"
import instance from "./lib/Axios"

interface Anime {
  mal_id: number
  title: string
  title_japanese: string
  season: string
  duration: string
  episodes: number
  images: {
    webp: {
      image_url: string
    }
  }
}

const App = () => {
  const [text, setText] = useState("")
  const [animes, setAnimes] = useState<Anime[]>([])

  const getAnimeList = async () => {
    try {
      if (text === "") {
        return false
      }

      const response = await instance.get("/anime", {
        params: {
          q: text,
        },
      })
      setAnimes(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="container">
        <div className="mx-auto">
          <h1 className="text-center mt-10 font-bold text-4xl uppercase">Anime List</h1>
          <div className="text-center mt-10">
            <input
              type="text"
              placeholder="search anime ..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border border-slate-400 rounded-md px-3 py-1"
            />
            <button
              onClick={getAnimeList}
              className="bg-primary px-3 py-1 text-white font-medium ml-1 rounded-md hover:bg-sky-700 duration-300"
            >
              search
            </button>
          </div>

          <div className="container my-8  flex flex-wrap justify-center gap-4">
            {animes.map((anime: Anime) => (
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
                    <h3 className="text-sm font-medium mt-2">
                      Duration: {anime.duration}
                    </h3>
                    <h3 className="text-sm font-medium mt-2">
                      Episode: {anime.episodes}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
