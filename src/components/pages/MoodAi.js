import React from "react";
import "./MoodAi.css";
import moodai_demo from "../../assets/projects/general/moodai/moodai-demo.mp4";
import { sidebarItemsRootLinks } from "../../constants/profile";
import Sidebar from "../navigation/Sidebar";
import Section from "../wrappers/Section";
import logo from "../../assets/projects/thumbnails/moodai.jpg";

const MoodAi = () => {
  return (
    <>
      <Sidebar sidebarItems={sidebarItemsRootLinks} />
      <div className="content">
        <Section title="Mood.AI" />
        <img src={logo} className="moodai__logo" />
        <p className="moodai__slogan">"A mental health app for a modern age"</p>
        <video className="moodai__demo" src={moodai_demo} autoPlay muted loop />
      </div>
    </>
  );
};

export default MoodAi;
