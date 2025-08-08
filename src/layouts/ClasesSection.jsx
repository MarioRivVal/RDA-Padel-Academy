import { useState } from "react";
import s from "../assets/styles/layouts/clasesSection.module.css";
import sBtn from "../assets/styles/components/button.module.css";
import TitleBox from "../components/TitleBox";

import { clases } from "../data/headings";
import ResponsiveImage from "../components/ResponsiveImage";
import Button from "../components/Button";
import ChevronIcon from "../assets/icons/chevron.svg?react";
import { clasesList } from "../data/clasesSection";

export default function ClasesSection() {
  const [openId, setOpenId] = useState(null);

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className={s.container}>
      <TitleBox heading={clases} />
      <div className={s.grid}>
        {clasesList.map((type) => (
          <div
            key={type.id}
            className={`${s.block} ${type.id === "2" ? s.reverse : ""}`}
          >
            <div className={`${s.category} category-${type.id}`}>
              <div
                className={`${s.content} ${
                  openId === type.id ? s.visible : ""
                }`}
              >
                <h4 className={s.title4}>{type.name}</h4>
                <div className={s.description}>
                  <p className={s.paragraph}>{type.paragraph}</p>
                  <Button
                    text="Saber más"
                    onClick={handleButtonClick}
                    className={sBtn.greenBtn}
                  />
                </div>
                <div
                  className={`${s.icon} ${
                    openId === type.id ? s.iconOpen : ""
                  }`}
                  onClick={() => setOpenId(openId === type.id ? null : type.id)}
                >
                  <ChevronIcon width={26} height={26} />
                </div>
              </div>
            </div>
            <ResponsiveImage
              name={`clases/clase-${type.id}`}
              alt="Entrenador Mario enseñando tecnica de golpe"
              className={s.image}
              overlay={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
