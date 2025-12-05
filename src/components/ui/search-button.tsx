import { CtrlIcon, SearchIcon } from "~/assets/svg";
import { cn } from "~/lib";
import React from "react";

export type SearchButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: "default" | "only-icon";
  };

export function SearchButton({
  className,
  variant = "default",
  ...props
}: SearchButtonProps) {
  const isOnlyIcon = variant === "only-icon";

  return (
    <button
      aria-label="open search modal"
      {...props}
      className={cn(
        "relative flex items-center rounded-md transition-all",
        !isOnlyIcon && "border border-border bg-muted/50 text-muted-foreground",
        "hover:bg-accent hover:text-accent-foreground",
        "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        isOnlyIcon
          ? "h-9 w-9 justify-center p-0"
          : "h-9 w-full gap-2 pl-2 pr-4 sm:pr-14",

        className,
      )}
    >
      {isOnlyIcon && <CtrlIcon className="size-6 text-foreground" />}

      {!isOnlyIcon && (
        <>
          <SearchIcon className="size-8 shrink-0 text-foreground" />
          <span className="inline-flex opacity-70">
            Search for Questions Here...
          </span>
        </>
      )}

      {!isOnlyIcon && (
        <kbd
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2",
            "hidden sm:flex h-5 items-center gap-1",
            "rounded border border-border bg-muted",
            "px-1.5 font-mono text-[10px] font-medium opacity-90 select-none",
          )}
        >
          <CtrlIcon className="w-3 h-3 opacity-70" />
          <span className="text-[10px]">K</span>
        </kbd>
      )}
    </button>
  );
}
