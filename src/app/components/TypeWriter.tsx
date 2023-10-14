"use client";
import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Cursor } from "react-simple-typewriter";
type Props = {};

const TypeWriter = (props: Props) => {
  const [text] = useTypewriter({
    words: ["Fullstack Developer", "Software Engineer", "UI/UX Designer"],
    loop: true,
    delaySpeed: 2500,
  });
  return (
    <h1 className="text-light-blue text-2xl xl:text-4xl 2xl:text-4xl font-bold">
      <span className="text-orange">{text}</span>
      <Cursor cursorBlinking={true} cursorColor="#E84646" />
    </h1>
  );
};

export default TypeWriter;
