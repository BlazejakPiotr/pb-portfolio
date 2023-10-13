"use client";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Cursor } from "react-simple-typewriter";
type Props = {};

const TypeWriter = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Fullstack Developer",
      "Software Engineer",
      "UI/UX Designer",
      "Cycling Enthusiast",
      "eSports Player",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <h1 className="text-2xl md:5xl font-bold text-light-blue">
      {"and I'm "}
      <span className="text-orange">{text.split(" ")[0]} </span>
      {text.split(" ")[1]}
      <Cursor cursorBlinking={true} cursorColor="#E84646" />
    </h1>
  );
};

export default TypeWriter;
