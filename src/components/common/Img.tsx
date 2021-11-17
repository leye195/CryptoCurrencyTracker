type ImgType = {
  src: string;
  alt: string;
};

const Img = ({ src, alt = '' }: ImgType) => {
  return <img src={src} alt={alt} />;
};

export default Img;
