const API_KEY = "b48fc4ee34d466c8243fbccc6b8f08aa";
const BASE_URL = `https://api.themoviedb.org/3`;

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export async function getMovies() {
  return await (
    await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko&page=1&region=kr`
    )
  ).json();
}
