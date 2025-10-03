export function Architecture() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Reference Architecture</h2>
        <p className="text-muted-foreground">
          A service‑oriented architecture with signed artifacts, zero‑trust deployment, and runtime policy enforcement.
        </p>
      </div>
      <div className="rounded-xl border border-border/60 bg-card p-4">
        <img
          src="/reference-diagram-showing-devsecops-stages-ci-cd-s.jpg"
          alt="Reference diagram of the DevSecOps pipeline stages"
          className="h-auto w-full rounded-lg"
        />
      </div>
    </section>
  )
}
