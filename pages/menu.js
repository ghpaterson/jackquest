import Link from "next/link";
import NavBar from "../components/navbar";
import { FaSpaceShuttle } from "react-icons/fa";
import {
  GiSpaceSuit,
  GiSpaceShuttle,
  GiRingedPlanet,
  GiEarthAsiaOceania,
} from "react-icons/gi";
import { SiStartrek } from "react-icons/si";

export default function Menu() {
  return (
    <main>
      <NavBar />
      <section className="font-orbitron text-spaceDark text-3xl md:text-7xl flex flex-col items-center justify-center gap-2 py-10">
        <h1>Quest to Find...</h1>
        <h2 className="text-2xl md:text-4xl">High Frequency Words</h2>
      </section>
      <section className="flex flex-col justify-center items-center gap-10 py-6 text-spaceDark text-2xl md:text-3xl">
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hfone"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spaceYellow ">Mission Gold</div>
            <SiStartrek className="text-6xl" />
            <div className="text-xl">New Cadet</div>
          </Link>
        </div>
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hftwo"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spaceRed">Mission Red</div>
            <GiSpaceShuttle className="text-6xl" />
            <div className="text-xl">Lift Off</div>
          </Link>
        </div>
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hfthree"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spaceBlue">Mission Blue</div>
            <FaSpaceShuttle className="text-6xl" />
            <div className="text-xl">Into Orbit</div>
          </Link>
        </div>
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hffour"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spaceGreen">Mission Green</div>
            <GiSpaceSuit className="text-6xl" />
            <div className="text-xl">Spacewalk</div>
          </Link>
        </div>
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hffive"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spaceOrange">Mission Orange</div>
            <GiRingedPlanet className="text-6xl" />
            <div className="text-xl">New Planet</div>
          </Link>
        </div>
        <div className="bg-spaceLight w-80 p-4 rounded-xl gap-2 font-orbitron">
          <Link
            href="/hfsix"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div className="text-spacePurple">Mission Indigo</div>
            <GiEarthAsiaOceania className="text-6xl" />
            <div className="text-xl">Return Home</div>
          </Link>
        </div>
      </section>
    </main>
  );
}
