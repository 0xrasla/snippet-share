"use client";

import { MainLayout } from "@/components/main-layout";
import { SnippetDetail } from "@/components/snippet-detail";

// Mock function to get snippet by ID
function getSnippetById(id: string) {
  // This would be replaced with a real data fetch in a production app
  const snippets = [
    {
      id: "1",
      title: "React useEffect Cleanup",
      code: "useEffect(() => {\n  const subscription = subscribeToEvent();\n  return () => {\n    subscription.unsubscribe();\n  };\n}, []);",
      language: "javascript",
      tags: ["react", "hooks", "cleanup"],
      author: "johndoe",
      createdAt: "2023-03-15",
      forks: 12,
      comments: 5,
    },
    {
      id: "2",
      title: "Python List Comprehension",
      code: "# Create a list of squares\nsquares = [x**2 for x in range(10)]",
      language: "python",
      tags: ["list", "comprehension", "basics"],
      author: "pythondev",
      createdAt: "2023-04-02",
      forks: 8,
      comments: 3,
    },
  ];

  return snippets.find((snippet) => snippet.id === id);
}

export default function SnippetPage({ params }: { params: { id: string } }) {
  const snippet = getSnippetById(params.id);

  if (!snippet) {
    return (
      <MainLayout>
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold">Snippet not found</h1>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl p-6">
        <SnippetDetail snippet={snippet} />
      </div>
    </MainLayout>
  );
}
