import Link from "next/link";
import { navigation } from "@/lib/siteData";

export function Header() {
  return (
    <header className="site-header glass">
      <div className="container header-inner">
        <Link href="/" className="brand">
          Cohorts
        </Link>
        <nav>
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact" className="button small">
          Book Simulation
        </Link>
      </div>
    </header>
  );
}
