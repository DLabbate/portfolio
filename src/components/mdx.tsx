import { useMDXComponent } from "next-contentlayer/hooks";
import AutoVideoPlayer from "./media/auto-video-player";
import StyledImage from "./media/styled-image";

const mdxComponents = {
  Image: StyledImage,
  AutoVideoPlayer,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose dark:prose-invert prose-primary lg:prose-lg">
      <Component components={mdxComponents} />
    </article>
  );
}