import { FeatureCard } from "~/components/ui";
import { featuresData } from "~/constants/feature";

export function FeatureSection() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-full h-12 border-b border-border/80 flex items-center justify-center">
        <div className="w-full md:w-5/6 h-12 border-x border-border/80 flex items-center justify-center">
          <h2 className="text-[13px] tracking-wider text-muted-foreground font-space-grotesk">
            Explore Our Features
          </h2>
        </div>
      </div>
      <div className="w-full md:w-5/6 flex-1 border-x border-border/80 grid grid-cols-1 md:grid-cols-3">
        {featuresData.map((item, idx) => (
          <FeatureCard
            key={item.icon}
            className={
              idx !== featuresData.length - 1 ? "border-r border-border/80" : ""
            }
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
