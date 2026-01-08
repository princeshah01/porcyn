import Link from "next/link";

import { RainbowButton, SearchButton } from "~/components/ui";

export function Hero() {
  return (
    <section className="w-full min-h-[calc(100vh-3rem)] border-b border-border/80 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Dig Deeper. Learn Smarter. Build Better.
      </h1>

      <p className="text-base md:text-lg max-w-2xl mt-4 opacity-80">
        Porcyn is a developer-first platform for those who go beyond the surface
        — explore concepts, ask meaningful questions, get AI-powered answers,
        and grow with clarity and curiosity.
      </p>

      <div className="flex flex-col-reverse md:flex-row gap-4 mt-8 items-center justify-center">
        <RainbowButton asChild className="w-full md:w-fit">
          <Link href="/sign-in">Ask Question</Link>
        </RainbowButton>
        <SearchButton />
      </div>
    </section>
  );
}
