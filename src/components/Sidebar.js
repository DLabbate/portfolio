import React, { useState } from "react";
import "./Sidebar.css";
import * as FeatherIcons from "react-icons/fi";

const Sidebar = ({ sidebarItems }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const renderSidebarItems = () =>
    sidebarItems.map((item) => {
      const Icon = FeatherIcons[item.icon];
      return (
        <li className="sidebar__list-item" key={item.label}>
          <a className="sidebar__link" href="#">
            <Icon className="sidebar__icon" />
            <span
              className={
                open ? "sidebar__label sidebar__label--open" : "sidebar__label"
              }
            >
              {item.label}
            </span>
          </a>
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
