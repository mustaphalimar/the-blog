"use client";

import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SwitchMode = () => {
  const { setTheme, theme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark");
  const [mounted, setMounted] = useState(false);

  const handleToggle = (value: boolean) => {
    if (value) {
      setTheme("dark");
      setChecked(true);
    } else {
      setTheme("light");
      setChecked(false);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex items-center  cursor-pointer">
      <Switch
        className="absolute dark:bg-white"
        onCheckedChange={handleToggle}
        checked={checked}
      />
      {theme === "dark" ? (
        <Sun className="absolute mx-2  text-black " size={16} />
      ) : (
        <Moon className="absolute mx-2 translate-x-6 dark:color " size={16} />
      )}
    </div>
  );
};

export default SwitchMode;
