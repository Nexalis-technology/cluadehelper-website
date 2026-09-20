import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

export function InstallButton({
  className,
  size = "md",
  label = "Add to Chrome — it's free",
}: {
  className?: string;
  size?: "sm" | "md";
  label?: string;
}) {
  return (
    <a
      href={siteConfig.chromeStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-accent font-semibold text-accent-foreground transition-colors hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        size === "md" ? "px-6 py-3 text-base" : "px-4 py-2 text-sm",
        className,
      )}
    >
      {label}
    </a>
  );
}
