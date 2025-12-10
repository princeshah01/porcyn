import { cn } from "~/lib/utils";
import Image from "next/image";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 h-64 items-center p-6 hover:bg-muted/30 transition-colors duration-200",
        className,
      )}
    >
      <div className="w-full">
        <Image
          src={icon}
          alt="AI Icon"
          width={100}
          height={100}
          className="opacity-80 invert dark:invert-0 object-contain isolate"
        />
      </div>
      <div className="w-full font-space-grotesk flex-1">
        <h2 className="text-lg text-accent-foreground font-semibold">
          {title}
        </h2>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
