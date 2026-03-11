import Image from "next/image";
import Link from "next/link";
import { PageConfig } from "@/components/types";

export function MarketingPage({ page }: { page: PageConfig }) {
  return (
    <div className="container page-stack">
      <section className="section-card glass hero-grid">
        <div>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p className="subtitle">{page.subtitle}</p>
          <div className="button-row">
            <Link href="/contact" className="button">
              {page.ctaPrimary}
            </Link>
            <Link href="/platform" className="button ghost">
              {page.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="image-wrap glass-inner">
          <Image src={page.image} alt={page.title} fill className="hero-image" priority />
        </div>
      </section>

      <section className="section-card glass stats-grid">
        {page.stats.map((stat) => (
          <article key={stat.label}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="section-card glass">
        <h2>{page.problemTitle}</h2>
        <ul className="bullet-list">
          {page.problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </section>

      <section className="section-card glass">
        <h2>Platform modules that run your retreat lifecycle</h2>
        <div className="card-grid">
          {page.modules.map((module) => (
            <article key={module.title} className="glass-inner module-card">
              <h3>{module.title}</h3>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card glass">
        <h2>How Cohorts works in practice</h2>
        <div className="workflow-grid">
          {page.workflow.map((item, index) => (
            <article key={item.step} className="glass-inner workflow-step">
              <span>0{index + 1}</span>
              <h3>{item.step}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card glass">
        <h2>Proof from retreat operators</h2>
        <div className="card-grid">
          {page.proof.map((item) => (
            <article key={item.author} className="glass-inner testimonial">
              <p>“{item.quote}”</p>
              <h4>{item.author}</h4>
              <small>{item.role}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card glass">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {page.faqs.map((faq) => (
            <article key={faq.question} className="glass-inner faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card glass final-cta">
        <h2>{page.finalCtaTitle}</h2>
        <p>{page.finalCtaBody}</p>
        <Link href="/contact" className="button">
          Book Retreat OS Simulation
        </Link>
      </section>
    </div>
  );
}
