import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import "./Gallery.css";

function Gallery({ title, children }) {
  return (
    <>
      <h3>{title}</h3>
      <div className="gallery">{children}</div>
    </>
  );
}

function Image(props) {
  return (
    <div className="gallery-item">
      <Zoom
        wrapStyle={{ position: "absolute" }}
        overlayBgColorEnd="rgba(0, 0, 0, 0.20)"
        overlayBgColorStart="rgba(0, 0, 0, 0.0)"
      >
        <img {...props} alt={props.src.split(".")[0]} />
      </Zoom>
    </div>
  );
}

Gallery.Image = Image;

export default Gallery;
