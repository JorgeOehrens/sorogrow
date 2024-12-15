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
        <h2 className="text-2xl font-bold mb-6">Stellar Staking</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Available Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <CoinIcon className="h-6 w-6 text-yellow-500" />
                <span className="text-2xl font-bold">1,234.56 XLM</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Equivalent to $617.28 USD
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Current Yield</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <span className="text-2xl font-bold">5.2% APY</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Based on the last 30 days performance
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Stake your XLM</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stake-amount">Amount to Stake</Label>
                <Input
                  id="stake-amount"
                  type="number"
                  placeholder="Enter XLM amount"
                />
              </div>
              <div className="space-y-2">
                <Label>Lock Period</Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    defaultValue={[3]}
                    max={12}
                    step={1}
                    className="flex-grow"
                  />
                  <span className="text-sm font-medium">3 months</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Estimated Yield</Label>
                <div className="flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-lg font-bold">16.25 XLM</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Based on current APY and selected period
                </p>
              </div>
              <Button className="w-full">Stake XLM</Button>
            </form>
          </CardContent>
        </Card>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Staked XLM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">500 XLM</p>
                  <p className="text-sm text-muted-foreground">
                    Locked for 6 months
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+13.5 XLM</p>
                  <p className="text-sm text-muted-foreground">
                    Estimated yield
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">250 XLM</p>
                  <p className="text-sm text-muted-foreground">
                    Locked for 3 months
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">+3.25 XLM</p>
                  <p className="text-sm text-muted-foreground">
                    Estimated yield
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Unlock className="mr-2 h-4 w-4" /> Unlock Funds
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

