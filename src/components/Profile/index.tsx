export default function () {
  return (
    <div className="projects-user">
      <div className="projects-left">
        <div className="left-inside">
          <h4>Madina <br/> Rustamova</h4>
        </div>
      </div>
      <div className="projects-right">
        <div className="right-header">
          <h4>Here you can see the list of Madina Rustamova's latest projects:</h4>
        </div>

        <div className="right-body">
          <div className="right-body-list">
            <a href="https://rmadina.github.io/" target="_blank">1. Personal Card</a>
            <p>In this link, you can see my personal card</p>
          </div>

          <div className="right-body-list">
            <a target="_blank" href="https://rmadina.github.io/WeatherAppM/">2. Weather</a>
            <p>This is the weather app which <br/> shows the weather by city name or coordinates</p>
          </div>

          <div className="right-body-list">
            <a href="http://localhost:5173/" target="_blank">3. Movie</a>
            <p>Above link to the movie app</p>
          </div>

          <div className="right-body-list">
            <a className="btnA" target="_blank" href="https://rmadina.github.io/MyFirstWebPage-/">
              To See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}