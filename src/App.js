import { useEffect, useState } from "react";
import Animal from "./components/Animal";
import ButtonChange from "./components/ButtonChange";
import ListaAnimais from "./components/ListaAnimais";
import Navbar from "./components/Navbar";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
      .then((response) => response.json())
      .then((dadosAPI) => setDados(dadosAPI));
  }, []);

  return (

    <>
     <Navbar/>
    <main>
      <section className="container">
        
        <h1>Animais</h1>

        <ListaAnimais dados={dados} />

        <ButtonChange/>
      </section>
    </main>

    </>
  );
}

export default App;