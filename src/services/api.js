import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "d2025775b2fd79d83cd89b01e02ddba6",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
