import React, { useState } from "react";
import "./Sidebar.css";
import * as FeatherIcons from "react-icons/fi";
import { Link } from "react-scroll";

const Sidebar = ({ sidebarItems }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  // Renders a link with a smooth scroll to a component
  const renderLink = (item) => {
    const Icon = FeatherIcons[item.icon];
    return (
      <Link
        className="sidebar__link"
        to={item.to}
        smooth={true}
        duration={1000}
      >
        <Icon className="sidebar__icon" />
        <span
          className={
            open ? "sidebar__label sidebar__label--open" : "sidebar__label"
          }
        >
          {item.label}
        </span>
      </Link>
    );
  };

  // Renders a link to an external url
  const renderLinkExternal = (item) => {
    const Icon = FeatherIcons[item.icon];
    return (
      <a className="sidebar__link" href={item.link}>
        <Icon className="sidebar__icon" />
        <span
          className={
            open ? "sidebar__label sidebar__label--open" : "sidebar__label"
          }
        >
          {item.label}
        </span>
      </a>
    );
  };

  const renderSidebarItems = () =>
    sidebarItems.map((item) => {
      return (
        <li className="sidebar__list-item" key={item.label}>
          {item.link ? renderLinkExternal(item) : renderLink(item)}
          <div
            className={
              open
                ? "sidebar__tooltip sidebar__tooltip--open"
                : "sidebar__tooltip"
            }
          >
            {item.label}
          </div>
        </li>
      );
    });

  return (
    <div className={open ? "sidebar sidebar--open" : "sidebar"}>
      <div className="sidebar__header">
        <span
          className={
            open ? "sidebar__logo sidebar__logo--open" : "sidebar__logo"
          }
        >
          Domenic Labbate
        </span>

        <FeatherIcons.FiMenu
          className="sidebar__menu"
          size={20}
          onClick={toggleOpen}
        />
      </div>
      <ul className="sidebar__list">{renderSidebarItems()}</ul>
    </div>
  );
};

export default Sidebar;
