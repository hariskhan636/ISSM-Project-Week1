import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cardData from "./cardData";
function App() {
  const cardElements = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.img}
        rating={card.rating}
        reviewCount={card.reviewCount}
        country={card.country}
        title={card.title}
        price={card.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexdirection: "row",
        }}
      >
        {cardElements}
      </div>

      <Hero />
    </div>
  );
}

export default App;
