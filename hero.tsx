import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="overview" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Platform</p>
          <h1 className="text-pretty text-4xl font-semibold leading-tight md:text-5xl">
            AI‑Augmented DevSecOps Pipelines for Secure, Scalable SOA in Cloud‑Native Systems
          </h1>
          <p className="max-w-prose text-balance text-muted-foreground">
            Stop babysitting CI/CD. Embed zero‑trust security, policy‑as‑code, and continuous compliance—then scale
            confidently with intelligent automation.
          </p>
          <div className="flex items-center gap-3">
            <Button className="rounded-full">Get a demo</Button>
            <Button variant="secondary" className="rounded-full" asChild>
              <a href="#features">Explore the product</a>
            </Button>
          </div>
        </div>
        <div className="grid content-center gap-4">
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <div className="mb-3 text-sm text-muted-foreground">Pipeline Snapshot</div>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center justify-between rounded-lg border border-border/50 bg-background px-3 py-2">
                <span>SBOM + SAST</span>
                <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">Passed</span>
              </li>
              <li className="flex items-center justify-between rounded-lg border border-border/50 bg-background px-3 py-2">
                <span>Dependency Risk</span>
                <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">Mitigated</span>
              </li>
              <li className="flex items-center justify-between rounded-lg border border-border/50 bg-background px-3 py-2">
                <span>Policy Gate</span>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">SLO ≥ 99.9%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
