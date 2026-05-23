import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] border-t border-[var(--border)] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[var(--border)]">
          <div>
            <Link href="/" className="font-display font-bold text-[28px] text-1">
              Clau<span className="text-violet">z</span>e
            </Link>
            <p className="font-body font-light text-[16px] text-3 mt-2">
              Read the fine print. Finally.
            </p>
          </div>
          <Link
            href="/upload"
            className="btn-primary h-[44px]"
          >
            Try Clauze Free
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          {/* Product */}
          <div>
            <h4 className="font-display font-bold text-[13px] uppercase tracking-widest text-3 mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/how-it-works" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/upload" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Try Free
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-[13px] uppercase tracking-widest text-3 mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Not Legal Advice
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-[13px] uppercase tracking-widest text-3 mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  Twitter/X
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-body text-[16px] text-2 hover:text-1 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body font-light text-[14px] text-4">
            © 2025 Clauze. All rights reserved.
          </p>
          <p className="font-body font-light text-[13px] text-4">
            Clauze is not a law firm and does not provide legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
