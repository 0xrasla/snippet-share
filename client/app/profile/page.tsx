import { MainLayout } from "@/components/main-layout";
import { ProfileView } from "@/components/profile-view";

export default function ProfilePage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl p-6">
        <ProfileView />
      </div>
    </MainLayout>
  );
}
