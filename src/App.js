import './App.css';
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Card from "./components/card"
import data from './components/data';

function App() {

  const cards = data.map(function(item) {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        stars={item.stats.rating}
        reviews={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        rate={item.price}
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
