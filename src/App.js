import Hero from "./components/Hero/Hero.js";
import TravelBlog from "./components/TravelBlog/TravelBlog.js";
import "./App.css";
import data from "./TravelData.js";

function App() {
  const blogs = data.map((x) => {
    return (
      <TravelBlog
        title={x.placeHeading}
        img1={x.placeImg1}
        img2={x.placeImg2}
        img3={x.placeImg3}
        desc={x.placeDescription}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      {blogs}
    </div>
  );
}

export default App;
