"use client";

import type React from "react";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

export function SettingsForm() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast("profile updated");
  };

  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Account settings updated");
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Notification preferences updated");
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your profile information visible to other users.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSaveProfile}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="avatar">Profile Picture</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src="/placeholder.svg?height=64&width=64"
                      alt="Profile"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="johndoe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  defaultValue="Full-stack developer passionate about React, TypeScript, and building great user experiences."
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue="San Francisco, CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" defaultValue="https://johndoe.dev" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Username</Label>
                  <Input id="github" defaultValue="johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter Username</Label>
                  <Input id="twitter" defaultValue="johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Public Email</Label>
                  <Input id="email" defaultValue="john@example.com" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Changes</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      <TabsContent value="account" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Manage your account settings and preferences.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSaveAccount}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-private">Email Address</Label>
                <Input
                  id="email-private"
                  type="email"
                  defaultValue="john@example.com"
                />
                <p className="text-xs text-muted-foreground">
                  This email is used for account notifications and is not
                  publicly visible.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Danger Zone</h3>
                <div className="rounded-md border border-destructive/20 p-4">
                  <h4 className="font-medium text-destructive">
                    Delete Account
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Once you delete your account, there is no going back. All
                    your data will be permanently removed.
                  </p>
                  <Button variant="destructive" size="sm" className="mt-4">
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Changes</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      <TabsContent value="notifications" className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>
              Manage how and when you receive notifications.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSaveNotifications}>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-comments">
                      Comments on your snippets
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive emails when someone comments on your snippets.
                    </p>
                  </div>
                  <Switch id="email-comments" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-forks">Forks of your snippets</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive emails when someone forks your snippets.
                    </p>
                  </div>
                  <Switch id="email-forks" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-mentions">Mentions</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive emails when someone mentions you in a comment.
                    </p>
                  </div>
                  <Switch id="email-mentions" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-newsletter">Newsletter</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive occasional emails about new features and updates.
                    </p>
                  </div>
                  <Switch id="email-newsletter" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-0.5">
                    <Label htmlFor="app-comments">
                      Comments on your snippets
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when someone comments on your
                      snippets.
                    </p>
                  </div>
                  <Switch id="app-comments" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-0.5">
                    <Label htmlFor="app-forks">Forks of your snippets</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when someone forks your snippets.
                    </p>
                  </div>
                  <Switch id="app-forks" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-0.5">
                    <Label htmlFor="app-mentions">Mentions</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when someone mentions you in a
                      comment.
                    </p>
                  </div>
                  <Switch id="app-mentions" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-y-0">
                  <div className="space-y-0.5">
                    <Label htmlFor="app-follows">New followers</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when someone follows you.
                    </p>
                  </div>
                  <Switch id="app-follows" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Save Preferences</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
