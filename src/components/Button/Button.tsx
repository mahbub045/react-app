import style from "./Button.module.css";
interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button
        className={[style.btn, style["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
