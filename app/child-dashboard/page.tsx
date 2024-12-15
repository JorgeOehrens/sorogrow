import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PiggyBank, Gift, TrendingUp, Star } from 'lucide-react'

export default function ChildDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-6">My Savings Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                My Savings
              </CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$567.89</div>
              <p className="text-xs text-muted-foreground">
                +$50 since last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Next Reward
              </CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$10.00</div>
              <p className="text-xs text-muted-foreground">
                When you reach $600 in savings
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Growth
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12%</div>
              <p className="text-xs text-muted-foreground">
                Increase in the last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Saver Level
              </CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Silver</div>
              <p className="text-xs text-muted-foreground">
                50 XLM more for Gold level!
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>My Current Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    New Phone
                  </p>
                  <p className="text-xs text-muted-foreground">
                    $300 / $800
                  </p>
                </div>
                <p className="text-sm font-medium">37.5%</p>
              </div>
              <Progress value={37.5} className="h-2" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Keep it up! You're getting closer to your goal.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>My Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 rounded-full p-2">
                  <PiggyBank className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium">First Savings</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 rounded-full p-2">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium">Consistent Saver</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-300 rounded-full p-2">
                  <Star className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Super Saver</p>
                  <p className="text-xs text-muted-foreground">In progress</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

