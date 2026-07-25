import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyse Contract | Clauze",
  description: "Upload your contract for a plain English review. Spot risk before you sign.",
  alternates: { canonical: "/upload" },
  openGraph: { title: "Analyse Contract | Clauze", url: "/upload" },
};

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
