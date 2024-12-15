import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Wallet, Target, Coins, User } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Bienvenido a StellarSavings</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Wallet className="mr-2 h-5 w-5" />
                Dashboard del Padre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/dashboard">Ir al Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Target className="mr-2 h-5 w-5" />
                Gestión de Metas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/goals">Ver Metas</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Coins className="mr-2 h-5 w-5" />
                Staking de Stellar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/staking">Ir a Staking</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <User className="mr-2 h-5 w-5" />
                Dashboard del Niño
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href="/child-dashboard">Ver Dashboard del Niño</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

