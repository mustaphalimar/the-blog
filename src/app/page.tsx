import Hero from "@/components/main/hero/Hero";
import { Separator } from "@/components/ui/separator";
import RecentBlogs from "@/features/recent-blogs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Separator />
      <Hero />
      <Separator />
      <RecentBlogs />
    </main>
  );
}
