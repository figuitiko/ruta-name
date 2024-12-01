import { LoginForm } from "@/components/pages/login/login-form";

export default function Home() {
  return (
    <main className="flex flex-col gap-8  justify-center items-center sm:items-start min-h-screen">
      <div className="flex items-center justify-center w-full px-8">
        <LoginForm />
      </div>
    </main>
  );
}
