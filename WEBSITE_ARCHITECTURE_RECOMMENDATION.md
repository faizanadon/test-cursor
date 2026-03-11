# Cohorts Website Architecture Recommendation

## Executive recommendation
Use **Next.js (App Router + TypeScript)**, not plain React, for this project.

Why:
- Your strategy is SEO-heavy (100+ pages + content clusters).
- You need fast page speed and strong metadata control.
- You need programmatic page generation for location × retreat-type pages.
- You need a codeless CMS workflow for a content team.

This is exactly where Next.js gives you a major advantage over a client-rendered React app.

---

## Best-fit stack

### Frontend
- **Next.js 14+ (App Router, TypeScript)**
- **Server Components by default** for speed and SEO
- **ISR (Incremental Static Regeneration)** for large SEO page sets
- **next/image** + optimized fonts for Core Web Vitals

### CMS (codeless content editing)
Recommended options:
1. **Sanity** (best flexibility + strong editor experience)
2. **Contentful** (enterprise-friendly + structured workflows)
3. **Strapi Cloud** (if you want more ownership/control)

For your use case, I’d choose **Sanity** first because:
- Great for modular pages (hero, proof, CTA, FAQs, case studies)
- Easy content model for “retreat type”, “location”, “solution”, “guide”, and “post”
- Good developer velocity for large-scale SEO systems

---

## Information architecture (aligned to your sitemap)

### Primary routes
- `/`
- `/platform`
- `/solutions`
- `/retreat-types`
- `/locations`
- `/resources`
- `/case-studies`
- `/pricing`
- `/about`
- `/contact`
- `/blog`

### Scalable dynamic route groups
- `/solutions/[slug]`
- `/retreat-types/[slug]`
- `/locations/[slug]`
- `/resources/[slug]`
- `/blog/[slug]`
- `/case-studies/[slug]`
- `/compare/[slug]` (e.g., cohorts-vs-eventbrite)
- `/[retreatType]-retreat-software-[location]` (or a normalized nested structure)

Recommended normalized URL structure for maintainability:
- `/retreat-types/[retreatType]/locations/[location]`

You can still expose “SEO vanity URLs” later via rewrites if needed.

---

## SEO system design (100–300 page engine)

Your matrix model is correct: **Retreat Type × Location**.

### Implementation pattern
- Store retreat types and locations as separate content types in CMS.
- Auto-generate matrix pages using relationships.
- Use shared page modules + unique intro/outro fields.
- Enforce minimum content quality fields per page:
  - unique H1
  - unique intro paragraph
  - local challenge section
  - localized CTA copy
  - FAQ entries

### Metadata and schema
Each page should include:
- custom `title`
- custom `meta description`
- canonical URL
- Open Graph fields
- JSON-LD schema (Organization, WebPage, Article, FAQ where relevant)

### Internal linking rules
Build a reusable “link graph” component so every page can automatically link to:
- Platform
- Relevant solution page
- Relevant retreat type
- Relevant location
- Pricing
- Book Simulation CTA

---

## Conversion architecture (matches your funnel)

Primary CTA everywhere: **Book Retreat OS Simulation**.

### Recommended funnel blocks
- Sticky CTA in header
- Mid-page CTA after problem/solution section
- Final CTA near FAQ/proof section
- Contextual CTA in blog side rail + inline content blocks

Flow:
1. Blog/Guide
2. Solution page
3. Platform page
4. Booking page (high-intent form + calendar)

---

## CMS content model (practical starter)

Create these content types:
- `page` (home/platform/pricing/about/contact)
- `solution`
- `retreatType`
- `location`
- `resourceGuide`
- `blogPost`
- `caseStudy`
- `comparisonPage`
- `siteSettings` (global nav, footer, CTA labels)
- `seoSettings` (defaults)

Reusable sections/components:
- Hero
- Problem/Symptom list
- Feature grid
- Social proof/testimonials
- Metrics bar
- FAQ
- CTA block

This enables true codeless composition without redesigning pages each time.

---

## Build priority (first 30–45 days)

### Phase 1 (Foundation)
1. Design system + core layout
2. CMS schema + editorial workflow
3. Core pages: Home, Platform, Pricing, Contact
4. Analytics + conversion tracking

### Phase 2 (Revenue pages)
1. Top solution pages
2. Top retreat type pages (Yoga, Wellness)
3. Top location pages (Bali, Costa Rica)
4. 3 case studies

### Phase 3 (SEO scale)
1. Matrix pages rollout
2. 10–20 blog posts
3. 2 pillar guides
4. Competitor comparison pages

---

## Performance requirements

Set non-negotiable targets:
- Lighthouse Performance ≥ 90 on core templates
- LCP < 2.5s on mobile
- CLS < 0.1
- INP “good” range

