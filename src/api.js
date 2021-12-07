export const movieApi = {
  popular: async () => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
    return results;
  },
  nowPlaying: async () => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
    return results;
  },
  topRated: async () => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
    return results;
  },
  upComming: async () => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
    return results;
  },
  detail: async (id) => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
  },
  search: async (term) => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=da53fde37465a3704f99326877a0885f&query=${term}`
    ).then((res) => res.json());
    return results;
  },
};

export const tvApi = {
  topRated: async () => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
    return results;
  },
  popular: async () => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
    return results;
  },
  airingToday: async () => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
    return results;
  },

  detail: async (id) => {
    return await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=da53fde37465a3704f99326877a0885f`
    ).then((res) => res.json());
  },
  search: async (term) => {
    const { results } = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=da53fde37465a3704f99326877a0885f&query=${term}`
    ).then((res) => res.json());
    return results;
  },
};
