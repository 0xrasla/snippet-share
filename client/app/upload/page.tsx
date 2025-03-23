import { MainLayout } from "@/components/main-layout";
import { UploadForm } from "@/components/upload-form";

export default function UploadPage() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-3xl p-6">
        <h1 className="mb-6 text-3xl font-bold">Upload a New Snippet</h1>
        <UploadForm />
      </div>
    </MainLayout>
  );
}
