import "./style.css";

const Card = ({ card, onClick }) => {
  return (
    <div className="card">
      <div className="box-info">
        <h3 className="card-name">
          Dev: <span>{card.name}</span>
        </h3>
        <button className="card-btn">Editar</button>
      </div>
      <div className="box-info">
        <p className="card-age">
          Idade: <span>{card.age}</span>
        </p>
        <button className="card-btn">Editar</button>
      </div>
      <div className="box-info">
        <p className="card-city">
          Cidade: <span>{card.city}</span>
        </p>
        <button className="card-btn">Editar</button>
      </div>
      <button className="card-delete" onClick={onClick}>
        Excluir
      </button>
    </div>
  );
};
export default Card;
