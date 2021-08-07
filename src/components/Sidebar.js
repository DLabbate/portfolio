import React, { useState } from "react";
import "./Sidebar.css";
import { FiAward, FiUser, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

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
        <FiMenu className="sidebar__menu" size={20} onClick={toggleOpen} />
      </div>
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            <FiUser className="sidebar__icon" />
            <span
              className={
                open ? "sidebar__label sidebar__label--open" : "sidebar__label"
              }
            >
              About Me
            </span>
          </a>
        </li>
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            <FiAward className="sidebar__icon" />
            <span
              className={
                open ? "sidebar__label sidebar__label--open" : "sidebar__label"
              }
            >
              Experience
            </span>
          </a>
        </li>
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            <FiAward className="sidebar__icon" />
            <span
              className={
                open ? "sidebar__label sidebar__label--open" : "sidebar__label"
              }
            >
              Projects
            </span>
          </a>
        </li>
        <li className="sidebar__list-item">
          <a className="sidebar__link" href="#">
            <FiAward className="sidebar__icon" />
            <span
              className={
                open ? "sidebar__label sidebar__label--open" : "sidebar__label"
              }
            >
              Accomplishments
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
