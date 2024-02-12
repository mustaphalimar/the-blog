"use client";

import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";

const SwitchMode = () => {
  const { setTheme, theme } = useTheme();

  const handleToggle = (value: any) => {
    if (value) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="relative flex items-center  cursor-pointer">
      <Switch
        className="absolute dark:bg-white"
        onCheckedChange={handleToggle}
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
