export type PageConfig = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { label: string; value: string }[];
  problemTitle: string;
  problems: string[];
  modules: { title: string; description: string }[];
  workflow: { step: string; detail: string }[];
  proof: { quote: string; author: string; role: string }[];
  faqs: { question: string; answer: string }[];
  finalCtaTitle: string;
  finalCtaBody: string;
  image: string;
};
