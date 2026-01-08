import { Button } from "./button";
import { cn } from "~/lib";

type SocialButtonProps = {
  icon: React.ReactNode;
  name: string;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function SocialButtons({ icon, name, label, ...props }: SocialButtonProps) {
  return (
    <Button
      {...props}
      className={cn("flex-1  rounded-xl text-xs", props.className)}
    >
      {icon}
      <span className="font-semibold font-space-grotesk">{label}</span>
    </Button>
  );
}
export { SocialButtons };
