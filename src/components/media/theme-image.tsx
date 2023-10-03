import { ImageProps } from "next/image";
import StyledImage from "./styled-image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
  alt: string;
};

const ThemeImage = ({ srcLight, srcDark, alt, ...rest }: Props) => {
  return (
    <>
      <StyledImage
        {...rest}
        src={srcLight}
        alt={alt}
        className="block dark:hidden"
      />
      <StyledImage
        {...rest}
        src={srcDark}
        alt={alt}
        className="hidden dark:block"
      />
    </>
  );
};

export default ThemeImage;
