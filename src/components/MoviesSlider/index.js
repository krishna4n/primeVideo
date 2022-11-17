import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {children} = props
  const newList = children
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  console.log('hello', newList)

  return (
    <Slider {...settings}>
      {newList.map(each => (
        <MovieItem item={each} key={each.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
