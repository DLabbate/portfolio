// TODO: Use CldVideoPlayer from next-cloudinary when the following issue is solved: https://github.com/colbyfayock/next-cloudinary/issues/248

type Props = {
  alt: string;
  src: string;
  width: number;
  height: number;
  type: string;
};

const AutoVideoPlayer = ({ src, width, height, type }: Props) => {
  return (
    <video
      className="rounded-md"
      width={width}
      height={height}
      loop
      autoPlay
      muted
    >
      <source src={src} type={type} />
    </video>
  );
};

export default AutoVideoPlayer;
