import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Clauze",
  description: "Create a Clauze account to save your contract scans and access Pro features.",
  alternates: { canonical: "/signup" },
  openGraph: { title: "Create Account | Clauze", url: "/signup" },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
