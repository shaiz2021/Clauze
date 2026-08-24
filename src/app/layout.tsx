import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { siteUrl } from "@/lib/site-url";

const bricolage = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

const playfair = Playfair_Display({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Clauze | AI Contract Review Tool & Analysis Software",
  description:
    "Clauze is an AI contract review tool that flags risky clauses and explains them in plain English. Get started with free contract analysis software today.",
  verification: {
    google: "OpYCC2Qo7DOsIg_6rrhxEAMOB3_T6UkcN6lDfyijm1E",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Clauze | Read Any Contract in Plain English",
    description: "Know what you are signing. Clauze flags the risky parts before you sign.",
    url: siteUrl,
    siteName: "Clauze",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M6J7NDJBPD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M6J7NDJBPD');
          `}
        </Script>
      </head>
      <body
        className={`${bricolage.variable} ${playfair.variable} ${dmSans.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
