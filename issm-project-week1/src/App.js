import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import person1 from "./images/person1.png";
import wedding from "./images/wedding-photography.png";
import bike from "./images/mountain-bike.png";
function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexdirection: "row",
        }}
      >
        <Card
          img={person1}
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price="$136"
        />
        <Card
          img={wedding}
          rating={5.0}
          reviewCount={30}
          country="Pakistan"
          title="Learn wedding photography"
          price="$125"
        />
        <Card
          img={bike}
          rating={4.8}
          reviewCount={2}
          country="UK"
          title="Group Mountain Biking"
          price="$50"
        />
      </div>

      <Hero />
    </div>
  );
}

export default App;
