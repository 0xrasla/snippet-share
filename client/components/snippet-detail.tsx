"use client";

import type React from "react";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Copy, GitFork, MessageSquare, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Snippet {
  id: string;
  title: string;
  code: string;
  language: string;
  tags: string[];
  author: string;
  createdAt: string;
  forks: number;
  comments: number;
}

interface SnippetDetailProps {
  snippet: Snippet;
}

export function SnippetDetail({ snippet }: SnippetDetailProps) {
  const [comment, setComment] = useState("");

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippet.code);
    toast("Copied to clipboard");
  };

  const handleFork = () => {
    toast("Snippet forked");
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    setComment("");
    toast("Comment added");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{snippet.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{snippet.author}</span>
          </div>
          <div>
            {formatDistanceToNow(new Date(snippet.createdAt), {
              addSuffix: true,
            })}
          </div>
          <Badge variant="outline" className="capitalize">
            {snippet.language}
          </Badge>
        </div>
      </div>

      <Card>
        <CardContent className="relative p-4">
          <div className="absolute right-4 top-4 flex gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyCode}>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
            <Button variant="outline" size="sm" onClick={handleFork}>
              <GitFork className="mr-2 h-4 w-4" />
              Fork
            </Button>
          </div>
          <pre className="mt-2 overflow-x-auto rounded-md bg-muted p-4 text-sm">
            <code>{snippet.code}</code>
          </pre>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <div className="flex flex-wrap gap-1">
          {snippet.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <MessageSquare className="h-5 w-5" />
          Comments ({snippet.comments})
        </h2>

        <form onSubmit={handleSubmitComment} className="space-y-2">
          <Textarea
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />
          <Button type="submit" disabled={!comment.trim()}>
            Post Comment
          </Button>
        </form>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  <User className="h-4 w-4" />
                  <span>codereviewer</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  2 days ago
                </span>
              </div>
              <p className="mt-2 text-sm">
                Great snippet! I've been using this pattern in my React projects
                and it works really well.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                  <User className="h-4 w-4" />
                  <span>devguru</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  5 days ago
                </span>
              </div>
              <p className="mt-2 text-sm">
                You might want to add a dependency array check to make sure all
                dependencies are properly listed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
