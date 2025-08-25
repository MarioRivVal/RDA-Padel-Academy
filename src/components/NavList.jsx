import s from "../assets/styles/components/navList.module.css";

export default function NavList({ type }) {
  return (
    <ul className={` ${s.list} ${type === "mobile" ? s.mobile : s.desktop}`}>
      <li>
        <a className={s.link} href="#clases">
          Clases
        </a>
      </li>
      <li>
        <a className={s.link} href="#eventos">
          Eventos
        </a>
      </li>
      <li>
        <a className={s.link} href="#equipos">
          Equipos
        </a>
      </li>
      <li>
        <a className={s.link} href="#coach">
          Coach
        </a>
      </li>
      <li>
        <a className={s.link} href="#imagen">
          Imagen
        </a>
      </li>
      <li>
        <a className={s.link} href="#contacto">
          Contacto
        </a>
      </li>
    </ul>
  );
}
