import { notFound } from "next/navigation";
import { MarketingPage } from "@/components/MarketingPage";
import { getPageBySlug } from "@/lib/siteData";

export default function DynamicPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = `/${params.slug.join("/")}`;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <MarketingPage page={page} />;
}
