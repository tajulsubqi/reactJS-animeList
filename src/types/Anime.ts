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

export default Anime
