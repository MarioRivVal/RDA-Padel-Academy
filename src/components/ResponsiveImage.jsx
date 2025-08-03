const ResponsiveImage = ({ name, ext = "jpg", alt, className }) => {
  return (
    <picture className={className}>
      <source srcSet={`/images/${name}.webp`} type="image/webp" />
      <img src={`/images/${name}.${ext}`} alt={alt} loading="lazy" />
    </picture>
  );
};

export default ResponsiveImage;
