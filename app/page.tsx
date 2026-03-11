import { MarketingPage } from "@/components/MarketingPage";
import { getHomePage } from "@/lib/siteData";

export default function HomePage() {
  const page = getHomePage();
  return <MarketingPage page={page} />;
}
