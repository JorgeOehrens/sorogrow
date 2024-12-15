import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { PlusCircle, Smartphone, Home, GraduationCap } from 'lucide-react'

export default function Goals() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Gestión de Metas</h2>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Nueva Meta
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Smartphone className="mr-2 h-5 w-5" />
                Celular Nuevo
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
              <Button className="w-full mt-4">Ajustar Meta</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Fondo para Casa
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
              <Button className="w-full mt-4">Ajustar Meta</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Pagos Estudiantiles
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
              <Button className="w-full mt-4">Ajustar Meta</Button>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Crear Nueva Meta</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nombre de la Meta</Label>
                <Input id="name" placeholder="Ej: Vacaciones Familiares" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="amount">Cantidad Objetivo</Label>
                <Input id="amount" type="number" placeholder="Ej: 5000" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Fecha Objetivo</Label>
                <Input id="date" type="date" />
              </div>
              <Button className="w-full">Crear Meta</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

