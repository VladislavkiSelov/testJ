import "./Button.scss";

export const Button = ({ text, onClick, buttonClass }) => {
  return (
    <button className={`btn ${buttonClass}`} onClick={onClick}>
      {text || "Button"}
    </button>
  );
};
