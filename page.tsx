"use client"

import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Metrics } from "@/components/metrics"
import { PipelineOverview } from "@/components/pipeline-overview"
import { Architecture } from "@/components/architecture"
import { FutureEnhancement } from "@/components/future-enhancement"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { DemoDialog } from "@/components/demo-dialog"
import { EntryModal } from "@/components/entry-modal"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function Page() {
  return (
    <>
      <EntryModal />
      <DemoDialog />

      <SiteHeader />
      <main>
        <Hero />
        <Metrics />
        <PipelineOverview />
        <Architecture />
        <FutureEnhancement />
        <section id="cta" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="rounded-xl border border-border/60 bg-card p-8 text-center">
            <h2 className="mb-3 text-2xl font-semibold">Ready to modernize your pipeline?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              See how AI‑augmented DevSecOps reduces risk and accelerates delivery across your service‑oriented
              architecture.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button
                className="rounded-full"
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("open-demo"))
                  }
                }}
              >
                Get a demo
              </Button>
              <Button variant="secondary" className="rounded-full" asChild>
                <a href="#overview">Back to top</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ChatbotWidget />
    </>
  )
}
