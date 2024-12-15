import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { CoinsIcon as CoinIcon, TrendingUp, Lock, Unlock } from 'lucide-react'

export default function Staking() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-6">Staking de Stellar</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Balance Disponible</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CoinIcon className="h-6 w-6 text-yellow-500" />
                <span className="text-2xl font-bold">1,234.56 XLM</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Equivalente a $617.28 USD
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Rendimiento Actual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <span className="text-2xl font-bold">5.2% APY</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Basado en el rendimiento de los últimos 30 días
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Stake tus XLM</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stake-amount">Cantidad a Stake</Label>
                <Input
                  id="stake-amount"
                  type="number"
                  placeholder="Ingresa la cantidad de XLM"
                />
              </div>
              <div className="space-y-2">
                <Label>Período de Bloqueo</Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    defaultValue={[3]}
                    max={12}
                    step={1}
                    className="flex-grow"
                  />
                  <span className="text-sm font-medium">3 meses</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Rendimiento Estimado</Label>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-lg font-bold">16.25 XLM</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Basado en el APY actual y el período seleccionado
                </p>
              </div>
              <Button className="w-full">Stake XLM</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>XLM en Staking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">500 XLM</p>
                  <p className="text-sm text-muted-foreground">
                    Bloqueado por 6 meses
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+13.5 XLM</p>
                  <p className="text-sm text-muted-foreground">
                    Rendimiento estimado
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">250 XLM</p>
                  <p className="text-sm text-muted-foreground">
                    Bloqueado por 3 meses
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+3.25 XLM</p>
                  <p className="text-sm text-muted-foreground">
                    Rendimiento estimado
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Unlock className="mr-2 h-4 w-4" /> Desbloquear Fondos
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

