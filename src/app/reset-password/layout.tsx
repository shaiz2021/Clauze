import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Clauze",
  description: "Set a new password for your Clauze account.",
  alternates: { canonical: "/reset-password" },
  openGraph: { title: "Reset Password | Clauze", url: "/reset-password" },
};

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
