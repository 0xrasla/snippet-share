import { MainLayout } from "@/components/main-layout";
import { RecentList } from "@/components/recent-list";

export default function RecentPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 p-6">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Recent Snippets</h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse the latest code snippets added to the platform.
          </p>
        </section>

        <RecentList />
      </div>
    </MainLayout>
  );
}
