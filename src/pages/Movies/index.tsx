import React, {useEffect, useState} from "react";
import {getMovies} from "@/actions/movieActions";
import {Movie} from "@/components/Movie/types";
import MovieCard from "@/components/Movie";
import Grid from '@mui/material/Grid';

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch movies data
    (async () => {
      const {data, error} = await getMovies();

      if (error !== null) {
        setError(error);
        return;
      }

      setMovies(data);
      setError(null);
    })()
  }, []);

  type MovieItemProps = {
    item: Movie
  }

  const MovieItem = ({item}: MovieItemProps) => (
    <Grid xs={4}><MovieCard item={item}/></Grid>
  );


  return (
    <>
      <h1>Movies</h1>
      {error && <h3>{error}</h3>}

      <Grid container spacing={2}>
        {movies.map(movie => (
          <MovieItem key={movie.id} item={movie}/>
        ))}
      </Grid>
    </>
  );
}
