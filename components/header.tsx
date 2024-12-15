import { Bell, Menu, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" asChild className="hover:bg-primary/20">
            <Link href="/">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Link>
          </Button>
          <Link href="/" className="text-xl font-black tracking-tight hover:opacity-90">
            StellarSavings
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild className="font-medium hover:bg-primary/20">
            <Link href="/dashboard">Parent Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild className="font-medium hover:bg-primary/20">
            <Link href="/goals">Goals</Link>
          </Button>
          <Button variant="ghost" asChild className="font-medium hover:bg-primary/20">
            <Link href="/staking">Staking</Link>
          </Button>
          <Button variant="ghost" asChild className="font-medium hover:bg-primary/20">
            <Link href="/child-dashboard">Child Dashboard</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-primary/20">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/20">
            <User className="h-5 w-5" />
            <span className="sr-only">User account</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

