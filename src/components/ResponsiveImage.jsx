import s from "../assets/styles/components/responsiveImage.module.css";

const ResponsiveImage = ({ name, ext = "jpg", alt, className, overlay }) => {
  return (
    <picture className={`${className} ${overlay ? s.imageWrapper : ""}`}>
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <img src={`/images/${name}.${ext}`} alt={alt} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;
