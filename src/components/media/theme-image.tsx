import { ImageProps } from "next/image";
import StyledImage from "./styled-image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
  alt: string;
  caption: string;
};

const ThemeImage = ({ srcLight, srcDark, alt, caption, ...rest }: Props) => {
  return (
    <figure className="flex flex-col items-center">
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
      <figcaption className="text-sm text-light-medium dark:text-dark-medium">
        {caption}
      </figcaption>
    </figure>
  );
};

export default ThemeImage;
