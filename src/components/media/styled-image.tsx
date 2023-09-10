import Image, { ImageProps } from "next/image";

const StyledImage = ({ alt, src, ...rest }: ImageProps) => {
  return <Image className="rounded-md" alt={alt} src={src} {...rest} />;
};

export default StyledImage;
