import React from "react";
import "./ContactLink.css";
import * as FeatherIcons from "react-icons/fi";

const ContactLink = ({ icon, url }) => {
  const Icon = FeatherIcons[icon];
  return (
    <a className="contact-link" href={url}>
      <Icon className="contact-icon" />
    </a>
  );
};

export default ContactLink;
