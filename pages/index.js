import Image from "next/image";
import Link from "next/link";
import scooter from "../public/scooter.png";

export default function Home() {
  return (
    <main>
      <section className="md:flex justify-center pt-10">
        <div className="font-comic text-7xl md:text-9xl text-blue-700 flex flex-col items-center justify-center py-4">
          <h1>Jack's</h1>
          <h2>SpellQuest</h2>
        </div>
        <Image src={scooter} width={500} />
      </section>
      <section className="flex justify-center py-8">
        <Link href="/menu">
          <button className="bg-orange-500 rounded-xl py-2 px-4 text-4xl text-white font-comic">
            Let's Go!
          </button>
        </Link>
      </section>
    </main>
  );
}