Use:
- Server rendering for SEO pages
- Static generation + ISR for scale pages
- Image optimization
- Minimal client JS on content pages

---


## Exact page count I recommend (Phase 1 to authority scale)

To answer your question directly: **I recommend planning for 121 pages in total** in the first full authority rollout.

Breakdown:
- Core conversion pages: 10
- Platform + feature pages: 10
- Solution pages: 8
- Retreat type pages: 10
- Location pages: 10
- Retreat Type × Location matrix pages (initial subset): 48
- Pillar resource guides: 5
- Case studies: 5
- Comparison pages: 5
- Blog posts: 20

Why 121 first (instead of jumping to 300):
- Big enough to establish topical authority and internal-link density.
- Still manageable for quality control and CMS governance.
- Lets you validate conversion + ranking patterns before multiplying matrix pages.

---

## Whole execution plan (from zero to scale)

### Stage 0: Positioning and messaging lock (Week 1)
- Finalize one-line positioning and 3 core brand truths.
- Define 3 primary ICP segments (e.g., yoga, wellness, corporate retreat operators).
- Finalize primary CTA language: **Book Retreat OS Simulation**.
- Approve homepage narrative and proof strategy.

Deliverables:
- Messaging guide
- CTA and offer framework
- Homepage wireframe copy

### Stage 1: Technical + CMS foundation (Weeks 1-2)
- Set up Next.js 14+ project (App Router + TypeScript).
- Implement global layout, navigation, footer, and CTA system.
- Set up CMS schemas and editorial roles/workflow.
- Build reusable page sections (hero, problem, feature map, proof, FAQ, CTA).
- Add SEO and analytics baseline (metadata defaults, sitemap, events).

Deliverables:
- Production-ready scaffolding
- CMS model + author workflow
- Reusable template blocks

### Stage 2: Money pages first (Weeks 2-4)
Publish high-intent pages first:
1. Home
2. Platform (Retreat OS)
3. Pricing
4. Contact / Book Simulation
5. Retreat Operations Software
6. Retreat Automation Software
7. Yoga Retreat Software
8. Wellness Retreat Software
9. Retreat Software Bali
10. Retreat Software Costa Rica

Goal:
- Fastest path to conversion while SEO base starts indexing.

### Stage 3: Trust and authority assets (Weeks 4-6)
- Publish 3-5 case studies.
- Publish 2 pillar guides (5k-10k words each).
- Publish 8-12 search-intent blog posts.
- Add 2-3 comparison pages (Cohorts vs X).

Goal:
- Improve trust, lower sales friction, and strengthen mid-funnel capture.

### Stage 4: Programmatic SEO rollout (Weeks 6-10)
- Launch first matrix batch (48 pages): top retreat types × top locations.
- Keep shared template sections but enforce unique local intros and FAQs.
- Deploy internal linking automation among guides, solutions, matrix pages, and pricing.

Goal:
- Scale discoverability while preserving quality signals.

### Stage 5: Optimization loop (ongoing monthly)
- Measure rankings, CTR, conversion rate, and assisted conversions.
- Improve underperforming pages (title/H1/intro/CTA/linking).
- Expand matrix from 48 → 100+ pages based on winning combinations.
- Publish 8-10 new blog posts/month tied to solution clusters.

Goal:
- Compound SEO + conversion performance.

---

## 90-day KPI plan

Targets by Day 30:
- 15-20 pages live
- Core templates stable
- Analytics and conversion events validated

Targets by Day 60:
- 45-60 pages live
- 2 pillar assets live
- 3+ case studies live

Targets by Day 90:
- 90-121 pages live
- 20+ blog posts live
- First page-one rankings on long-tail terms (location/type)
- Consistent simulation bookings from organic + internal paths

---

## Team operating model (so this stays codeless)

Recommended weekly cadence:
- Strategy/SEO lead: keyword clustering + briefs
- Content lead: draft + CMS entry
- Editor: quality + voice + conversion alignment
- Developer: template and technical SEO maintenance

Workflow:
1. Brief approved
2. Draft created in CMS
3. SEO QA checklist
4. Publish
5. Internal linking QA
6. Performance review after 14 days

This keeps the system scalable without code changes for routine publishing.

## Direct answer to your question

Your strategy is strong and can absolutely become a high-authority organic growth engine.

If your goal is: **fast site + SEO dominance + codeless CMS editing**, the best path is:

- **Next.js** for frontend/framework
- **Headless CMS (Sanity preferred)** for codeless operations
- Programmatic SEO system for retreat-type × location pages
- Strict internal linking + consistent CTA architecture

If you want, the next step is I can convert this into a concrete implementation blueprint:
- exact folder structure,
- CMS schemas,
- page templates,
- and the publishing workflow your team can run weekly.
