import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Link } from "react-feather";
import RoundedImage from "./rounded-image";

// function RoundedImages(props: ImageProps) {
//   return <Image alt={props.alt} className="rounded-lg" {...props} />;
// }

const mdxComponents = {
  RoundedImage,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-invert lg:prose-lg">
      <Component components={mdxComponents} />
    </article>
  );
}
