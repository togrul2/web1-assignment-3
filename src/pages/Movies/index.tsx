import React, {useEffect, useState} from "react";
import Grid from '@mui/material/Grid';
import {Alert, TablePagination} from "@mui/material";

import {getMovies} from "@/actions/movieActions";
import {Movie} from "@/components/Movie/types";
import MovieCard from "@/components/Movie";
import {MovieItemProps} from "@/pages/Movie/types";
import {useNavigate} from "react-router-dom";

export default function Movies() {
  const params = new URLSearchParams(location.search);
  const page = Number(params.get("page")) || 1;
  const limit = Number(params.get("limit")) || 10;

  const navigate = useNavigate();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch movies data
    (async () => {
      const {data, total, error} = await getMovies(page, limit);

      if (error !== null) {
        setError(error);
        return;
      }

      setMovies(data);
      setTotal(total);
      setError(null);
    })()
  }, [page, limit]);

  const handleChangePage = (e: React.MouseEvent<HTMLElement> | null, localPage: number) => {
    navigate(`?page=${localPage}&limit=${limit}`);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    navigate(`?page=${page}&limit=${Number(e.target.value)}`);
  };

  const MovieItem = ({item, xs}: MovieItemProps) => (
    <Grid item xs={xs}><MovieCard item={item}/></Grid>
  );

  return (
    <>
      <h1>Movies</h1>
      {error && <Alert sx={{my: 3}} severity="error">{error}</Alert>}
      <Grid container spacing={2}>
        {movies.map(movie => (
          <MovieItem xs={4} key={movie.id} item={movie}/>
        ))}
      </Grid>
      {total !== 0 && (
        <TablePagination
          component="div"
          count={total}
          page={page}
          rowsPerPage={limit}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </>
  );
}
