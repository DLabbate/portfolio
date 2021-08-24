import React from "react";
import "./Hovercraft.css";
import { sidebarItemsRootLinks } from "../../constants/profile";
import Slider from "../wrappers/Slider";
import Sidebar from "../navigation/Sidebar";
import Section from "../wrappers/Section";
import hovercraftMP4 from "../../assets/projects/thumbnails/hovercraft-trimmed.mp4";
import progress from "../../assets/projects/general/hovercraft/progress.jpg";
import design from "../../assets/projects/general/hovercraft/design.jpg";
import Content from "../wrappers/Content";

const Hovercraft = () => {
  const List = () => {
    return (
      <ul className="hovercraft__hardware">
        <li>(x1) Arduino Microcontroller</li>
        <li>(x1) Foam Board</li>
        <li>(x1) Servo Motor</li>
        <li>(x1) Infrared Sensor</li>
        <li>(x2) Ultrasonic Sensor</li>
        <li>(x2) Fans</li>
        <li>(x2) Batteries</li>
      </ul>
    );
  };
  return (
    <>
      <Sidebar sidebarItems={sidebarItemsRootLinks} />
      <Content>
        <Section title="Autonomous Hovercraft">
          <p className="hovercraft__overview">
            Received 🥇 1st place for a design project in a team of 3 students!
          </p>

          <video
            src={hovercraftMP4}
            className="hovercraft__video"
            autoPlay
            muted
            loop
          />

          <Slider>
            <img
              src={design}
              className="hovercraft__photo"
              alt="Hovercraft Design"
            />
            <div className="hovercraft__info">
              <h2>Fully Autonomous</h2>
              <p>
                In this competition, each team was tasked with building a fully
                autonomous hovercraft capable of navigating a specified track
                and surpassing obstacles of height 1mm to 3mm. Using data from
                the infrared & ultrasonic sensors, we devised a{" "}
                <b>position tracking algorithm</b> that completed the course in
                ⏱️ 20 seconds!
              </p>
            </div>
          </Slider>

          <Slider>
            <div className="hovercraft__info">
              <h2>Hardware Design</h2>
              <p></p>
              <List />
            </div>
            <img
              src={progress}
              className="hovercraft__photo"
              alt="Hovercraft Progess"
            />
          </Slider>
        </Section>
      </Content>
    </>
  );
};

export default Hovercraft;
