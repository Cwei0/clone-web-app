import { Hero, Navbar, Rows } from "../components";
import { requests, title } from "../services";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homeScreen">
      <Navbar />
      <Hero />
      <Rows
        title={title.netflixOriginals}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Rows title={title.trending} fetchUrl={requests.fetchTrending} />
      <Rows title={title.topRated} fetchUrl={requests.fetchTopRated} />
      <Rows title={title.actionMovies} fetchUrl={requests.fetchActionMovies} />
      <Rows title={title.comedyMovies} fetchUrl={requests.fetchComedyMovies} />
      <Rows title={title.horrorMovies} fetchUrl={requests.fetchHorrorMovies} />
      <Rows
        title={title.romanceMovies}
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Rows
        title={title.documentaries}
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default Homepage;
