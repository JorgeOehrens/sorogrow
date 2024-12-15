import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Wallet, Target, Coins, User } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-[980px] mx-auto">
          <h1 className="text-6xl mb-6 leading-[1.1]">
            Connect Reality and
            <span className="highlight-yellow ml-3">Blockchain</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-[750px]">
            Empower creators to unlock human and economic potential. Combine a powerful decentralized blockchain with a global ecosystem of innovators.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-lg">
                  <Wallet className="mr-2 h-5 w-5" />
                  Parent Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full button-primary">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-lg">
                  <Target className="mr-2 h-5 w-5" />
                  Goal Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full button-primary">
                  <Link href="/goals">View Goals</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-lg">
                  <Coins className="mr-2 h-5 w-5" />
                  Stellar Staking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full button-primary">
                  <Link href="/staking">Go to Staking</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="stats-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-lg">
                  <User className="mr-2 h-5 w-5" />
                  Child Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full button-primary">
                  <Link href="/child-dashboard">View Child Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

