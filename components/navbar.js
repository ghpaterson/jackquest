import Link from "next/link";

export default function NavBar() {
  return (
    <main className="flex justify-between text-blue-800 font-comic text-3xl md:text-4xl py-4 mx-8">
      <h1>SpellQuest</h1>
      <nav>
        <Link href="/menu">Menu</Link>
      </nav>
    </main>
  );
}
