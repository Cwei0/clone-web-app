import { Hero, Navbar, Rows } from "../components"
import { requests, title } from "../services"
import "../styles/Homepage.css"

const Homepage = () => {
  return (
    <div className="homeScreen">
      <Navbar/>
      <Hero/>
      <Rows 
        title={title.netflixOriginals} 
        fetchUrl={requests.fetchNetflixOriginals}
      />
    </div>
  )
}

export default Homepage