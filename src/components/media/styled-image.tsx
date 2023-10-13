import clsx from "clsx";
import Image, { ImageProps } from "next/image";

const StyledImage = ({ alt, src, className, ...rest }: ImageProps) => {
  return (
    <Image
      className={clsx("rounded-md", className)}
      alt={alt}
      src={src}
      sizes="(max-width: 1024px) 100vw, 1024px"
      quality={100}
      {...rest}
    />
  );
};

export default StyledImage;
