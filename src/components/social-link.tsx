import { SocialMedia, SocialPlatform } from "@/constants/profile";
import React from "react";
import { GitHub, Linkedin, Youtube } from "react-feather";

type IconProps = {
  strokeWidth: number;
  size: number;
};
const Icon = ({ platform }: Omit<SocialMedia, "link">) => {
  const iconProps: IconProps = { strokeWidth: 1, size: 30 };

  switch (platform) {
    case "github":
      return <GitHub {...iconProps} />;
    case "linkedin":
      return <Linkedin {...iconProps} />;
    case "youtube":
      return <Youtube {...iconProps} />;
  }
};

const SocialLink = ({ platform, link }: SocialMedia) => {
  return (
    <a href={link}>
      <Icon platform={platform} />
    </a>
  );
};

export default SocialLink;
