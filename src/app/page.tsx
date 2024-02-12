import Hero from "@/components/main/hero/Hero";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Separator />
      <Hero />
      <Separator />
    </main>
  );
}
