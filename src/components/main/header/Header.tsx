import Link from "next/link";

import SwitchMode from "@/components/ui/switch-mode";

const links = [
  {
    id: 1,
    title: "Blog",
    href: "blog",
  },
  {
    id: 2,
    title: "Projects",
    href: "projects",
  },
  {
    id: 3,
    title: "About",
    href: "about",
  },
  {
    id: 4,
    title: "Newsletter",
    href: "newsletter",
  },
];

const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between">
      <h1 className="font-bold text-4xl">THE BLOG</h1>

      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.id} className="hover:underline">
              <Link href={`/${l.href}`}>{l.title}</Link>
            </li>
          ))}
        </ul>

        <SwitchMode />
      </div>
    </header>
  );
};

export default Header;
