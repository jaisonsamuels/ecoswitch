import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Lightbulb, Recycle, Droplets, Car, Home } from "lucide-react"

const tips = [
  {
    icon: Leaf,
    title: "Choose Biodegradable Packaging",
    description:
      "Switch to packaging materials that break down naturally, reducing landfill waste and environmental impact.",
    category: "Packaging",
    impact: "Reduces plastic waste by 80%",
    color: "emerald",
  },
  {
    icon: Lightbulb,
    title: "Use LED Lighting",
    description: "Replace traditional bulbs with LED lights to reduce energy consumption and lower electricity bills.",
    category: "Energy",
    impact: "Saves 75% energy consumption",
    color: "yellow",
  },
  {
    icon: Recycle,
    title: "Implement Circular Economy",
    description: "Design products for reuse and recycling to minimize waste and maximize resource efficiency.",
    category: "Business",
    impact: "Reduces waste by 60%",
    color: "blue",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Install water-efficient fixtures and implement rainwater harvesting systems.",
    category: "Conservation",
    impact: "Saves 40% water usage",
    color: "cyan",
  },
  {
    icon: Car,
    title: "Electric Transportation",
    description: "Switch to electric vehicles for deliveries and business operations to reduce carbon emissions.",
    category: "Transport",
    impact: "Zero carbon emissions",
    color: "green",
  },
  {
    icon: Home,
    title: "Green Building Materials",
    description: "Use sustainable, locally-sourced materials for construction and renovation projects.",
    category: "Construction",
    impact: "Reduces carbon footprint by 50%",
    color: "teal",
  },
]

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-emerald-950 dark:via-gray-950 dark:to-green-950">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            Eco Tips & Guides
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sustainable <span className="text-emerald-600">Living Tips</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover practical ways to make your business and lifestyle more environmentally friendly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-${tip.color}-500 to-${tip.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                >
                  <tip.icon className="h-8 w-8 text-white" />
                </div>
                <Badge variant="secondary" className="mb-4">
                  {tip.category}
                </Badge>
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors">{tip.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{tip.description}</p>
                <div className="text-sm text-emerald-600 font-medium">💡 {tip.impact}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
