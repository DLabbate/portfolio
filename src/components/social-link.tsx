import { SocialMedia } from "@/constants/profile";
import React from "react";
import { GitHub, Linkedin, Youtube } from "react-feather";

const iconProps = {
  strokeWidth: 1,
  size: 30,
  className: "stroke-light-medium dark:stroke-dark-medium",
} as const;

const Icon = ({ platform }: Omit<SocialMedia, "link">) => {
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
