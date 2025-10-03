"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

export function DemoDialog() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener("open-demo", handler as EventListener)
    return () => window.removeEventListener("open-demo", handler as EventListener)
  }, [])

  async function onSubmit(fd: FormData) {
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      role: String(fd.get("role") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    }

    if (!payload.name || !payload.email || !payload.role) {
      toast({ title: "Missing info", description: "Name, email, and role are required." })
      return
    }

    try {
      const res = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setOpen(false)
      toast({ title: "Thanks!", description: "We received your request and will reach out shortly." })
    } catch (err: any) {
      toast({ title: "Submission failed", description: err?.message ?? "Please try again." })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Get a demo</DialogTitle>
        </DialogHeader>

        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit(new FormData(e.currentTarget as HTMLFormElement))
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Work email</Label>
            <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" name="company" placeholder="Acme Corp" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Select
              name="role"
              onValueChange={(v) => {
                const el = document.querySelector<HTMLInputElement>('input[name="role-hidden"]')
                if (el) el.value = v
              }}
            >
              <SelectTrigger id="role" aria-label="Your role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Developer">Developer</SelectItem>
                <SelectItem value="SRE">SRE</SelectItem>
                <SelectItem value="Security">Security</SelectItem>
                <SelectItem value="Platform">Platform</SelectItem>
                <SelectItem value="Executive">Executive</SelectItem>
              </SelectContent>
            </Select>
            {/* Hidden input to include Select value in FormData */}
            <input type="hidden" name="role-hidden" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">What would you like to achieve?</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your services, challenges, and goals." />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <Button type="button" variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
