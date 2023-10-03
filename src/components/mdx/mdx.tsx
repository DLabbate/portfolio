import { useMDXComponent } from "next-contentlayer/hooks";
import { StyledImage, AutoVideoPlayer, ThemeImage } from "@/components/media";
import InlineCode from "./inline-code";
import CustomLink from "./custom-link";
import Banner from "./banner";

const mdxComponents = {
  Image: StyledImage,
  ThemeImage: ThemeImage,
  code: InlineCode,
  a: CustomLink,
  AutoVideoPlayer,
  Banner,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-primary dark:prose-invert lg:prose-lg">
      <Component components={mdxComponents} />
    </article>
  );
}
