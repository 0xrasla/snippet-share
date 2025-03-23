import Link from "next/link";
import { Clock, MessageSquare, GitFork, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

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

interface SnippetCardProps {
  snippet: Snippet;
}

export function SnippetCard({ snippet }: SnippetCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1 text-lg">
            <Link href={`/snippets/${snippet.id}`} className="hover:underline">
              {snippet.title}
            </Link>
          </CardTitle>
          <Badge variant="outline" className="capitalize">
            {snippet.language}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <pre className="max-h-[150px] overflow-hidden rounded-md bg-muted p-2 text-xs">
          <code>{snippet.code}</code>
        </pre>
        <div className="mt-3 flex flex-wrap gap-1">
          {snippet.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <User className="h-3 w-3" />
          <span>{snippet.author}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>
              {formatDistanceToNow(new Date(snippet.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-3 w-3" />
            <span>{snippet.forks}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-3 w-3" />
            <span>{snippet.comments}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
