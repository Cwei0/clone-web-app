import { Hero, Navbar } from "../components"
import "../styles/Homepage.css"

const Homepage = () => {
  return (
    <div className="homeScreen">
      <Navbar/>
      <Hero/>
      {/* Rows */}
    </div>
  )
}

export default Homepage