import { LoginForm } from "@/components/pages/login/login-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-8  justify-center items-center sm:items-start min-h-screen">
      <div className="flex flex-col md:flex-row gap-12  w-full  size-full flex-1">
        <picture className="relative flex-1">
          <Image
            src="/images/name-heading.png"
            alt="name-placeholder"
            fill
            objectFit="cover"
          />
        </picture>
        <div className="flex-1 self-center">
          
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
