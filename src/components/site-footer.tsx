import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="container w-full border-t bg-background">
      <div className=" flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Affiliate Quiz. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms
          </Link>
          <Link
            href="/affiliate-disclosure"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Affiliate Disclosure
          </Link>
        </div>
      </div>
    </footer>
  )
}