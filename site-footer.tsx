export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} AI•DevSecOps</p>
        <div className="text-xs text-muted-foreground">Secure. Observable. Scalable.</div>
      </div>
    </footer>
  )
}
