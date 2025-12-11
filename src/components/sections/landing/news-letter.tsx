import { subscribeAction } from "~/actions";
import { MailIcon } from "~/assets/svg";
import { Button, Input } from "~/components/ui";
import { cn } from "~/lib";

export function NewsLetterSignup() {
  return (
    <section className="w-full border-t border-border/80 flex flex-col items-center min-h-[60vh]">
      <div className="w-full md:w-5/6 flex-1 border-x border-border/80 flex items-center justify-center flex-col p-8">
        <h2 className="text-sm tracking-normal text-muted-foreground font-space-grotesk">
          No noise. Just the good tech stuff.
        </h2>
        <h1 className="text-xl md:text-2xl mt-2">Join the Porcyn Newsletter</h1>
        <p className="text-sm md:text-base text-center md:max-w-lg mt-3 opacity-70">
          We don&apos;t promise enlightenment but you might learn something new,
          laugh at a bug, or find your next job. Developers before you took the
          leap. Respect.
        </p>
        <form action={subscribeAction} className="mt-8">
          <div className="flex gap-2">
            <Input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="md:min-w-[150px] border border-border/80 text-sm placeholder:font-space-grotesk font-space-grotesk"
            />

            <Button
              type="submit"
              className={cn(
                "bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900",
                "dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white",
                "border border-border/80 p-1!",
              )}
            >
              <MailIcon className="size-8 text-foreground" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
