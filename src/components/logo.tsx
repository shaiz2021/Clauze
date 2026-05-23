import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("font-serif text-2xl tracking-tight italic", className)}>
      Clau<span className="text-violet">z</span>e
    </span>
  );
}
