import { subscribeAction } from "~/actions";
import { MailIcon } from "~/assets/svg";
import { Button, Input } from "~/components/ui";

export function NewsLetterSignup() {
  return (
    <section className="w-full flex flex-col items-center min-h-[60vh]">
      <div className="w-full md:w-3/4 flex-1 border-x border-border/80 flex items-center justify-center flex-col p-8 rounded-lg">
        <h2 className="text-sm tracking-normal text-muted-foreground font-space-grotesk">
          No noise. Just the good tech stuff.
        </h2>
        <h1 className="text-xl md:text-2xl mt-2">Join the Porcyn Newsletter</h1>
        <p className="text-sm md:text-base  md:max-w-lg mt-3 opacity-70">
          We don&apos;t promise enlightenment but you might learn something new,
          laugh at a bug, or find your next job. Developers before you took the
          leap. Respect.
        </p>
        <form action={subscribeAction} method="POST" className="mt-8">
          <div className="flex flex-col md:flex-row gap-3">
            <Input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="md:min-w-[150px] text-sm placeholder:font-space-grotesk font-space-grotesk"
            />

            <Button variant="outline">
              <MailIcon className="size-8" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
