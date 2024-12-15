"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { PlusCircle, Smartphone, Home, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Goals() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isAdjustDialogOpen, setIsAdjustDialogOpen] = useState(false)
  const [currentGoal, setCurrentGoal] = useState(null)
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Goal Management</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="button-primary">
                <PlusCircle className="mr-2 h-4 w-4" /> New Goal
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Goal</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Goal Name</Label>
                  <Input id="name" placeholder="E.g., New Phone" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="amount">Target Amount</Label>
                  <Input id="amount" type="number" placeholder="E.g., 500" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="date">Target Date</Label>
                  <Input id="date" type="date" />
                </div>
                <Button type="submit" className="w-full button-primary">Create Goal</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="mr-2 h-5 w-5" />
                New Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={37.5} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>$300 / $800</span>
                  <span>37.5%</span>
                </div>
              </div>
              <Button 
                className="w-full mt-4 button-secondary" 
                onClick={() => {
                  setCurrentGoal({ name: "New Phone", targetAmount: 800, targetDate: "2024-01-01" });
                  setIsAdjustDialogOpen(true);
                }}
              >
                Adjust Goal
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                House Fund
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={15} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>$3,000 / $20,000</span>
                  <span>15%</span>
                </div>
              </div>
              <Button 
                className="w-full mt-4 button-secondary" 
                onClick={() => {
                  setCurrentGoal({ name: "House Fund", targetAmount: 20000, targetDate: "2025-12-31" });
                  setIsAdjustDialogOpen(true);
                }}
              >
                Adjust Goal
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                College Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={50} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>$5,000 / $10,000</span>
                  <span>50%</span>
                </div>
              </div>
              <Button 
                className="w-full mt-4 button-secondary" 
                onClick={() => {
                  setCurrentGoal({ name: "College Payments", targetAmount: 10000, targetDate: "2024-05-31" });
                  setIsAdjustDialogOpen(true);
                }}
              >
                Adjust Goal
              </Button>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Create New Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Goal Name</Label>
                <Input id="name" placeholder="E.g., Family Vacation" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">Target Amount</Label>
                <Input id="amount" type="number" placeholder="E.g., 5000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Target Date</Label>
                <Input id="date" type="date" />
              </div>
              <Button className="w-full">Create Goal</Button>
            </form>
          </CardContent>
        </Card>
        <Dialog open={isAdjustDialogOpen} onOpenChange={setIsAdjustDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adjust Goal: {currentGoal?.name}</DialogTitle>
            </DialogHeader>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="adjust-amount">New Target Amount</Label>
                <Input id="adjust-amount" type="number" defaultValue={currentGoal?.targetAmount} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="adjust-date">New Target Date</Label>
                <Input id="adjust-date" type="date" defaultValue={currentGoal?.targetDate} />
              </div>
              <Button type="submit" className="w-full button-primary">Update Goal</Button>
            </form>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}

