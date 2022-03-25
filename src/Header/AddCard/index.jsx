import { useState } from "react";
import Alert from "../../Alert";
import "./style.css";

class Pessoa {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const AddCard = ({ pessoas, setPessoas }) => {
  const [error, setError] = useState(false);

  function addCard() {
    let name = window.prompt("Qual o Nome?");
    let age = window.prompt("Qual a idade?");
    let city = window.prompt("Qual a cidade?");

    if (name !== "" || age !== "" || city !== "") {
      let newPeople = new Pessoa(name, age, city);
      setPessoas([...pessoas, newPeople]);
      alert("Adicionado!");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
    }
  }
  return (
    <div className="addCard">
      <button className="btn-add" id="add" onClick={addCard}>
        Adicionar Novo <span>+</span>
      </button>
      <Alert className={error ? "alert alert-danger" : "alert"} />
    </div>
  );
};

export default AddCard;
