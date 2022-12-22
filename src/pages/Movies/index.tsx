import React, {useEffect, useReducer, useState} from "react";
import {getMovies} from "@/actions/movieActions";
import {Movie} from "@/components/Movie/types";
import MovieCard from "@/components/Movie";
import Grid from '@mui/material/Grid';
import {TablePagination} from "@mui/material";
import {MovieItemProps, PaginatorAction, PaginatorActionTypes, PaginatorState} from "@/pages/Movie/types";

export default function Movies() {
  const paginatorReducer = (state: PaginatorState, action: PaginatorAction) => {
    switch (action.type) {
      case PaginatorActionTypes.change_page:
        return {...state, page: action.payload};
      case PaginatorActionTypes.change_limit:
        return {...state, limit: action.payload};
      case PaginatorActionTypes.set_total:
        return {...state, total: action.payload};
      default:
        return state;
    }
  };

  const [paginatorState, dispatchPaginator] = useReducer(paginatorReducer,{page: 1, limit: 10, total: 100});
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch movies data
    (async () => {
      const {data, total, error} = await getMovies(paginatorState.page, paginatorState.limit);

      if (error !== null) {
        setError(error);
        return;
      }

      dispatchPaginator({type: PaginatorActionTypes.set_total, payload: total});
      setMovies(data);
      setError(null);
    })()
  }, [paginatorState]);


  const handleChangePage = (e: React.MouseEvent<HTMLElement> | null, page: number) => {
    dispatchPaginator({type: PaginatorActionTypes.change_page, payload: page});
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const limit = Number(e.target.value);
    dispatchPaginator({type: PaginatorActionTypes.change_limit, payload: limit});
  };

  const MovieItem = ({item, xs}: MovieItemProps) => (
    <Grid item xs={xs}><MovieCard item={item}/></Grid>
  );

  return (
    <>
      <h1>Movies</h1>
      {error && <h3>{error}</h3>}

      <Grid container spacing={2}>
        {movies.map(movie => (
          <MovieItem xs={4} key={movie.id} item={movie}/>
        ))}
      </Grid>

      <TablePagination
        component="div"
        count={paginatorState.total}
        page={paginatorState.page}
        rowsPerPage={paginatorState.limit}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
