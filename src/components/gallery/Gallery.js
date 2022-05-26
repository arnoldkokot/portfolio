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
      <img {...props} />
    </div>
  );
}

Gallery.Image = Image;

export default Gallery;
