import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, Wallet, PiggyBank, TrendingUp } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-6">
        <h2 className="text-4xl font-black tracking-tight mb-8">Parent Dashboard</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-background border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,234.56</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Child's Savings
              </CardTitle>
              <PiggyBank className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$567.89</div>
              <p className="text-xs text-muted-foreground">
                46% of monthly goal
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Staking Returns
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.2%</div>
              <p className="text-xs text-muted-foreground">
                APY in the last 30 days
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Next Transfer
              </CardTitle>
              <ArrowUpRight className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$100.00</div>
              <p className="text-xs text-muted-foreground">
                Scheduled for 05/01/2024
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-muted">
              <TabsTrigger value="overview" className="data-[state=active]:bg-secondary">Overview</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-secondary">Analytics</TabsTrigger>
              <TabsTrigger value="reports" className="data-[state=active]:bg-secondary">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card className="bg-background border-2">
                <CardHeader>
                  <CardTitle>Savings Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">
                          Goal: New Phone
                        </p>
                        <p className="text-xs text-muted-foreground">
                          $300 / $800
                        </p>
                      </div>
                      <p className="text-sm font-medium">37.5%</p>
                    </div>
                    <Progress value={37.5} className="h-2 bg-muted" indicatorClassName="bg-secondary" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card className="bg-background border-2">
                <CardHeader>
                  <CardTitle>Savings Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Monthly Savings Trend</h4>
                      <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
                        [Placeholder for Monthly Savings Chart]
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Top Saving Categories</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>Emergency Fund</span>
                          <span className="font-medium">$500</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Vacation</span>
                          <span className="font-medium">$300</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>New Gadget</span>
                          <span className="font-medium">$200</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

