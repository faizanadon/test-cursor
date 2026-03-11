import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container section-card">
      <h1>Page not found</h1>
      <p>This route is not in the current build map yet.</p>
      <Link href="/" className="button">
        Back to home
      </Link>
    </section>
  );
}
