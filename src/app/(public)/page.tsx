import { LoginForm } from "@/components/pages/login/login-form";

export default function Home() {
  return (
    <main className="flex flex-col gap-8  items-center sm:items-start">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <LoginForm />
      </div>
    </main>
  );
}
