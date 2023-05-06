import Link from "next/link";
import NavBar from "../components/navbar";
import { FaSpaceShuttle } from "react-icons/fa";
import { GiSpaceSuit, GiSpaceShuttle } from "react-icons/gi";

export default function Menu() {
  return (
    <main>
      <NavBar />
      <section className="font-orbitron text-spaceDark text-3xl md:text-7xl flex flex-col items-center justify-center gap-2 py-10">
        <h1>Quest to Find...</h1>
        <h2 className="text-2xl md:text-4xl">High Frequency Words</h2>
      </section>
      <section className="flex flex-col justify-center items-center gap-10 py-6 text-spaceDark text-4xl">
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hfone"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spaceYellow ">Mission Gold</div>
            <GiSpaceShuttle className="text-6xl" />
            <div className="text-xl">We have Lift Off!</div>
          </Link>
        </div>
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hftwo"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spaceRed">Mission Red</div>
            <GiSpaceSuit className="text-6xl" />
            <div className="text-xl">SpaceWalk</div>
          </Link>
        </div>
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hfthree"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spaceGreen">Mission Green</div>
            <FaSpaceShuttle className="text-6xl" />
            <div className="text-xl">Into Orbit</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
