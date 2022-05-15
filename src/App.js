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
        item={item}
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
