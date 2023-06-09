import React from "react";

export default function CycleControl({ stopCycle, startCycle }) {
  return (
    <>
      <div className="flex justify-center gap-2 font-orbitron">
        <button
          onClick={() => {
            stopCycle();
            startCycle(1750);
          }}
          className="bg-spaceDark text-spaceGreen text-base md:text-xl py-2 px-4 rounded-xl"
        >
          SLOW
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(1250);
          }}
          className="bg-spaceDark text-spaceYellow text-base md:text-xl py-2 px-4 rounded-xl"
        >
          MEDIUM
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(750);
          }}
          className="bg-spaceDark text-spaceRed text-base md:text-xl py-2 px-4 rounded-xl"
        >
          FAST
        </button>
      </div>
      <div className="flex justify-center my-6">
        <button
          onClick={() => {
            stopCycle();
          }}
          className="bg-spaceRed font-orbitron text-white text-4xl py-2 px-6 rounded-xl"
        >
          STOP
        </button>
      </div>
    </>
  );
}
