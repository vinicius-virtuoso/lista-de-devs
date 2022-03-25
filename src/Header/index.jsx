import AddCard from "./AddCard";
import "./style.css";

const Header = ({ logo, pessoas, setPessoas }) => {
  return (
    <header className="header">
      <div className="header-container container">
        <a className="logo" href="/">
          <h3>{logo}</h3>
        </a>
        <AddCard pessoas={pessoas} setPessoas={setPessoas} />
      </div>
    </header>
  );
};

export default Header;
