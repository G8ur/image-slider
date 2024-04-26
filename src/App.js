import logo from './logo.svg';
import './App.css';
import ImageSlider from "./ImageSlider";
import carImg from "./images/img1.jpg"
import carImg2 from "./images/img4.jpg";
import carImg3 from "./images/img3.jpg";

function App() {
  const images = [
    carImg2,
    carImg,
    
    // Add more image URLs here
  ];
  return (
    <div className="App">
      <h1>Image Slider</h1>
      <div style={{ padding: "10px" }}>
        <ImageSlider images={images} />
      </div>
    </div>
  );
}

export default App;
