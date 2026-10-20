import JatekTer from "./components/JatekTer.tsx";
import { PALYA } from "./palya.tsx";
import { useState } from "react";
import "./App.css";

function App() {
  const CIM = "LightOut";
  const NEV = "Mágori Ferenc Ferdinánd";

  const [lista, setLista] = useState<boolean[][]>(PALYA);

  function ujJatek() {
    setLista(PALYA.map((sor) => [...sor]));
  }

  function cellaKattintas(sor: number, oszlop: number) {
    console.log("Kattintottam: ", sor, oszlop);

    setLista((elozo) =>
      elozo.map((sorTomb, si) =>
        sorTomb.map((ertek, oi) =>
          Math.abs(si - sor) + Math.abs(oi - oszlop) <= 1 ? !ertek : ertek,
        ),
      ),
    );
  }

  const nyert = lista.every((sor) => sor.every((cella) => !cella));

  return (
    <main>
      <header>{CIM}</header>
      <article>
        <JatekTer lista={lista} cellaKattintas={cellaKattintas} />
        {nyert && <p>Kikapcsolt az összes lámpa!</p>}
        <button onClick={ujJatek}>Új játék</button>
      </article>
      <footer>
        <p>&copy;{NEV}</p>
      </footer>
    </main>
  );
}

export default App;
