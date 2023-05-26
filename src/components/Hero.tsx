import "../styles/Hero.css";

const Hero = () => {
  return (
    <header 
      className="banner" 
      style={{
      backgroundSize : "cover",
      backgroundImage : `url('https://i.imgur.com/e1hLQ2m.png')`,
      backgroundPosition : 'center center'
    }}>
      <div className="banner__contents">
        <h1 className="banner__title">
            Movie name
        </h1>
      </div>
    </header>
  )
}

export default Hero