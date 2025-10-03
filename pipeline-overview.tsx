import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Security by Default",
    desc: "SCA, SAST, DAST, SBOM export, and supply‑chain integrity checks across every merge.",
  },
  {
    title: "Policy as Code",
    desc: "OPA/Rego gates enforce secrets hygiene, image signing, and environment guardrails.",
  },
  {
    title: "Continuous Compliance",
    desc: "Runtime drift detection and evidence trails for SOC2/ISO with automated attestations.",
  },
  {
    title: "Observability",
    desc: "SLOs, error budgets, and release health feed deployment gates and rollback logic.",
  },
]

export function PipelineOverview() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold">Pipeline Overview</h2>
        <p className="text-sm text-muted-foreground">Built for Kubernetes, serverless, and edge workloads.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {features.map((f) => (
          <Card key={f.title} className="border-border/60">
            <CardHeader>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{f.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
