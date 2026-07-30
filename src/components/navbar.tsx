"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { User } from "@supabase/supabase-js";
import { Sun, Moon, Menu, X } from "lucide-react";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/browser";

const NAV_LINKS = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(true);
  const supabase = useMemo(() => (isSupabaseConfigured() ? createSupabaseBrowserClient() : null), []);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, [supabase]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    document.documentElement.classList.toggle("light");
    setIsDark(!isDark);
  };

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setIsMobileMenuOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <>
      {/* Top accent line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-violet z-[60]" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] transition-colors duration-300 ${
          isScrolled ? "bg-[var(--nav-bg)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display font-bold text-[22px] text-1">
            Clau<span className="text-violet">z</span>e
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-body text-[15px] transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-violet"
                    : "text-2 hover:text-1"
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: Theme + CTA */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden lg:flex items-center gap-4">
                <Link
                  href="/dashboard"
                  className={`relative font-body text-[15px] transition-colors duration-150 ${
                    pathname === "/dashboard" ? "text-violet" : "text-2 hover:text-1"
                  }`}
                >
                  Dashboard
                  {pathname === "/dashboard" && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet"
                    />
                  )}
                </Link>
                <button
                  type="button"
                  onClick={signOut}
                  className="font-body text-[15px] text-2 hover:text-1 transition-colors"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="hidden lg:block font-body text-[15px] text-2 hover:text-1 transition-colors"
              >
                Sign in
              </Link>
            )}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-2 transition-colors hover:text-1"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link
              href="/upload"
              className="hidden lg:flex h-[38px] items-center px-5 bg-violet text-white font-display font-semibold rounded-[8px] hover:bg-violet-light transition-colors"
            >
              {user ? "Scan for free" : "Scan for free"}
            </Link>
            <button
              className="lg:hidden text-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-s0 flex flex-col"
          >
            <div className="flex items-center justify-between h-[68px] px-6 border-b border-[var(--border)]">
              <Link
                href="/"
                className="font-display font-bold text-[22px] text-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Clau<span className="text-violet">z</span>e
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display font-bold text-[28px] transition-colors ${
                      pathname === link.href ? "text-violet" : "text-1"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              {user ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (NAV_LINKS.length + 0) * 0.1 }}
                  >
                    <Link
                      href="/dashboard"
                      className={`font-display font-bold text-[28px] transition-colors ${
                        pathname === "/dashboard" ? "text-violet" : "text-1"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (NAV_LINKS.length + 1) * 0.1 }}
                  >
                    <button
                      type="button"
                      onClick={signOut}
                      className="font-display font-bold text-[28px] transition-colors text-1"
                    >
                      Sign out
                    </button>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (NAV_LINKS.length + 0) * 0.1 }}
                  >
                    <Link
                      href="/login"
                      className="font-display font-bold text-[28px] transition-colors text-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (NAV_LINKS.length + 1) * 0.1 }}
                  >
                    <Link
                      href="/signup"
                      className="font-display font-bold text-[28px] transition-colors text-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Create account
                    </Link>
                  </motion.div>
                </>
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (NAV_LINKS.length + 2) * 0.1 }}
                className="mt-8"
              >
                <Link
                  href="/upload"
                  className="btn-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {user ? "Scan Now" : "Sign up free"}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
