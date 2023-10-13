import { SocialMedia } from "@/constants/profile";
import React from "react";
import { GitHub, Linkedin, Youtube } from "react-feather";

const ICON_PROPS = {
  strokeWidth: 1,
  size: 30,
  className: "stroke-light-medium dark:stroke-dark-medium",
} as const;

const Icon = ({ platform }: Omit<SocialMedia, "link">) => {
  switch (platform) {
    case "github":
      return <GitHub {...ICON_PROPS} />;
    case "linkedin":
      return <Linkedin {...ICON_PROPS} />;
    case "youtube":
      return <Youtube {...ICON_PROPS} />;
  }
};

const SocialLink = ({ platform, link }: SocialMedia) => {
  return (
    <a href={link} aria-label={platform}>
      <Icon platform={platform} />
    </a>
  );
};

export default SocialLink;
