import Link from "next/link";

export default function Menu() {
  return (
    <main>
      <section className="font-comic text-black text-4xl flex flex-col items-center justify-center gap-2 py-10">
        <h1>Quest to Find...</h1>
        <h2>High Frequency Words</h2>
      </section>
      <section className="flex flex-col justify-center items-center gap-10 py-10 text-white text-4xl font-comic">
        <div className="bg-orange-500 h-20 w-56 rounded-xl flex items-center justify-center">
          <Link href="/hfone">Mission One</Link>
        </div>
        <div className="bg-orange-500 h-20 w-56 rounded-xl flex items-center justify-center">
          <Link href="/hftwo">Mission Two</Link>
        </div>
      </section>
    </main>
  );
}
