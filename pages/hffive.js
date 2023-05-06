"use client";

import NavBar from "../components/navbar";
import WordDisplay from "../components/worddisplay";
import CycleControl from "../components/cyclecontrol";
import { useState, useRef } from "react";
import { hfFiveArray } from "@/wordArrays/hfFiveArray";

export default function HfFive() {
  const [highFrequencyWord, setHighFrequencyWord] = useState("");
  const highFrequencyWords = hfFiveArray;
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
      <div className="mt-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-orbitron text-spaceOrange text-3xl lg:text-6xl">
            Mission Orange:
          </h1>
          <h1 className="font-orbitron text-3xl lg:text-6xl">Let's Read</h1>
        </div>
        <div className="flex justify-center gap-4 lg:gap-14 my-10 px-2 font-comic">
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