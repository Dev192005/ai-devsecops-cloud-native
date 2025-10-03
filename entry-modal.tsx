"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

type Role = "Developer" | "SRE" | "Security" | "Platform" | "Executive"

export function EntryModal() {
  const [open, setOpen] = useState(false)
  const [role, setRole] = useState<Role | undefined>(undefined)
  const { toast } = useToast()

  // Show on first visit if no authUser in localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    const user = window.localStorage.getItem("authUser")
    if (!user) {
      setOpen(true)
    }
  }, [])

  function completeEntry(user: { email: string; name?: string; role: Role }) {
    if (typeof window === "undefined") return
    window.localStorage.setItem("authUser", JSON.stringify(user))
    window.localStorage.setItem("userRole", user.role)
    setOpen(false)
    toast({
      title: "Welcome",
      description: `Signed in as ${user.email} (${user.role}).`,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign in to continue</DialogTitle>
        </DialogHeader>

        <div className="mb-4">
          <Label htmlFor="role">Who are you?</Label>
          <Select onValueChange={(v) => setRole(v as Role)} value={role}>
            <SelectTrigger id="role" aria-label="Who are you?">
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
          <p className="mt-1 text-xs text-muted-foreground">We personalize content based on your role.</p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="pt-4">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const fd = new FormData(e.currentTarget as HTMLFormElement)
                const email = String(fd.get("email") || "").trim()
                const password = String(fd.get("password") || "").trim()
                if (!role) {
                  return toast({
                    title: "Select your role",
                    description: "Please choose who you are.",
                    variant: "default",
                  })
                }
                if (!email || !password) {
                  return toast({ title: "Missing info", description: "Email and password are required." })
                }
                completeEntry({ email, role })
              }}
            >
              <div className="grid gap-2">
                <Label htmlFor="email-in">Email</Label>
                <Input id="email-in" name="email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-in">Password</Label>
                <Input id="password-in" name="password" type="password" required placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="pt-4">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                const fd = new FormData(e.currentTarget as HTMLFormElement)
                const name = String(fd.get("name") || "").trim()
                const email = String(fd.get("email") || "").trim()
                const password = String(fd.get("password") || "").trim()
                if (!role) {
                  return toast({
                    title: "Select your role",
                    description: "Please choose who you are.",
                    variant: "default",
                  })
                }
                if (!name || !email || !password) {
                  return toast({ title: "Missing info", description: "Name, email, and password are required." })
                }
                completeEntry({ email, name, role })
              }}
            >
              <div className="grid gap-2">
                <Label htmlFor="name-up">Full name</Label>
                <Input id="name-up" name="name" required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email-up">Email</Label>
                <Input id="email-up" name="email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-up">Password</Label>
                <Input id="password-up" name="password" type="password" required placeholder="Create a password" />
              </div>
              <Button type="submit" className="w-full">
                Create account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
