import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Movie} from "@/components/Movie/types";
import {MouseEvent} from "react";
import {truncateString} from "@/utils";

interface TableProps {
  data: Movie[];
  onRowClick: (e: MouseEvent, movieId: number)=>void;
}

export default function (props: TableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Poster</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">IMDB Rating</TableCell>
            <TableCell align="right">Overview</TableCell>
            <TableCell align="right">Genres</TableCell>
            <TableCell align="right">Runtime</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((movie) => (
            <TableRow
              key={movie.id}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
              style={{
                cursor: "pointer"
              }}
              onClick={e=>props.onRowClick(e, movie.id)}
            >
              <TableCell component="th" scope="row">
                <img src={movie.Poster_Link} alt={movie.Series_Title}/>
                </TableCell>
              <TableCell align="right">{movie.Series_Title}</TableCell>
              <TableCell align="right">{movie.IMDB_Rating}</TableCell>
              <TableCell align="right">{truncateString(movie.Overview, 100)}</TableCell>
              <TableCell align="right">{movie.Genre}</TableCell>
              <TableCell align="right">{movie.Runtime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}