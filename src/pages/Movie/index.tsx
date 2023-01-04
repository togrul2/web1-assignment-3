import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Movie} from "@/components/Movie/types";
import MovieCard from "@/components/Movie";
import {getMovie} from "@/actions/movieActions";
import {Alert} from "@mui/material";
import Http404NotFound from "@/components/Http404NotFound";

export default function () {
  const {movieId} = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // Fetch movie data
      const {data: movie, error} = await getMovie(Number(movieId));
      if (error !== null) {
        // Handle error
        setError(error);
        return;
      }
      setError(null);
      setMovie(movie);
      document.title = movie!.Series_Title;
    })();
  }, [movieId]);

  if (error === "Not found") {
    return <Http404NotFound/>;
  }

  return (
    <>
      {error && <Alert sx={{my: 3}} severity="error">{error}</Alert>}
      {movie && <MovieCard item={movie}/>}
    </>
  );
}
