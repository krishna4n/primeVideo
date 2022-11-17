import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {item} = props

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          <img src={item.thumbnailUrl} alt="thumbnail" />
        </button>
      }
      position="center center"
    >
      {close => (
        <div className="model-container">
          <div className="button-icon">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </div>
          <div>
            <ReactPlayer width="840px" height="360px" url={item.videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
