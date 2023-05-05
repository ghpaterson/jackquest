import Link from "next/link";
import { GiFallingStar } from "react-icons/gi";

export default function NavBar() {
  return (
    <main className="flex justify-between text-spaceDark font-nasa text-3xl md:text-4xl py-4 mx-8">
      <div className="flex gap-4">
        <h1>SpellQuest</h1>
        <GiFallingStar />
      </div>
      <nav>
        <Link href="/menu">Menu</Link>
      </nav>
    </main>
  );
}
