import { MainLayout } from "@/components/main-layout";
import { SnippetGrid } from "@/components/snippet-grid";
import { SearchBar } from "@/components/search-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Mock data for popular tags
const popularTags = [
  "javascript",
  "react",
  "typescript",
  "python",
  "css",
  "html",
  "node",
  "api",
  "database",
  "animation",
  "nextjs",
  "tailwind",
];

export default function ExplorePage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 p-6">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Explore Snippets
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover code snippets from various languages, frameworks, and
            categories.
          </p>
          <SearchBar />
        </section>

        <section className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="cursor-pointer hover:bg-secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </section>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <SnippetGrid category="all" />
          </TabsContent>
          <TabsContent value="frontend" className="mt-6">
            <SnippetGrid category="frontend" />
          </TabsContent>
          <TabsContent value="backend" className="mt-6">
            <SnippetGrid category="backend" />
          </TabsContent>
          <TabsContent value="devops" className="mt-6">
            <SnippetGrid category="devops" />
          </TabsContent>
          <TabsContent value="mobile" className="mt-6">
            <SnippetGrid category="mobile" />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
