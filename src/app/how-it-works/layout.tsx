import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Clauze",
  description: "Learn how Clauze analyses contracts and flags risk in three simple steps.",
  alternates: { canonical: "/how-it-works" },
  openGraph: { title: "How It Works | Clauze", url: "/how-it-works" },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
