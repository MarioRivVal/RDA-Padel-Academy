// components/Button.jsx
import s from "../assets/styles/components/button.module.css";

export default function Button({
  text,
  href,
  onClick,
  className = "",
  target,
}) {
  const classes = `${s.button} ${className}`;

  if (href) {
    // Si quieres abrir en nueva pestaña, pasa target="_blank"
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} type="button">
      {text}
    </button>
  );
}
