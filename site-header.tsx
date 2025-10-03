"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#" className="font-mono text-sm">
          <span className="rounded-md border border-border px-2 py-1">AI•DevSecOps</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground">
            Overview
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
            Features
          </a>
          <a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground">
            Architecture
          </a>
          <a href="#future" className="text-sm text-muted-foreground hover:text-foreground">
            Roadmap
          </a>
        </div>
        <Button
          size="sm"
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
      </nav>
    </header>
  )
}
