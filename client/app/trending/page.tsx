import { MainLayout } from "@/components/main-layout";
import { TrendingList } from "@/components/trending-list";

export default function TrendingPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 p-6">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Trending Snippets
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover the most popular code snippets from the community.
          </p>
        </section>

        <TrendingList />
      </div>
    </MainLayout>
  );
}
