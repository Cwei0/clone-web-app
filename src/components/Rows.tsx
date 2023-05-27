import { useEffect, useState } from "react";
import "../styles/Row.css";
import { MovieData, Response } from "../types";
import { AxiosResponse } from "axios";
import { axios } from "../services";

type Prop = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export default function Rows({ title, fetchUrl, isLargeRow = false }: Prop) {
  const [movies, setmovies] = useState<MovieData[] | null>(null);
  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response: AxiosResponse<Response, any> = await axios.get(fetchUrl);
      const {
        data: { results },
      } = response;
      setmovies(results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters"> 
        {movies?.map((movie) => (
            <img
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              key={movie.id}
              src={`
                https://image.tmdb.org/t/p/original${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
              alt={movie.original_name}
            />
        ))}
      </div>
    </div>
  );
}
