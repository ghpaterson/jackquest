import Link from "next/link";

export default function Menu() {
  return (
    <main>
      <section>
        <h1>Menu</h1>
      </section>
      <section>
        <div>
          <Link href="/hfone">Exercise One</Link>
        </div>
        <div>
          <Link href="/hftwo">Exercise Two</Link>
        </div>
      </section>
    </main>
  );
}
