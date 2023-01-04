import {Movie} from "@/components/MovieDetails/types";
import {MouseEvent} from "react";

export interface TableProps {
  data: Movie[];
  onRowClick: (e: MouseEvent, movieId: number) => void;
}