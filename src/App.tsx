import { useState } from "react"
import instance from "./lib/Axios"
import AnimeList from "./components/AnimeList/AnimeList"
import Anime from "./types/Anime"

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

  // Pemeriksaan jika tombol yang ditekan adalah tombol "Enter"
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getAnimeList()
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
              onKeyDown={handleKeyDown}
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

          <AnimeList api={animes} />
        </div>
      </div>
    </>
  )
}

export default App
