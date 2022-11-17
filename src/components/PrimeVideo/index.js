import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMoviesList = moviesList.filter(
      each => each.categoryId === 'ACTION',
    )
    const comedyMoviesList = moviesList.filter(
      each => each.categoryId === 'COMEDY',
    )

    return (
      <div className="primevideo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="website-logo"
        />
        <div className="action-movies-container">
          <h1>Action Movies</h1>
          <div className="slider-container">
            <MoviesSlider>{actionMoviesList}</MoviesSlider>
          </div>
        </div>
        <div className="comedy-movies-container">
          <h1>Comedy Movies</h1>
          <div className="slider-container">
            <MoviesSlider>{comedyMoviesList}</MoviesSlider>
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
