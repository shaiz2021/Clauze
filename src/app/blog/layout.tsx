import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Clauze",
  description: "Plain English contract guides. Learn about NDAs, freelance contracts, and employment agreements.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog | Clauze", url: "/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
