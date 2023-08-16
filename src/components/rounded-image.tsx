import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const RoundedImage = ({ alt, src, width, height }: Props) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className="rounded-md"
      // sizes="100vw"
      // style={{
      //   width: "100%",
      //   height: "auto",
      // }}
    />
  );
};

export default RoundedImage;
