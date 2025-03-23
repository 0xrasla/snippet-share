"use client";

import { SnippetCard } from "@/components/snippet-card";

// Mock data for snippets
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
  {
    id: "3",
    title: "TypeScript Interface vs Type",
    code: "// Interface\ninterface User {\n  name: string;\n  age: number;\n}\n\n// Type\ntype User = {\n  name: string;\n  age: number;\n};",
    language: "typescript",
    tags: ["typescript", "interface", "type"],
    author: "tsexpert",
    createdAt: "2023-02-28",
    forks: 15,
    comments: 7,
  },
  {
    id: "4",
    title: "CSS Grid Layout",
    code: ".container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}",
    language: "css",
    tags: ["css", "grid", "layout"],
    author: "cssmaster",
    createdAt: "2023-03-20",
    forks: 10,
    comments: 4,
  },
  {
    id: "5",
    title: "JavaScript Array Methods",
    code: "const numbers = [1, 2, 3, 4, 5];\n\n// Map\nconst doubled = numbers.map(n => n * 2);\n\n// Filter\nconst evens = numbers.filter(n => n % 2 === 0);\n\n// Reduce\nconst sum = numbers.reduce((acc, n) => acc + n, 0);",
    language: "javascript",
    tags: ["javascript", "array", "methods"],
    author: "jsdev",
    createdAt: "2023-04-10",
    forks: 20,
    comments: 8,
  },
  {
    id: "6",
    title: "SQL Join Example",
    code: "SELECT users.name, orders.product\nFROM users\nINNER JOIN orders ON users.id = orders.user_id\nWHERE orders.status = 'completed';",
    language: "sql",
    tags: ["sql", "join", "query"],
    author: "dbadmin",
    createdAt: "2023-03-05",
    forks: 7,
    comments: 2,
  },
];

export function SnippetList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.id} snippet={snippet} />
      ))}
    </div>
  );
}
