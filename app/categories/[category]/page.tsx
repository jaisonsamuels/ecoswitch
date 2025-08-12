import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = {
  packaging: [
    {
      name: "Biodegradable Food Containers",
      price: "₹299",
      rating: 5,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=400",
      savings: "Save 80% plastic waste",
      features: ["Compostable", "Microwave Safe", "Leak Proof"],
    },
    {
      name: "Eco-Friendly Bubble Wrap",
      price: "₹450",
      rating: 4,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=400",
      savings: "100% recyclable",
      features: ["Biodegradable", "Protective", "Reusable"],
    },
    {
      name: "Sustainable Shipping Boxes",
      price: "₹199",
      rating: 5,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=400",
      savings: "Made from recycled materials",
      features: ["Recyclable", "Durable", "Various Sizes"],
    },
  ],
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryProducts = products[params.category as keyof typeof products] || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-emerald-950 dark:via-gray-950 dark:to-green-950">
      <div className="container px-4 py-16 mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/categories">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Link>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">
            {params.category} <span className="text-emerald-600">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Sustainable {params.category} solutions for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="aspect-video relative bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-emerald-600 font-bold">{product.price}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium mb-4">
                  <CheckCircle className="h-4 w-4" />
                  {product.savings}
                </div>
                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <Badge key={i} variant="secondary" className="mr-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
