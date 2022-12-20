import {useParams} from "react-router-dom";
import {useEffect} from "react";

export default function () {
  const {movieId} = useParams();

  useEffect(() => {
    // Fetch movie data
  }, [movieId]);

  return (
    <>
      Movie #{movieId}
    </>
  );
}
