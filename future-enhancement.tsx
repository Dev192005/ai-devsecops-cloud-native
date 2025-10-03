import { Button } from "@/components/ui/button"

export function FutureEnhancement() {
  return (
    <section id="future" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold">Future Enhancement: Self‑Healing Pipelines</h2>
        <span className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">Roadmap</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-muted-foreground">
            AI‑driven anomaly detection continuously learns baseline build, test, and deploy behavior. When drift or
            risk is detected, the pipeline auto‑remediates: isolate the change, roll back, open a PR with fixes, and
            attach evidence for audit.
          </p>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            <li>• Unsupervised signal modeling on logs, metrics, and traces</li>
            <li>• Root‑cause suggestions with code‑level diffs</li>
            <li>• Policy‑aware remediation playbooks</li>
            <li>• Post‑incident learning to prevent recurrence</li>
          </ul>
          <div className="pt-2">
            <Button className="rounded-full bg-transparent" variant="outline" asChild>
              <a href="#cta">Notify me at GA</a>
            </Button>
          </div>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-4">
          <img
            src="/ai-anomaly-detection-timeline-with-auto-rollback.jpg"
            alt="Concept mock of anomaly detection timeline and auto-rollback"
            className="h-auto w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
