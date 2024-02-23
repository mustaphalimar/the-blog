"use client";

import SwitchMode from "@/components/ui/switch-mode";
import { links } from "@/constants/nav-links";
import { useSidebar } from "@/hooks/use-sidebar";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const sidebar = useSidebar();
  return (
    <aside
      className={`bg-bgDark w-full h-screen fixed transition-transform ease-in-out ${sidebar.active ? "translate-x-0" : "translate-x-[100%]"} flex items-center justify-center `}
    >
      <div className="flex flex-col justify-center gap-8 text-white  ">
        <ul className="flex flex-col items-center gap-6">
          {links.map((l) => (
            <li key={l.id} className="hover:underline text-2xl">
              <Link href={`/${l.href}`}>{l.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-6 mr-10">
          <SwitchMode />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
