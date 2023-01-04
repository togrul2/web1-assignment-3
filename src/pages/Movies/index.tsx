import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Alert, TablePagination} from "@mui/material";

import {getMovies} from "@/actions/movieActions";
import {Movie} from "@/components/MovieDetails/types";
import MoviesTable from "@/components/MoviesTable";
import styles from "./styles.module.scss";

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

  const handleChangePage = (e: React.MouseEvent | null, localPage: number) => {
    navigate(`?page=${localPage}&limit=${limit}`);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    navigate(`?page=${page}&limit=${Number(e.target.value)}`);
  };

  const handleRowClick = (e: React.MouseEvent, movieId: number) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <>
      <h1 className={styles.title}>Movies</h1>
      {error && <Alert sx={{my: 3}} severity="error">{error}</Alert>}
      {movies.length > 0 && <MoviesTable data={movies} onRowClick={handleRowClick}/>}
      {total !== 0 && (
        <TablePagination
          className={styles.pagination}
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
