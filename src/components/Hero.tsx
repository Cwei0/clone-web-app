import { useEffect, useState } from "react";
import "../styles/Hero.css";
import { MovieData, Response } from "../types";
import { axios, requests } from "../services";
import { AxiosResponse } from "axios";

const Hero = () => {
  const [movie, setmovie] = useState<MovieData | null>(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const response: AxiosResponse<Response, any> = await axios.get(
        requests.fetchNetflixOriginals
      );
      setmovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  function truncate(string: string | any, n: number): string {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
};

export default Hero;
