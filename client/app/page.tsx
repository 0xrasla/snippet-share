import { MainLayout } from "@/components/main-layout";
import { SnippetList } from "@/components/snippet-list";
import { SearchBar } from "@/components/search-bar";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 p-6">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Share and Discover Code Snippets
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse through a collection of useful code snippets, or share your
            own with the community.
          </p>
          <SearchBar />
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">
              Popular Snippets
            </h2>
          </div>
          <SnippetList />
        </section>
      </div>
    </MainLayout>
  );
}
