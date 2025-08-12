import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Package, Zap, Truck, Sparkles, Home, Building2 } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Packaging",
    icon: Package,
    description: "Biodegradable containers, eco-friendly wrapping, and sustainable packaging solutions",
    productCount: 45,
    color: "emerald",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    name: "Energy",
    icon: Zap,
    description: "Solar panels, wind turbines, and renewable energy solutions for businesses",
    productCount: 32,
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    name: "Delivery",
    icon: Truck,
    description: "Electric vehicles, cargo bikes, and sustainable transportation options",
    productCount: 28,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Cleaning",
    icon: Sparkles,
    description: "Non-toxic cleaners, biodegradable soaps, and eco-friendly cleaning supplies",
    productCount: 56,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Office",
    icon: Building2,
    description: "Recycled paper, sustainable furniture, and green office supplies",
    productCount: 41,
    color: "teal",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    name: "Home",
    icon: Home,
    description: "Sustainable home goods, energy-efficient appliances, and eco-friendly decor",
    productCount: 67,
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-emerald-950 dark:via-gray-950 dark:to-green-950">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            Product Categories
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore <span className="text-emerald-600">Eco Categories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our comprehensive collection of sustainable products organized by category to find exactly what you
            need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg cursor-pointer h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <category.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{category.description}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Badge
                      variant="secondary"
                      className="group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors"
                    >
                      {category.productCount} Products
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
