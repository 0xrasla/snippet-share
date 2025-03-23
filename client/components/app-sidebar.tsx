"use client";

import * as React from "react";
import Link from "next/link";
import {
  Code2,
  Hash,
  Home,
  Search,
  Bookmark,
  TrendingUp,
  Clock,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

const popularTags = [
  { name: "javascript", count: 423 },
  { name: "react", count: 327 },
  { name: "typescript", count: 275 },
  { name: "python", count: 198 },
  { name: "css", count: 156 },
];

const languages = [
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "Java", slug: "java" },
  { name: "C#", slug: "csharp" },
  { name: "PHP", slug: "php" },
  { name: "Ruby", slug: "ruby" },
  { name: "Go", slug: "go" },
  { name: "Swift", slug: "swift" },
  { name: "Kotlin", slug: "kotlin" },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Code2 className="h-6 w-6" />
          <span>CodeSnip</span>
        </Link>
        <div className="mt-4">
          <Input
            placeholder="Search snippets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"}>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/explore"}>
                  <Link href="/explore">
                    <Search className="h-4 w-4" />
                    <span>Explore</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/bookmarks"}>
                  <Link href="/bookmarks">
                    <Bookmark className="h-4 w-4" />
                    <span>Bookmarks</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/trending"}>
                  <Link href="/trending">
                    <TrendingUp className="h-4 w-4" />
                    <span>Trending</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/recent"}>
                  <Link href="/recent">
                    <Clock className="h-4 w-4" />
                    <span>Recent</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Popular Tags</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {popularTags.map((tag) => (
                <SidebarMenuItem key={tag.name}>
                  <SidebarMenuButton asChild>
                    <Link href={`/tags/${tag.name}`}>
                      <Hash className="h-4 w-4" />
                      <span>{tag.name}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {tag.count}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Languages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {languages.map((language) => (
                <SidebarMenuItem key={language.slug}>
                  <SidebarMenuButton asChild>
                    <Link href={`/languages/${language.slug}`}>
                      <span>{language.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
