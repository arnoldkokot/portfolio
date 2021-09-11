import "./Projects.css";
import aghImage from "../img/agh.png";
export default function Projects() {
  return (
    <section>
      <div className="container">
        <h2>
          <span>02. </span>Some Things I've Built
        </h2>
        <ul className="projects">
          <li>
            <div className="project-content">
              <p className="project-intro">Featured Project</p>
              <h1 className="project-title">Spotify Profile</h1>
              <div className="project-description">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <ul className="tags">
                <li>React</li>
                <li>Styled Components</li>
                <li>Express</li>
                <li>Spotify API</li>
              </ul>
              <div className="links">
                <a href=".">Github</a>
                <a href=".">Redirect</a>
              </div>
            </div>
            <div className="project-image">
              <img src={aghImage} alt="AGH Calculator preview" />
            </div>
          </li>
          <li>
            <div className="project-content">
              <p className="project-intro">Featured Project</p>
              <h1 className="project-title">Spotify Profile</h1>
              <div className="project-description">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <ul className="tags">
                <li>React</li>
                <li>Styled Components</li>
                <li>Express</li>
                <li>Spotify API</li>
              </ul>
              <div className="links">
                <a href=".">Github</a>
                <a href=".">Redirect</a>
              </div>
            </div>
            <div className="project-image">
              <img src={aghImage} alt="AGH Calculator preview" />
            </div>
          </li>
          <li>
            <div className="project-content">
              <p className="project-intro">Featured Project</p>
              <h1 className="project-title">Spotify Profile</h1>
              <div className="project-description">
                A web app for visualizing personalized Spotify data. View your
                top artists, top tracks, recently played tracks, and detailed
                audio information about each track. Create and save new
                playlists of recommended tracks based on your existing playlists
                and more.
              </div>
              <ul className="tags">
                <li>React</li>
                <li>Styled Components</li>
                <li>Express</li>
                <li>Spotify API</li>
              </ul>
              <div className="links">
                <a href=".">Github</a>
                <a href=".">Redirect</a>
              </div>
            </div>
            <div className="project-image">
              <img src={aghImage} alt="AGH Calculator preview" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
