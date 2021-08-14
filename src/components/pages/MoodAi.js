import React from "react";
import "./MoodAi.css";
import moodai_demo from "../../assets/projects/general/moodai/moodai-demo.mp4";
import { sidebarItemsRootLinks } from "../../constants/profile";
import Sidebar from "../navigation/Sidebar";
import Section from "../wrappers/Section";
import logo from "../../assets/projects/thumbnails/moodai.jpg";
import home from "../../assets/projects/general/moodai/moodai-home.jpg";
import Slider from "../Slider";
import gsr from "../../assets/projects/general/moodai/gsr.png";

const MoodAi = () => {
  const List = () => {
    return (
      <ul className="moodai__list">
        <li>
          Patients able to upload a mood log consisting of validated
          questionnaires and free text
        </li>
        <li>
          Patient text analyzed using Natural Language Processing to compute
          emotion intensity
        </li>
        <li>Key phrase extraction of patient text</li>
        <li>Option of recording physiological skin conductance</li>
        <li>Practitioners able to view progression of patients</li>
      </ul>
    );
  };

  const Video = () => {
    return (
      <video className="moodai__demo" src={moodai_demo} autoPlay muted loop />
    );
  };

  return (
    <>
      <Sidebar sidebarItems={sidebarItemsRootLinks} />
      <div className="content">
        <Section title="Mood.AI" />
        <p className="moodai__slogan">"A mental health app for a modern age"</p>
        <img src={logo} className="moodai__logo" alt="Mood.AI Demo" />

        <Slider>
          <div className="moodai__info">
            <h2>Innovative & Insightful</h2>
            <List />
          </div>
          <Video />
        </Slider>

        <Slider>
          <img src={home} className="moodai__demo" alt="Mood.AI Demo" />
          <div className="moodai__info">
            <h2>State of the Art</h2>
            <p>
              The developed <b>Cross-Platform</b> mobile app utilizes bleeding
              edge technologies including <b>Machine Learning</b>, Bluetooth Low
              Energy <b>(BLE)</b>, and <b>Cloud Deployments</b>
            </p>
          </div>
        </Slider>

        <Slider>
          <div className="moodai__info">
            <h2>Cognitive & Physiological Data</h2>
            <p>
              In addition to symptom data captured by the patient’s mood logs,
              the application also has the option of recording physiological
              skin conductance via a GSR sensor, as this metric is very closely
              related to emotional arousal
            </p>
          </div>
          <img src={gsr} className="moodai__gsr" alt="Mood.AI Demo" />
        </Slider>
      </div>
    </>
  );
};

export default MoodAi;
