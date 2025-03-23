"use client";

import { useState } from "react";
import { SnippetCard } from "@/components/snippet-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FolderPlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const bookmarkedSnippets = [
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
    folder: "React Hooks",
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
    folder: "TypeScript",
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
    folder: "JavaScript",
  },
];

// Mock folders
const folders = [
  "All",
  "React Hooks",
  "TypeScript",
  "JavaScript",
  "CSS",
  "Python",
];

export function BookmarksList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("All");
  const [newFolderName, setNewFolderName] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredSnippets = bookmarkedSnippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesFolder =
      selectedFolder === "All" || snippet.folder === selectedFolder;

    return matchesSearch && matchesFolder;
  });

  const handleCreateFolder = () => {
    // In a real app, you would save this to a database
    console.log("Creating folder:", newFolderName);
    setNewFolderName("");
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select value={selectedFolder} onValueChange={setSelectedFolder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select folder" />
            </SelectTrigger>
            <SelectContent>
              {folders.map((folder) => (
                <SelectItem key={folder} value={folder}>
                  {folder}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <FolderPlus className="h-4 w-4" />
                <span className="sr-only">Create folder</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Folder</DialogTitle>
                <DialogDescription>
                  Create a new folder to organize your bookmarked snippets.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="folder-name">Folder Name</Label>
                  <Input
                    id="folder-name"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    placeholder="Enter folder name"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  onClick={handleCreateFolder}
                  disabled={!newFolderName.trim()}
                >
                  Create Folder
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {filteredSnippets.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
          <p className="text-muted-foreground">No bookmarks found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSnippets.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </div>
      )}
    </div>
  );
}
