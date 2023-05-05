"use client";

import NavBar from "../components/navbar";
import WordDisplay from "../components/worddisplay";
import CycleControl from "../components/cyclecontrol";
import { useState, useRef } from "react";
import { hfOneArray } from "../wordArrays/hfOneArray";

export default function HighFrequencyOne() {
  const [highFrequencyWord, setHighFrequencyWord] = useState("");
  const highFrequencyWords = hfOneArray;
  const intervalId = useRef(null);

  function startCycle(intervalTime) {
    let index = Math.floor(Math.random() * highFrequencyWords.length);
    setHighFrequencyWord(highFrequencyWords[index]);
    intervalId.current = setInterval(() => {
      index = Math.floor(Math.random() * highFrequencyWords.length);
      setHighFrequencyWord(highFrequencyWords[index]);
    }, intervalTime);
  }

  function stopCycle() {
    clearInterval(intervalId.current);
  }

  return (
    <main>
      <NavBar />
      <div className="mt-20 md:mt-10 text-spaceDark">
        <div className="flex flex-col justify-center items-center gap-2 font-nasa">
          <h1 className=" text-5xl lg:text-6xl">Mission One...</h1>
          <h1 className=" text-5xl lg:text-6xl">Let's Read</h1>
        </div>
        <div className="flex justify-center gap-4 lg:gap-14 my-10 px-2 ">
          <WordDisplay highFrequencyWord={highFrequencyWord} />
        </div>
        <CycleControl
          startCycle={startCycle}
          stopCycle={stopCycle}
          highFrequencyWord={highFrequencyWord}
        />
      </div>
    </main>
  );
}
