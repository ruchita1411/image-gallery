import "./App.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useRef } from "react";

function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1027/1000/600/",
      thumbnail: "https://picsum.photos/id/1027/250/150/",
    },
    {
      original: "https://picsum.photos/id/1016/1000/600/",
      thumbnail: "https://picsum.photos/id/1016/250/150/",
    },
    {
      original: "https://picsum.photos/id/1020/1000/600/",
      thumbnail: "https://picsum.photos/id/1020/250/150/",
    },
    {
      original: "https://picsum.photos/id/1028/1000/600/",
      thumbnail: "https://picsum.photos/id/1028/250/150/",
    },
  ];
  const slideshowref = useRef();

  function playSlides() {
    slideshowref.current.play();
  }
  return (
    <div className="App">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={1000}
        slideOnThumbnailOver={true}
        showIndex={true}
        onPlay={() => {
          alert("slideshow is playing!");
        }}
      />
      <button onClick={playSlides}>Play</button>
    </div>
  );
}

export default App;
