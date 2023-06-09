import React from "react";

export default function WordDisplay({ highFrequencyWord }) {
  return (
    <div className="bg-spaceLight font-comic flex justify-center items-center px-6 rounded-xl h-40 w-56 lg:h-60 lg:w-60  text-spaceDark text-7xl hover:cursor-pointer">
      {highFrequencyWord}
    </div>
  );
}
