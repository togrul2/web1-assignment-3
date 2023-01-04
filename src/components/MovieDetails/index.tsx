import fontawesome from '@fortawesome/fontawesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/fontawesome-free-solid';
import './MovieDetails.scss';
import {Props} from "./types";

fontawesome.library.add(faStar);


export default function ({item}: Props) {
  return (
    <div className="movie-details-container">
      <div className="movie-info-container">
        <div className="movie-heading">
          <h3 className="movie-title">{item.Series_Title} ({item.Released_Year})</h3>
          <p className="movie-rating"><span className="rating-star"><FontAwesomeIcon
            icon="star"/></span> {item.IMDB_Rating}</p>
        </div>
        <div className="overview-container">
          <h5 className="movie-overview">{item.Overview}</h5>
        </div>
        <div className="about">
          <p className="about-the-movie-text">About the movie</p>
          <div className="details-container">
            <p className="about-item">Runtime</p>
            <p className="about-item">{item.Runtime}</p>
          </div>
          <div className="details-container">
            <p className="about-item">Genre</p>
            <p className="about-item">{item.Genre}</p>
          </div>
          <div className="details-container">
            <p className="about-item">Released Year</p>
            <p className="about-item">{item.Released_Year}</p>
          </div>
          <div className="details-container">
            <p className="about-item">Director</p>
            <p className="about-item">{item.Director}</p>
          </div>

          <div className="stars-container">
            <p className="stars-text">Stars</p>
            <ul className="stars-list">
              <li className="stars-list-item">{item.Star1}</li>
              <li className="stars-list-item">{item.Star2}</li>
              <li className="stars-list-item">{item.Star3}</li>
              <li className="stars-list-item">{item.Star4}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="movie-image-container">
        <img src={item.Poster_Link} alt='image' className="movie-image"/>
      </div>
    </div>
  );
}

