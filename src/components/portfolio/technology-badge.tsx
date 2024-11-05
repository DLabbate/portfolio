import Image, { type StaticImageData } from "next/image";
import react from "public/logos/react.png";
import typescript from "public/logos/typescript.png";
import javascript from "public/logos/javascript.png";
import html from "public/logos/html.png";
import css from "public/logos/css.png";
import nodejs from "public/logos/nodejs.png";
import express from "public/logos/express.png";
import mongodb from "public/logos/mongodb.png";
import csharp from "public/logos/csharp.png";
import dotnet from "public/logos/dotnet.png";
import azure from "public/logos/azure.png";
import cpp from "public/logos/cpp.png";
import java from "public/logos/java.png";
import python from "public/logos/python.png";
import aws from "public/logos/aws.png";
import jest from "public/logos/jest.png";
import bluetooth from "public/logos/bluetooth.png";
import arduino from "public/logos/arduino.png";
import raspberrypi from "public/logos/raspberrypi.png";
import androidstudio from "public/logos/androidstudio.png";
import googlemaps from "public/logos/googlemaps.png";
import opengl from "public/logos/opengl.png";
import unity from "public/logos/unity.png";
import rtl from "public/logos/rtl.png";
import tailwind from "public/logos/tailwind.png";
import firebase from "public/logos/firebase.png";
import reactquery from "public/logos/reactquery.png";
import jira from "public/logos/jira.png";
import nextjs from "public/logos/nextjs.png";
import cypress from "public/logos/cypress.png";
import docker from "public/logos/docker.png";
import kubernetes from "public/logos/kubernetes.png";
import opsgenie from "public/logos/opsgenie.png";
import confluence from "public/logos/confluence.png";
import camunda from "public/logos/camunda.png";
import { Technology } from "@/constants/profile";

type LabelData = {
  displayName: string;
  src: StaticImageData;
};

const LOGO_DATA: Record<Technology, LabelData> = {
  react: {
    displayName: "React",
    src: react,
  },
  reactnative: {
    displayName: "React Native",
    src: react,
  },
  reactquery: {
    displayName: "React Query",
    src: reactquery,
  },
  typescript: {
    displayName: "TypeScript",
    src: typescript,
  },
  javascript: {
    displayName: "JavaScript",
    src: javascript,
  },
  html: {
    displayName: "HTML",
    src: html,
  },
  css: {
    displayName: "CSS",
    src: css,
  },
  nodejs: {
    displayName: "Node.JS",
    src: nodejs,
  },
  express: {
    displayName: "Express.JS",
    src: express,
  },
  mongodb: {
    displayName: "MongoDB",
    src: mongodb,
  },
  csharp: {
    displayName: "C#",
    src: csharp,
  },
  dotnet: {
    displayName: ".NET",
    src: dotnet,
  },
  azure: {
    displayName: "Azure",
    src: azure,
  },
  docker: {
    displayName: "Docker",
    src: docker,
  },
  kubernetes: {
    displayName: "Kubernetes",
    src: kubernetes,
  },
  cpp: {
    displayName: "C++",
    src: cpp,
  },
  java: {
    displayName: "Java",
    src: java,
  },
  python: {
    displayName: "Python",
    src: python,
  },
  aws: {
    displayName: "AWS",
    src: aws,
  },
  jest: {
    displayName: "Jest",
    src: jest,
  },
  rtl: {
    displayName: "React Testing Library",
    src: rtl,
  },
  bluetooth: {
    displayName: "Bluetooth",
    src: bluetooth,
  },
  arduino: {
    displayName: "Arduino",
    src: arduino,
  },
  raspberrypi: {
    displayName: "Raspberry Pi",
    src: raspberrypi,
  },
  androidstudio: {
    displayName: "Android Studio",
    src: androidstudio,
  },
  googlemaps: {
    displayName: "Google Maps",
    src: googlemaps,
  },
  opengl: {
    displayName: "OpenGL",
    src: opengl,
  },
  unity: {
    displayName: "Unity Game Engine",
    src: unity,
  },
  tailwind: {
    displayName: "TailwindCSS",
    src: tailwind,
  },
  firebase: {
    displayName: "Firebase",
    src: firebase,
  },
  jira: {
    displayName: "Jira",
    src: jira,
  },
  confluence: {
    displayName: "Confluence",
    src: confluence,
  },
  opsgenie: {
    displayName: "Opsgenie",
    src: opsgenie,
  },
  nextjs: {
    displayName: "Next.js",
    src: nextjs,
  },
  cypress: {
    displayName: "Cypress",
    src: cypress,
  },
  camunda: {
    displayName: "Camunda",
    src: camunda,
  },
} as const;

type Props = {
  type: Technology;
};

export const TechnologyBadge = ({ type }: Props) => {
  const { src, displayName } = LOGO_DATA[type];
  return (
    <div className="flex h-10 w-auto items-center rounded-full border border-primary-200 bg-white px-3 py-2 text-sm shadow dark:border-primary-800 dark:bg-primary-900">
      <Image src={src} alt={displayName} className="h-6 w-auto" sizes="75px" />
      <span className="ml-2 align-middle font-mono">{displayName}</span>
    </div>
  );
};
