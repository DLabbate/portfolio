import { useMDXComponent } from "next-contentlayer/hooks";
import { StyledImage, AutoVideoPlayer, ThemeImage } from "@/components/media";
import CustomLink from "./custom-link";
import Alert from "./alert";

const mdxComponents = {
  Image: StyledImage,
  ThemeImage: ThemeImage,
  a: CustomLink,
  AutoVideoPlayer,
  Alert,
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
