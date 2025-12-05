"use client";
/* eslint-disable */

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import { flushSync } from "react-dom";
import { Sun, Moon } from "lucide-react";
import { cn } from "~/lib";

export const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : null;

  const applyWithTransition = useCallback(
    (newTheme: "light" | "dark" | "system") => {
      if (
        typeof document === "undefined" ||
        !("startViewTransition" in document)
      ) {
        setTheme(newTheme);
        return;
      }

      const transition = (document as any).startViewTransition(() => {
        flushSync(() => setTheme(newTheme));
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          { clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] },
          {
            duration: 800,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      });
    },
    [setTheme],
  );

  if (!mounted) {
    return <div className="w-[180px] h-10 opacity-0" />;
  }

  const btnBase =
    "flex items-center justify-center h-8 w-full transition-colors text-sm";

  const active = "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-white";

  const inactive =
    "bg-white text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800";

  return (
    <div className="grid grid-cols-2 w-[100px] overflow-hidden border border-border rounded-sm">
      <button
        aria-label="set light theme"
        type="button"
        onClick={() => applyWithTransition("light")}
        className={cn(btnBase, currentTheme === "light" ? active : inactive)}
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        aria-label="set dark theme"
        type="button"
        onClick={() => applyWithTransition("dark")}
        className={cn(btnBase, currentTheme === "dark" ? active : inactive)}
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
};
