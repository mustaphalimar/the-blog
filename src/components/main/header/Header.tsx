"use client";

import Link from "next/link";

import SwitchMode from "@/components/ui/switch-mode";
import { Menu, X } from "lucide-react";
import { useSidebar } from "@/hooks/use-sidebar";
import { links } from "@/constants/nav-links";

const Header = () => {
  const sidebar = useSidebar();
  return (
    <header className=" max-w-[90%] m-auto py-2 px-4 md:p-6 flex items-center justify-between">
      <h1 className="font-bold text-2xl">the blog</h1>

      <div className="items-center gap-8 hidden md:flex">
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.id} className="hover:underline">
              <Link href={`/${l.href}`}>{l.title}</Link>
            </li>
          ))}
        </ul>

        <SwitchMode />
      </div>

      <div className="cursor-pointer block md:hidden ">
        {sidebar.active ? (
          <X size={28} onClick={() => sidebar.onHide()} />
        ) : (
          <Menu size={28} onClick={() => sidebar.onShow()} />
        )}
      </div>
    </header>
  );
};

export default Header;
