"use client"

import { useEffect, useRef, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ChatbotWidget() {
  const [open, setOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "sys-1",
        role: "system",
        content:
          "You are an expert assistant for AI‑Augmented DevSecOps Pipelines in cloud‑native, service‑oriented architectures. Be concise, accurate, and helpful. If asked about demos, direct them to the 'Get a demo' button.",
      },
    ],
  })

  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    function onK(e: KeyboardEvent) {
      // Ctrl/Cmd+K toggles chat
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onK)
    return () => window.removeEventListener("keydown", onK)
  }, [])

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
        {open && (
          <Card id="chatbot-widget" className="w-[340px] sm:w-[380px] border-border/60 bg-card shadow-lg">
            <div className="flex items-center justify-between border-b border-border/60 p-3">
              <div className="text-sm font-medium">Ask about AI DevSecOps</div>
              <div className="flex items-center gap-2">
                {isLoading ? (
                  <Button size="icon" variant="ghost" aria-label="Stop generating" onClick={() => stop()}>
                    <span className="i-lucide-square text-muted-foreground">■</span>
                  </Button>
                ) : null}
                <Button size="icon" variant="ghost" aria-label="Close chat" onClick={() => setOpen(false)}>
                  <span className="i-lucide-x text-muted-foreground">×</span>
                </Button>
              </div>
            </div>

            <ScrollArea className="h-64 p-3">
              <div className="flex flex-col gap-3">
                {messages
                  .filter((m) => m.role !== "system")
                  .map((m) => (
                    <div
                      key={m.id}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        m.role === "user"
                          ? "ml-auto max-w-[85%] bg-primary/15 text-foreground"
                          : "mr-auto max-w-[85%] bg-muted text-foreground"
                      }`}
                    >
                      {m.content}
                    </div>
                  ))}
                {messages.filter((m) => m.role !== "system").length === 0 && (
                  <div className="text-xs text-muted-foreground">
                    Ask anything about:
                    <ul className="mt-1 list-disc pl-4">
                      <li>Pipeline stages (build, test, secure, deploy)</li>
                      <li>Security controls (SAST/DAST, SBOM, policy gates)</li>
                      <li>Self-healing with AI-driven anomaly detection</li>
                    </ul>
                    Tip: Press Ctrl/Cmd+K to toggle chat.
                  </div>
                )}
              </div>
            </ScrollArea>

            <form
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(e)
              }}
              className="flex items-center gap-2 border-t border-border/60 p-3"
            >
              <Input
                name="input"
                autoComplete="off"
                placeholder="Ask anything... (DevSecOps, cloud, or general)"
                value={input}
                onChange={handleInputChange}
                className="bg-background"
                aria-label="Chat message"
              />
              <Button type="submit" disabled={isLoading}>
                Send
              </Button>
            </form>
          </Card>
        )}

        <Button
          className="rounded-full shadow-lg"
          variant="default"
          aria-expanded={open}
          aria-controls="chatbot-widget"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close chat" : "Chat"}
        </Button>
      </div>
    </>
  )
}
