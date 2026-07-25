import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Clauze",
  description: "Sign in to your Clauze account to view your scan history.",
  alternates: { canonical: "/login" },
  openGraph: { title: "Sign In | Clauze", url: "/login" },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
