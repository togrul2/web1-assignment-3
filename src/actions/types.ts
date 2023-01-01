import {Movie} from "@/components/Movie/types";

export interface ListMoviesResponse {
  data: Movie[];
  total: number;
  error: string | null;
}

export interface MovieDetailsResponse {
  data: Movie | null;
  error: string | null;
}

export interface MessageResponse {
  error: string | null;
}

export interface SendMessageBody {
  subject: string;
  email: string;
  content: string;
}
