import { PageConfig } from "@/components/types";

const topNav = [
  ["/", "Home"],
  ["/platform", "Platform"],
  ["/solutions", "Solutions"],
  ["/retreat-types", "Retreat Types"],
  ["/locations", "Locations"],
  ["/resources", "Resources"],
  ["/case-studies", "Case Studies"],
  ["/pricing", "Pricing"],
  ["/about", "About"],
  ["/contact", "Contact"],
] as const;

const baseModules = [
  {
    title: "Retreat Command Center",
    description:
      "Every participant, payment, rooming assignment, task, and message in one live operational view.",
  },
  {
    title: "Revenue & Payments",
    description:
      "Automate deposits, installment reminders, upsells, and reconciliation without spreadsheet handoffs.",
  },
  {
    title: "Automation & Marketing OS",
    description:
      "Trigger lifecycle journeys from lead to alumni with segmentation and behavior-based communication.",
  },
  {
    title: "Staff & Vendor Operations",
    description:
      "Coordinate instructors, facilitators, travel partners, and property teams with clear accountability.",
  },
  {
    title: "Analytics & Forecasting",
    description:
      "Know occupancy risk, pipeline health, and margin performance before small issues become expensive.",
  },
  {
    title: "Participant Experience",
    description:
      "Deliver premium communication before, during, and after retreat with branded portals and updates.",
  },
];

const pageFactory = (
  slug: string,
  navLabel: string,
  topic: string,
  intent: string,
  image: string,
): PageConfig => ({
  slug,
  navLabel,
  eyebrow: "Cohorts Retreat OS",
  title: `${topic} Without Chaos`,
  subtitle: `Cohorts helps retreat businesses ${intent} by centralizing operations, revenue, communication, and automation into one modern operating system.`,
  ctaPrimary: "Book Retreat OS Simulation",
  ctaSecondary: "See Platform Walkthrough",
  stats: [
    { value: "38%", label: "less manual coordination" },
    { value: "2.4x", label: "faster response cycles" },
    { value: "22%", label: "average upsell lift" },
  ],
  problemTitle: `Why ${topic.toLowerCase()} teams get stuck`,
  problems: [
    "Operations are spread across WhatsApp threads, sheets, and disconnected tools.",
    "Payment tracking, rooming, and pre-arrival communication are managed manually.",
    "Premium retreat brands lose trust when participant experience feels fragmented.",
  ],
  modules: baseModules,
  workflow: [
    {
      step: "Attract",
      detail:
        "Capture leads and route them into automated nurture flows by retreat type and intent stage.",
    },
    {
      step: "Convert",
      detail:
        "Turn qualified leads into paid bookings with guided checkout, deposits, and upsell paths.",
    },
    {
      step: "Deliver",
      detail:
        "Run every retreat milestone with centralized checklists, staff accountability, and live participant timelines.",
    },
    {
      step: "Scale",
      detail:
        "Measure cohort margin and repeatable playbooks to open new retreats without operational drag.",
    },
  ],
  proof: [
    {
      quote:
        "Cohorts replaced six tools and gave us a premium guest experience we can now repeat every season.",
      author: "Sofia Ramirez",
      role: "Founder, Solstice Wellness Retreats",
    },
    {
      quote:
        "We moved from reactive operations to predictable systems. Our team finally has bandwidth to grow.",
      author: "Ethan Wright",
      role: "Operations Director, Elevate Leadership Retreats",
    },
  ],
  faqs: [
    {
      question: "Can we launch without changing our entire stack at once?",
      answer:
        "Yes. Cohorts supports phased adoption so you can start with bookings and operations, then add automations and reporting.",
    },
    {
      question: "Is this only for large retreat companies?",
      answer:
        "No. Founder-led teams and scaling operators use the same framework, with packages adapted to retreat volume and complexity.",
    },
    {
      question: "How quickly can we go live?",
      answer:
        "Most teams run a guided implementation sprint and begin onboarding active retreats in 2–4 weeks.",
    },
  ],
  finalCtaTitle: "Install your Retreat Operating System",
  finalCtaBody:
    "Book a strategy simulation and see how your current workflow maps into a scalable, premium retreat engine.",
  image,
});

const pages: PageConfig[] = [
  pageFactory("/", "Home", "Run Premium Retreats", "scale premium retreats with confidence", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/platform", "Platform", "Operate Retreats", "replace fragmented workflows with one command center", "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/solutions", "Solutions", "Solve Retreat Bottlenecks", "eliminate operational failure points across marketing, sales, and delivery", "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/retreat-types", "Retreat Types", "Tailor Systems by Retreat Type", "run repeatable workflows for yoga, wellness, corporate, and leadership retreats", "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/locations", "Locations", "Scale Retreats by Location", "adapt operations and demand planning by market and destination", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/resources", "Resources", "Use Playbooks That Compound", "turn proven frameworks into consistent growth and delivery outcomes", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/case-studies", "Case Studies", "See Proven Retreat Transformations", "validate what implementation looks like in real retreat businesses", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/pricing", "Pricing", "Invest in Scalable Retreat Systems", "match implementation support to growth stage and retreat complexity", "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/about", "About", "Build the Retreat OS Category", "understand why Cohorts exists and where the category is going", "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"),
  pageFactory("/contact", "Contact", "Plan Your Simulation", "map your retreat growth goals into an executable operating model", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"),
];

const pageMap = new Map(pages.map((page) => [page.slug, page]));

export const navigation = topNav.map(([href, label]) => ({ href, label }));
export const allPages = pages;

export function getPageBySlug(slug: string): PageConfig | undefined {
  return pageMap.get(slug);
}

export function getHomePage(): PageConfig {
  return pageMap.get("/")!;
}
