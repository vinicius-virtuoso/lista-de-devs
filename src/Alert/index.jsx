import "./style.css";

const Alert = ({ className }) => {
  return (
    <div className={className}>
      <span>Dados não preenchidos!</span>
    </div>
  );
};

export default Alert;
