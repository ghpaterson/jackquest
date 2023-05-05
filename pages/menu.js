import Link from "next/link";
import NavBar from "../components/navbar";
import { FaSpaceShuttle } from "react-icons/fa";
import { GiSpaceSuit } from "react-icons/gi";

export default function Menu() {
  return (
    <main>
      <NavBar />
      <section className="font-nasa text-spaceDark text-5xl md:text-7xl flex flex-col items-center justify-center gap-2 py-10">
        <h1>Quest to Find...</h1>
        <h2 className="text-3xl md:text-4xl">High Frequency Words</h2>
      </section>
      <section className="flex flex-col justify-center items-center gap-10 py-6 text-spaceDark text-4xl font-comic">
        <div className="bg-spaceLight p-4 rounded-xl gap-2 font-nasa">
          <Link
            href="/hfone"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div>Mission One</div>
            <FaSpaceShuttle className="text-6xl" />
          </Link>
        </div>
        <div className="bg-spaceLight p-4 rounded-xl gap-2 font-nasa">
          <Link
            href="/hfone"
            className="flex flex-col justify-center items-center gap-2"
          >
            <div>Mission two</div>
            <GiSpaceSuit className="text-6xl" />
          </Link>
        </div>
      </section>
    </main>
  );
}
