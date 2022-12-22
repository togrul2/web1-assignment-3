import {Movie} from "@/components/Movie/types";

export enum PaginatorActionTypes {
  change_page,
  change_limit,
  set_total
}

export type PaginatorState = {
  page: number,
  limit: number,
  total: number
};

export type PaginatorAction = {
  type: PaginatorActionTypes,
  payload: number
};

export type MovieItemProps = {
  item: Movie,
  xs: number
};
