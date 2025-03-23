"use client";

import { useState, useEffect } from "react";
import { SnippetCard } from "@/components/snippet-card";
import { Skeleton } from "@/components/ui/skeleton";

// Mock data for snippets
const allSnippets = [
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
    category: "frontend",
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
    category: "backend",
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
    category: "frontend",
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
    category: "frontend",
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
    category: "frontend",
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
    category: "backend",
  },
  {
    id: "7",
    title: "Docker Compose Setup",
    code: "version: '3'\nservices:\n  app:\n    build: .\n    ports:\n      - '3000:3000'\n  db:\n    image: postgres\n    environment:\n      POSTGRES_PASSWORD: password",
    language: "yaml",
    tags: ["docker", "compose", "devops"],
    author: "devopseng",
    createdAt: "2023-05-12",
    forks: 14,
    comments: 6,
    category: "devops",
  },
  {
    id: "8",
    title: "React Native Button Component",
    code: "import React from 'react';\nimport { TouchableOpacity, Text, StyleSheet } from 'react-native';\n\nconst Button = ({ title, onPress }) => (\n  <TouchableOpacity style={styles.button} onPress={onPress}>\n    <Text style={styles.text}>{title}</Text>\n  </TouchableOpacity>\n);\n\nconst styles = StyleSheet.create({\n  button: {\n    backgroundColor: '#007AFF',\n    borderRadius: 8,\n    padding: 12,\n    alignItems: 'center',\n  },\n  text: {\n    color: '#FFFFFF',\n    fontSize: 16,\n    fontWeight: '600',\n  },\n});\n\nexport default Button;",
    language: "javascript",
    tags: ["react-native", "mobile", "component"],
    author: "mobiledev",
    createdAt: "2023-06-20",
    forks: 9,
    comments: 3,
    category: "mobile",
  },
];

interface SnippetGridProps {
  category?: string;
}

export function SnippetGrid({ category = "all" }: SnippetGridProps) {
  const [loading, setLoading] = useState(true);
  const [snippets, setSnippets] = useState<typeof allSnippets>([]);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      if (category === "all") {
        setSnippets(allSnippets);
      } else {
        setSnippets(
          allSnippets.filter((snippet) => snippet.category === category),
        );
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [category]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-[150px] w-full" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (snippets.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
        <p className="text-muted-foreground">
          No snippets found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {snippets.map((snippet) => (
        <SnippetCard key={snippet.id} snippet={snippet} />
      ))}
    </div>
  );
}
