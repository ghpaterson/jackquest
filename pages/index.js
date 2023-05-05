import Image from "next/image";
import Link from "next/link";
import astronaut from "../public/astronaut.svg";
export default function Home() {
  return (
    <main>
      <section className="md:flex justify-center pt-10">
        <div className=" font-nasa text-6xl md:text-8xl text-spaceDark flex flex-col items-center justify-center py-4">
          <h1>Jack's</h1>
          <h2>SpellQuest</h2>
          <Link href="/menu">
            <button className="bg-spaceDark rounded-xl py-2 px-4 text-4xl text-spaceLilac font-nasa">
              Let's Go!
            </button>
          </Link>
        </div>
        <Image src={astronaut} width={600} />
      </section>
      <section className="flex justify-center py-8"></section>
    </main>
  );
}
