import { useState } from "react";
import "./App.css";
import Card from "./Card";
import Header from "./Header";

function App() {
  const [pessoas, setPessoas] = useState([
    { name: "Vinicius", age: "23", city: "Florianópolis" },
    { name: "Maria", age: "19", city: "São Paulo" },
  ]);

  function deleteCard(ind) {
    let remove = pessoas.filter((pessoa, index) => index !== ind);
    setPessoas(remove);
  }

  return (
    <div className="App">
      <Header logo="Lista de Devs" pessoas={pessoas} setPessoas={setPessoas} />
      <div className="content container">
        {pessoas.map((card, index) => (
          <Card card={card} key={index} onClick={() => deleteCard(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
