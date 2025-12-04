"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";

import { cn } from "~/utils";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 1000,
  ...props
}: AnimatedThemeTogglerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const toggleTheme = useCallback(() => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  }, [isDark, setTheme]);

  const handleToggle = useCallback(async () => {
    if (!buttonRef.current) return;
    const transition = document.startViewTransition(() => {
      flushSync(toggleTheme);
    });
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`inset(100% 0 0 0)`, `inset(0 0 0 0)`],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, [toggleTheme, duration]);

  return (
    <button
      suppressHydrationWarning
      ref={buttonRef}
      onClick={handleToggle}
      className={cn("opacity-70 hover:opacity-100", className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
