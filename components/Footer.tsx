import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-3 text-sm text-muted">{siteConfig.shortDescription}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-16">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/#features" className="hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#continuity" className="hover:text-foreground">
                  Continuity
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.chromeStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Chrome Web Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/support" className="hover:text-foreground">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted">
        © {year} {siteConfig.name}. Not affiliated with Anthropic. Claude is a
        trademark of Anthropic, PBC.
      </div>
    </footer>
  );
}
