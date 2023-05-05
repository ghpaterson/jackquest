import Image from "next/image";
import Link from "next/link";
import scooter from "../public/scooter.png";

export default function Home() {
  return (
    <main>
      <section className="flex justify-center pt-10">
        <div className="text-9xl text-blue-700 flex flex-col items-center justify-center gap-6">
          <h1>Jack's</h1>
          <h2>SpellQuest</h2>
        </div>
        <Image src={scooter} width={500} />
      </section>
      <section className="flex justify-center">
        <Link href="/menu">
          <button className="bg-orange-500 rounded-xl py-2 px-4 text-4xl text-white">
            Let's Go!
          </button>
        </Link>
      </section>
    </main>
  );
}
