"use client";

import { useState, useEffect } from "react";
import { SnippetCard } from "@/components/snippet-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Mock data for recent snippets
const recentSnippets = [
  {
    id: "14",
    title: "Vue 3 Composition API Example",
    code: "// Counter.vue\n<script setup>\nimport { ref } from 'vue';\n\nconst count = ref(0);\nconst increment = () => count.value++;\n</script>\n\n<template>\n  <div>\n    <p>Count: {{ count }}</p>\n    <button @click=\"increment\">Increment</button>\n  </div>\n</template>",
    language: "vue",
    tags: ["vue", "composition-api", "counter"],
    author: "vuedev",
    createdAt: "2023-07-25",
    forks: 5,
    comments: 2,
  },
  {
    id: "15",
    title: "Go HTTP Server",
    code: 'package main\n\nimport (\n\t"fmt"\n\t"net/http"\n)\n\nfunc handler(w http.ResponseWriter, r *http.Request) {\n\tfmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])\n}\n\nfunc main() {\n\thttp.HandleFunc("/", handler)\n\tfmt.Println("Server starting on port 8080...")\n\thttp.ListenAndServe(":8080", nil)\n}',
    language: "go",
    tags: ["go", "http", "server"],
    author: "gopher",
    createdAt: "2023-07-24",
    forks: 3,
    comments: 1,
  },
  {
    id: "16",
    title: "React Query Basic Example",
    code: "import { useQuery } from 'react-query';\n\nfunction fetchTodos() {\n  return fetch('/api/todos').then(res => res.json());\n}\n\nfunction Todos() {\n  const { isLoading, error, data } = useQuery('todos', fetchTodos);\n\n  if (isLoading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error.message}</div>;\n\n  return (\n    <ul>\n      {data.map(todo => (\n        <li key={todo.id}>{todo.title}</li>\n      ))}\n    </ul>\n  );\n}",
    language: "javascript",
    tags: ["react", "react-query", "data-fetching"],
    author: "reactdev",
    createdAt: "2023-07-23",
    forks: 7,
    comments: 3,
  },
  {
    id: "17",
    title: "CSS Animation Keyframes",
    code: "@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.fade-in {\n  animation: fadeIn 1s ease-in-out;\n}\n\n@keyframes slideIn {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n\n.slide-in {\n  animation: slideIn 0.5s ease-out;\n}",
    language: "css",
    tags: ["css", "animation", "keyframes"],
    author: "cssmaster",
    createdAt: "2023-07-22",
    forks: 9,
    comments: 4,
  },
  {
    id: "18",
    title: "Node.js Express Middleware",
    code: "const express = require('express');\nconst app = express();\n\n// Custom middleware\nconst logger = (req, res, next) => {\n  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);\n  next();\n};\n\n// Apply middleware\napp.use(logger);\n\napp.get('/', (req, res) => {\n  res.send('Hello World');\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});",
    language: "javascript",
    tags: ["nodejs", "express", "middleware"],
    author: "nodedev",
    createdAt: "2023-07-21",
    forks: 6,
    comments: 2,
  },
  {
    id: "19",
    title: "Swift UIKit Table View",
    code: 'import UIKit\n\nclass ViewController: UIViewController, UITableViewDataSource, UITableViewDelegate {\n    \n    let tableView = UITableView()\n    let data = ["Item 1", "Item 2", "Item 3"]\n    \n    override func viewDidLoad() {\n        super.viewDidLoad()\n        \n        tableView.frame = view.bounds\n        tableView.dataSource = self\n        tableView.delegate = self\n        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")\n        view.addSubview(tableView)\n    }\n    \n    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {\n        return data.count\n    }\n    \n    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {\n        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)\n        cell.textLabel?.text = data[indexPath.row]\n        return cell\n    }\n}',
    language: "swift",
    tags: ["swift", "ios", "tableview"],
    author: "iosdev",
    createdAt: "2023-07-20",
    forks: 4,
    comments: 1,
  },
];

export function RecentList() {
  const [loading, setLoading] = useState(true);
  const [snippets, setSnippets] = useState<typeof recentSnippets>([]);
  const [page, setPage] = useState(1);
  const snippetsPerPage = 3;

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setSnippets(recentSnippets.slice(0, page * snippetsPerPage));
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && page === 1) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {snippets.map((snippet) => (
          <SnippetCard key={snippet.id} snippet={snippet} />
        ))}
      </div>

      {snippets.length < recentSnippets.length && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={loadMore}
            className="gap-2"
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More"}
            {!loading && <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      )}
    </div>
  );
}
