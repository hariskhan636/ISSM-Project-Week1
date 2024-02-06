import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import cardData from "./cardData";
function App() {
  const cardElements = cardData.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">{cardElements}</section>
    </div>
  );
}

export default App;
