"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SnippetCard } from "@/components/snippet-card";
import { Edit, Github, Twitter, Globe, Mail } from "lucide-react";

// Mock user data
const user = {
  id: "1",
  username: "johndoe",
  name: "John Doe",
  bio: "Full-stack developer passionate about React, TypeScript, and building great user experiences.",
  avatar: "/placeholder.svg?height=100&width=100",
  joinedDate: "2022-05-15",
  location: "San Francisco, CA",
  website: "https://johndoe.dev",
  github: "johndoe",
  twitter: "johndoe",
  email: "john@example.com",
  stats: {
    snippets: 24,
    followers: 156,
    following: 89,
  },
};

// Mock user snippets
const userSnippets = [
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
    id: "5",
    title: "JavaScript Array Methods",
    code: "const numbers = [1, 2, 3, 4, 5];\n\n// Map\nconst doubled = numbers.map(n => n * 2);\n\n// Filter\nconst evens = numbers.filter(n => n % 2 === 0);\n\n// Reduce\nconst sum = numbers.reduce((acc, n) => acc + n, 0);",
    language: "javascript",
    tags: ["javascript", "array", "methods"],
    author: "johndoe",
    createdAt: "2023-04-10",
    forks: 20,
    comments: 8,
  },
  {
    id: "20",
    title: "CSS Flexbox Layout",
    code: ".container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}",
    language: "css",
    tags: ["css", "flexbox", "layout"],
    author: "johndoe",
    createdAt: "2023-06-05",
    forks: 8,
    comments: 3,
  },
];

// Mock liked snippets
const likedSnippets = [
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
];

export function ProfileView() {
  const [activeTab, setActiveTab] = useState("snippets");

  return (
    <div className="space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h1 className="text-2xl font-bold">{user.name}</h1>
                  <p className="text-muted-foreground">@{user.username}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 self-start"
                >
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>

              <p>{user.bio}</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {user.location && (
                  <div>
                    <span>📍 {user.location}</span>
                  </div>
                )}
                {user.website && (
                  <div>
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      <Globe className="h-4 w-4" />
                      Website
                    </a>
                  </div>
                )}
                {user.github && (
                  <div>
                    <a
                      href={`https://github.com/${user.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </div>
                )}
                {user.twitter && (
                  <div>
                    <a
                      href={`https://twitter.com/${user.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </a>
                  </div>
                )}
                {user.email && (
                  <div>
                    <a
                      href={`mailto:${user.email}`}
                      className="flex items-center gap-1 hover:text-foreground"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <div>
                  <span className="font-bold">{user.stats.snippets}</span>{" "}
                  <span className="text-muted-foreground">Snippets</span>
                </div>
                <div>
                  <span className="font-bold">{user.stats.followers}</span>{" "}
                  <span className="text-muted-foreground">Followers</span>
                </div>
                <div>
                  <span className="font-bold">{user.stats.following}</span>{" "}
                  <span className="text-muted-foreground">Following</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="snippets">Snippets</TabsTrigger>
          <TabsTrigger value="liked">Liked</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="snippets" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {userSnippets.map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="liked" className="mt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {likedSnippets.map((snippet) => (
              <SnippetCard key={snippet.id} snippet={snippet} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your recent actions on the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="flex-1">
                    <p className="font-medium">You created a new snippet</p>
                    <p className="text-sm text-muted-foreground">
                      <a href="#" className="font-medium hover:underline">
                        CSS Flexbox Layout
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground">2 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="flex-1">
                    <p className="font-medium">You liked a snippet</p>
                    <p className="text-sm text-muted-foreground">
                      <a href="#" className="font-medium hover:underline">
                        Next.js Server Actions
                      </a>{" "}
                      by{" "}
                      <a href="#" className="hover:underline">
                        nextjsdev
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="flex-1">
                    <p className="font-medium">You commented on a snippet</p>
                    <p className="text-sm text-muted-foreground">
                      <a href="#" className="font-medium hover:underline">
                        TypeScript Interface vs Type
                      </a>{" "}
                      by{" "}
                      <a href="#" className="hover:underline">
                        tsexpert
                      </a>
                    </p>
                    <p className="text-xs italic">
                      "This is a great explanation of the differences!"
                    </p>
                    <p className="text-xs text-muted-foreground">5 days ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <p className="font-medium">You forked a snippet</p>
                    <p className="text-sm text-muted-foreground">
                      <a href="#" className="font-medium hover:underline">
                        React Custom Hook for Local Storage
                      </a>{" "}
                      by{" "}
                      <a href="#" className="hover:underline">
                        reactdev
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground">1 week ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
