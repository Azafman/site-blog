import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold text-red-500">Welcome to Next.js!</h1>
      <Button variant={"destructive"}>
        Reload Page
      </Button>
    </main>
  );
}
