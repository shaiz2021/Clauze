import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Clauze",
  description: "Common questions about Clauze, contract review, and how to read the fine print.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ | Clauze", url: "/faq" },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
