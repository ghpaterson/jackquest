import React from "react";

export default function CycleControl({ stopCycle, startCycle }) {
  return (
    <>
      <div className="flex justify-center gap-4 ">
        <button
          onClick={() => {
            stopCycle();
            startCycle(1750);
          }}
          className="bg-spaceGreen font-comic text-spaceDark text-xl py-2 px-6 rounded-xl"
        >
          SLOW
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(1250);
          }}
          className="bg-spaceYellow font-comic text-spaceDark text-xl py-2 px-6 rounded-xl"
        >
          MEDIUM
        </button>
        <button
          onClick={() => {
            stopCycle();
            startCycle(750);
          }}
          className="bg-spaceRed font-comic text-spaceDark text-xl py-2 px-6 rounded-xl"
        >
          FAST
        </button>
      </div>
      <div className="flex justify-center my-6">
        <button
          onClick={() => {
            stopCycle();
          }}
          className="bg-spaceRed font-comic text-white text-4xl py-2 px-6 rounded-xl"
        >
          STOP
        </button>
      </div>
    </>
  );
}
