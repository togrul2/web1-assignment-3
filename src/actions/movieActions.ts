import {BACKEND_URL} from "@/config";
import {Movie} from "@/components/Movie/types";
import {ListMoviesResponse, MovieDetailsResponse} from "./types"

export const NETWORK_ERR_MSG = "Network error occurred. " +
  "Check your internet connection or reload this page.";

export async function getMovies(page: number = 1, limit: number = 10): Promise<ListMoviesResponse> {
  const params = new URLSearchParams({_page: String(page), _limit: String(limit)});
  const url = `${BACKEND_URL}/movies?${params.toString()}`;
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      return {data: [], total: 0, error: "Error occurred, try again."}
    }

    const total = Number(response.headers.get('X-Total-Count'));

    const body: Movie[] = await response.json();
    return {data: body, total, error: null};
  } catch (err) {
    return {data: [], total: 0, error: NETWORK_ERR_MSG};
  }
}

export async function getMovie(movieId: number): Promise<MovieDetailsResponse> {
  try {
    const response = await fetch(`${BACKEND_URL}/movies/${movieId}`);

    if (response.status !== 200) {
      return {data: null, error: "Not found"};
    }

    const body: Movie = await response.json();
    return {data: body, error: null};
  } catch {
    return {data: null, error: NETWORK_ERR_MSG};
  }
}