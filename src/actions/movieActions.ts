import {BACKEND_URL} from "@/config";
import {Movie} from "@/components/Movie/types";

export async function getMovies(page: number = 1, limit: number = 10) {
  const params = new URLSearchParams({_page: String(page), _limit: String(limit)});
  const url = `${BACKEND_URL}/movies?${params.toString()}`;
  const response = await fetch(url);

  if (response.status !== 200) {
    return {data: [], total: 0, error: "Error occurred, try again."}
  }

  const total = Number(response.headers.get('X-Total-Count'));

  const body: Movie[] = await response.json();
  return {data: body, total, error: null};
}

export async function getMovie(movieId: number) {
  const response = await fetch(`${BACKEND_URL}/movies/${movieId}`);

  if (response.status !== 200) {
    return {data: null, error: "Not found"};
  }

  const body: Movie = await response.json();
  return {data: body, error: null};
}