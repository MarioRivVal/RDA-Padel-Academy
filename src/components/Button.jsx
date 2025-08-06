import s from "../assets/styles/components/button.module.css";

export default function Button({ text, onClick, className }) {
  return (
    <button onClick={onClick} className={`${s.button} ${className}`}>
      {text}
    </button>
  );
}
