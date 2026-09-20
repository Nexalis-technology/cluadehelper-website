import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Sunburst({ className }: { className?: string }) {
  const rays = Array.from({ length: 8 });
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g stroke="var(--brand)" strokeWidth="3" strokeLinecap="round">
        {rays.map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 20 + Math.cos(angle) * 6;
          const y1 = 20 + Math.sin(angle) * 6;
          const x2 = 20 + Math.cos(angle) * 17;
          const y2 = 20 + Math.sin(angle) * 17;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 shrink-0"
      aria-label={`${siteConfig.name} home`}
    >
      <Sunburst className="h-6 w-6" />
      {withWordmark && (
        <span className="text-lg font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
