import { SOCIAL_MEDIA } from "@/constants/profile";
import { SocialLink } from "@/components/social";

const Footer = () => {
  return (
    <footer className="mt-8 flex w-full flex-col items-center justify-center gap-2 p-4 text-sm text-light-medium dark:text-dark-medium">
      <div className="flex items-center gap-4 xl:hidden">
        {SOCIAL_MEDIA.map((item) => (
          <SocialLink key={item.platform} {...item} />
        ))}
      </div>
      <span>© Domenic Labbate. All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
