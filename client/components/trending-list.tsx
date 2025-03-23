"use client";
import { SnippetCard } from "@/components/snippet-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for trending snippets
const trendingSnippets = [
  {
    id: "5",
    title: "JavaScript Array Methods",
    code: "const numbers = [1, 2, 3, 4, 5];\n\n// Map\nconst doubled = numbers.map(n => n * 2);\n\n// Filter\nconst evens = numbers.filter(n => n % 2 === 0);\n\n// Reduce\nconst sum = numbers.reduce((acc, n) => acc + n, 0);",
    language: "javascript",
    tags: ["javascript", "array", "methods"],
    author: "jsdev",
    createdAt: "2023-04-10",
    forks: 120,
    comments: 48,
  },
  {
    id: "9",
    title: "Next.js Server Actions",
    code: "// app/actions.ts\n'use server';\n\nexport async function submitForm(formData: FormData) {\n  const name = formData.get('name');\n  const email = formData.get('email');\n  \n  // Process the form data\n  await saveToDatabase({ name, email });\n  \n  return { success: true };\n}",
    language: "typescript",
    tags: ["nextjs", "server-actions", "forms"],
    author: "nextjsdev",
    createdAt: "2023-07-15",
    forks: 95,
    comments: 32,
  },
  {
    id: "10",
    title: "CSS Grid Responsive Layout",
    code: ".container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .container {\n    grid-template-columns: 1fr;\n  }\n}",
    language: "css",
    tags: ["css", "grid", "responsive"],
    author: "cssmaster",
    createdAt: "2023-06-05",
    forks: 85,
    comments: 27,
  },
  {
    id: "11",
    title: "React Custom Hook for Local Storage",
    code: "import { useState, useEffect } from 'react';\n\nfunction useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      console.error(error);\n      return initialValue;\n    }\n  });\n\n  useEffect(() => {\n    try {\n      window.localStorage.setItem(key, JSON.stringify(storedValue));\n    } catch (error) {\n      console.error(error);\n    }\n  }, [key, storedValue]);\n\n  return [storedValue, setStoredValue];\n}",
    language: "javascript",
    tags: ["react", "hooks", "localstorage"],
    author: "reactdev",
    createdAt: "2023-05-22",
    forks: 78,
    comments: 24,
  },
  {
    id: "12",
    title: "Python FastAPI CRUD Example",
    code: "from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Item(BaseModel):\n    name: str\n    description: str = None\n\nitems = {}\n\n@app.post('/items/')\ndef create_item(item: Item):\n    items[len(items) + 1] = item\n    return item\n\n@app.get('/items/{item_id}')\ndef read_item(item_id: int):\n    if item_id not in items:\n        raise HTTPException(status_code=404, detail='Item not found')\n    return items[item_id]",
    language: "python",
    tags: ["python", "fastapi", "api"],
    author: "pythondev",
    createdAt: "2023-07-02",
    forks: 65,
    comments: 18,
  },
  {
    id: "13",
    title: "Tailwind CSS Dark Mode Toggle",
    code: "// components/ThemeToggle.jsx\nimport { useState, useEffect } from 'react';\nimport { SunIcon, MoonIcon } from '@heroicons/react/solid';\n\nexport default function ThemeToggle() {\n  const [darkMode, setDarkMode] = useState(false);\n\n  useEffect(() => {\n    if (darkMode) {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }, [darkMode]);\n\n  return (\n    <button\n      onClick={() => setDarkMode(!darkMode)}\n      className=\"p-2 rounded-full bg-gray-200 dark:bg-gray-800\"\n    >\n      {darkMode ? (\n        <SunIcon className=\"h-5 w-5 text-yellow-500\" />\n      ) : (\n        <MoonIcon className=\"h-5 w-5 text-gray-700\" />\n      )}\n    </button>\n  );\n}",
    language: "javascript",
    tags: ["tailwind", "darkmode", "react"],
    author: "tailwinduser",
    createdAt: "2023-06-18",
    forks: 58,
    comments: 15,
  },
];

export function TrendingList() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="today" className="w-full">
        <TabsList>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
          <TabsTrigger value="alltime">All Time</TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trendingSnippets.slice(0, 3).map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="week" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trendingSnippets.slice(1, 4).map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="month" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trendingSnippets.slice(2, 5).map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="alltime" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trendingSnippets.map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
