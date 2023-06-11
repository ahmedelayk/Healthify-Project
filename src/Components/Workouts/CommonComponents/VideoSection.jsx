// Style
import "../workout.css";

// Components
import { Row } from "react-bootstrap";

const VideoSection = ({source, header, description}) => {
    return ( 
        <Row>
        <div className="video position-relative">
          <div className="overlay position-absolute top-0 start-0 w-100 h-100 z-2"></div>
          <div className="video-content position-absolute z-3 w-100 h-100 d-flex justify-content-center align-items-center flex-wrap flex-column text-light">
            <h1 className="header1-size">{header}</h1>
            <p className="paragraph-size">{description}</p>
          </div>
          <video className="w-100 h-100" muted autoPlay loop>
            <div></div>
            <source src={source} type="video/mp4" />
          </video>
        </div>
      </Row>
     );
}
 
export default VideoSection;