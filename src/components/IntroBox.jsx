import s from "../assets/styles/components/introBox.module.css";
import { greenBtn } from "../assets/styles/components/button.module.css";
import ResponsiveImage from "./ResponsiveImage";
import CheckIcon from "../assets/icons/check.svg?react";
import Button from "./Button";

export default function introBox() {
  const handleClickBtn = () => {
    console.log("boton clicado");
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.titles}>
          <h4 className={s.title4}>Hola!</h4>
          <h3 className={s.title3}>Soy Mario Rodríguez</h3>
        </div>
        <p className={s.paragraph}>
          Entrenador nacional de pádel y fundador de RCA Pádel Academy. Mi
          misión es formar jugadores con pasión y valores.
        </p>

        <div className={s.childrenBox}>
          <ul>
            <li className={s.item}>
              <CheckIcon />
              <span>Pasión</span>
            </li>
            <li className={s.item}>
              <CheckIcon />
              <span>Compromiso</span>
            </li>
            <li className={s.item}>
              <CheckIcon />
              <span>Excelencia</span>
            </li>
          </ul>
          <Button
            text="Más sobre mi"
            onClick={handleClickBtn}
            className={greenBtn}
          />
        </div>
      </div>
      <ResponsiveImage
        name="coach-2"
        alt="El coach Mario sonriendo a la camara con una rqueta de pádel en la mano en un campo de pádel"
        className={s.image}
        overlay={true}
      />
    </div>
  );
}
