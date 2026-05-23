import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="bg-s0 text-1 min-h-screen">
      <Navbar />
      <main className="pt-[68px] px-6 py-24">
        <div className="max-w-[460px] mx-auto">
          <div className="bg-card border rounded-[16px] p-[28px]">
            <span className="font-body font-medium text-[11px] uppercase tracking-[0.2em] text-violet mb-4 block">
              {eyebrow}
            </span>
            <h1 className="font-display font-extrabold text-[32px] text-1 leading-tight">
              {title}
            </h1>
            <p className="font-body font-light text-[16px] text-2 leading-[1.8] mt-3">
              {subtitle}
            </p>
            <div className="mt-8">{children}</div>
            {footer && <div className="mt-8">{footer}</div>}
          </div>
          <div className="mt-6 text-center">
            <Link href="/" className="font-body text-[14px] text-3 hover:text-1 transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

