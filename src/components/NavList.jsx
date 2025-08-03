import s from "../assets/styles/layouts/mobileHeader.module.css";

export default function NavList({ isVisible }) {
  return (
    <nav className={`${s.nav} ${isVisible ? s.navVisible : ""}`}>
      <ul className={s.list}>
        <li>
          <a className={s.link} href="#clases">
            Clases
          </a>
        </li>
        <li>
          <a className={s.link} href="#equipos">
            Equipos
          </a>
        </li>
        <li>
          <a className={s.link} href="#eventos">
            Eventos
          </a>
        </li>
        <li>
          <a className={s.link} href="#imagen">
            Imagen Propia
          </a>
        </li>
        <li>
          <a className={s.link} href="#contacto">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
