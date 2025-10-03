export function Metrics() {
  const items = [
    { k: "20 days", v: "saved on builds" },
    { k: "98% faster", v: "time to market" },
    { k: "300% increase", v: "in release confidence" },
    { k: "6× faster", v: "to build + deploy" },
  ]
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-border/60 md:grid-cols-4 md:divide-x md:divide-y-0">
        {items.map(({ k, v }) => (
          <div key={k} className="px-6 py-8">
            <div className="text-xl font-semibold">{k}</div>
            <div className="text-muted-foreground">{v}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
