import Link from "next/link";
import { GiFallingStar } from "react-icons/gi";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <main className="flex justify-between text-spaceDark font-orbitron text-2xl md:text-4xl py-4 mx-8">
      <div className="flex md:gap-4">
        <h1>SpellQuest</h1>
        <GiFallingStar />
      </div>
      <nav>
        {router.pathname !== "/menu" ? <Link href="/menu">Menu</Link> : null}
      </nav>
    </main>
  );
}
