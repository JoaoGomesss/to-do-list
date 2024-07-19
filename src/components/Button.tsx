import { FunctionComponent } from "react";
import "./Button.css";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="add-button">
      {children}
    </button>
  );
};

export default Button;
