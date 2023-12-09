import axios from "axios"

const instace = axios.create({
  baseURL: "https://api.jikan.moe/v4",
})

export default instace
