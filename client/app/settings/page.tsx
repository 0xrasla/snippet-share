import { MainLayout } from "@/components/main-layout";
import { SettingsForm } from "@/components/settings-form";

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl p-6">
        <h1 className="mb-6 text-3xl font-bold">Settings</h1>
        <SettingsForm />
      </div>
    </MainLayout>
  );
}
