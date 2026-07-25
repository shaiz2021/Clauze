import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Clauze",
  description: "Reset your Clauze account password.",
  alternates: { canonical: "/forgot-password" },
  openGraph: { title: "Forgot Password | Clauze", url: "/forgot-password" },
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
