"use client";

import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
