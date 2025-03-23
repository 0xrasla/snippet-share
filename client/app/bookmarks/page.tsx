import { MainLayout } from "@/components/main-layout";
import { BookmarksList } from "@/components/bookmarks-list";

export default function BookmarksPage() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 p-6">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Your Bookmarks</h1>
          <p className="text-muted-foreground max-w-2xl">
            Access your saved code snippets for quick reference.
          </p>
        </section>

        <BookmarksList />
      </div>
    </MainLayout>
  );
}
