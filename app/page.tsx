import { ArrowRight, Leaf, Recycle, TreePine, Zap, Shield, Heart, Globe, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy Policy" },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.2"></div>

        {/* Floating Elements with enhanced animations */}
        <div className="absolute top-20 left-10 opacity-20 animate-float-gentle hover:opacity-40 transition-opacity duration-300">
          <Leaf className="h-16 w-16 text-emerald-500 hover:text-emerald-400 transition-colors duration-300" />
        </div>
        <div
          className="absolute top-40 right-20 opacity-20 animate-float-gentle hover:opacity-40 transition-opacity duration-300"
          style={{ animationDelay: "2s" }}
        >
          <TreePine className="h-20 w-20 text-green-600 hover:text-green-500 transition-colors duration-300" />
        </div>
        <div className="absolute bottom-32 left-20 opacity-20 animate-breathe hover:opacity-40 transition-opacity duration-300">
          <Recycle className="h-14 w-14 text-teal-500 hover:text-teal-400 transition-colors duration-300" />
        </div>

        <div className="container px-4 py-20 lg:py-32 mx-auto relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300 px-4 py-2 text-sm font-medium scroll-reveal hover:scale-105 transition-all duration-300 cursor-pointer magnetic">
              🌱 Join 10,000+ Eco Warriors
            </Badge>

            <div className="text-reveal">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 hover:scale-105 transition-transform duration-500 cursor-default">
                <span>Switch to </span>
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent animate-gradient hover:from-emerald-500 hover:via-green-500 hover:to-teal-500 transition-all duration-300">
                  Sustainable Living
                </span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed scroll-reveal-scale hover:text-foreground transition-colors duration-300">
              Find eco-friendly products that help reduce pollution and create a better future for our planet. Discover
              sustainable alternatives to everyday items.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 scroll-reveal-left">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group magnetic ripple"
              >
                <Link href="/categories">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent hover:scale-105 hover:-translate-y-1 hover:shadow-lg magnetic"
              >
                <Link href="/tips">Learn More</Link>
              </Button>
            </div>

            {/* Stats with staggered animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "500+", label: "Eco Products", color: "text-emerald-600" },
                { value: "10K+", label: "Happy Users", color: "text-green-600" },
                { value: "50%", label: "Carbon Reduced", color: "text-teal-600" },
                { value: "24/7", label: "Support", color: "text-emerald-600" },
              ].map((stat, index) => (
                <div key={index} className={`text-center group cursor-pointer scroll-reveal stagger-${index + 1}`}>
                  <div
                    className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse magnetic`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20 scroll-reveal">
            <Badge className="mb-4 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:scale-105 transition-transform duration-300 magnetic">
              Why Choose EcoSwitch?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              Make a{" "}
              <span className="text-emerald-600 hover:text-emerald-500 transition-colors duration-300">Difference</span>{" "}
              Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto hover:text-foreground transition-colors duration-300">
              We make it easy to find and switch to sustainable alternatives that benefit both you and the environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Eco-Friendly",
                description: "All products are carefully selected for their environmental benefits and sustainability",
                color: "emerald",
                gradient: "from-emerald-500 to-green-500",
              },
              {
                icon: Zap,
                title: "Energy Efficient",
                description: "Reduce your carbon footprint with low-energy alternatives and smart solutions",
                color: "yellow",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: Recycle,
                title: "Circular Economy",
                description: "Products designed for reuse, recycling, and minimal waste generation",
                color: "blue",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                title: "Verified Quality",
                description: "Every product is tested and verified for quality, safety, and environmental impact",
                color: "purple",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 cursor-pointer hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 dark:hover:from-emerald-950 dark:hover:to-green-950 scroll-reveal-scale stagger-${index + 1} magnetic ripple`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl animate-morph`}
                  >
                    <feature.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 transition-colors duration-300 group-hover:scale-105">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
              Featured{" "}
              <span className="text-emerald-600 hover:text-emerald-500 transition-colors duration-300">
                Eco Products
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto hover:text-foreground transition-colors duration-300">
              Discover our most popular sustainable alternatives that are making a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Biodegradable Food Containers",
                category: "Packaging",
                rating: 5,
                image: "/placeholder.svg?height=300&width=400",
                price: "₹299",
                savings: "Save 80% plastic waste",
              },
              {
                name: "Solar Panel Kit",
                category: "Energy",
                rating: 5,
                image: "/placeholder.svg?height=300&width=400",
                price: "₹25,999",
                savings: "70% energy cost reduction",
              },
              {
                name: "Electric Delivery Scooter",
                category: "Transport",
                rating: 4,
                image: "/placeholder.svg?height=300&width=400",
                price: "₹89,999",
                savings: "Zero emissions",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 shadow-lg cursor-pointer hover:rotate-1"
              >
                <div className="aspect-video relative bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-300">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Badge className="bg-white text-emerald-600 font-bold hover:bg-emerald-50 transition-colors duration-300">
                      {product.price}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950 transition-colors duration-300">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300 group-hover:scale-105">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`${i < product.rating ? "text-emerald-500" : "text-gray-300"} group-hover:animate-bounce transition-all duration-300`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        🌱
                      </span>
                    ))}
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      ({product.rating}/5)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium group-hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 group-hover:animate-pulse" />
                    {product.savings}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <Link href="/categories">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:scale-105 transition-transform duration-300">
                Environmental Impact
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 hover:scale-105 transition-transform duration-300 cursor-default">
                Together We're Making a{" "}
                <span className="text-emerald-600 hover:text-emerald-500 transition-colors duration-300">
                  Real Impact
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed hover:text-foreground transition-colors duration-300">
                Every sustainable choice you make contributes to a healthier planet. Join our community of eco-warriors
                making a difference.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Globe, text: "50,000 tons of CO2 reduced", color: "text-blue-600" },
                  { icon: Recycle, text: "1 million plastic items replaced", color: "text-green-600" },
                  { icon: TreePine, text: "10,000 trees saved equivalent", color: "text-emerald-600" },
                  { icon: Heart, text: "Healthier communities worldwide", color: "text-red-500" },
                ].map((impact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900 dark:to-green-900 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg">
                      <impact.icon className={`h-6 w-6 ${impact.color} group-hover:animate-pulse`} />
                    </div>
                    <span className="text-lg font-medium group-hover:text-emerald-600 transition-colors duration-300">
                      {impact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <Card className="relative bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-emerald-950 border-0 shadow-2xl group-hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "98%", label: "Customer Satisfaction", gradient: "from-emerald-500 to-green-500" },
                      { value: "24/7", label: "Eco Support", gradient: "from-blue-500 to-cyan-500" },
                      { value: "500+", label: "Verified Products", gradient: "from-purple-500 to-pink-500" },
                      { value: "100%", label: "Eco-Certified", gradient: "from-orange-500 to-red-500" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className={`text-center p-6 bg-gradient-to-br ${stat.gradient} rounded-2xl text-white cursor-pointer hover:scale-110 transition-all duration-300 hover:rotate-3 hover:shadow-2xl group`}
                      >
                        <div className="text-3xl font-bold mb-2 group-hover:animate-pulse">{stat.value}</div>
                        <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-green-600/20 to-teal-600/20 animate-gradient"></div>
        <div className="container px-4 mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            Join thousands of people making sustainable choices every day. Start your eco-friendly journey today and
            help create a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group"
            >
              <Link href="/categories">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href="/submit">Submit Product</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6 group cursor-pointer">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Leaf className="h-6 w-6 text-white group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <span className="text-2xl font-bold group-hover:text-emerald-400 transition-colors duration-300">
                  EcoSwitch
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md hover:text-gray-300 transition-colors duration-300">
                Making sustainable living accessible to everyone. Join us in creating a greener, cleaner future for our
                planet.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-12 hover:shadow-lg group"
                  >
                    <Star className="h-5 w-5 group-hover:animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 hover:text-emerald-400 transition-colors duration-300 cursor-default">
                Quick Links
              </h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 hover:text-emerald-400 transition-colors duration-300 cursor-default">
                Categories
              </h3>
              <div className="space-y-2">
                {["Packaging", "Energy", "Delivery", "Cleaning", "Office", "Home"].map((category) => (
                  <Link
                    key={category}
                    href={`/categories/${category.toLowerCase()}`}
                    className="block text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 hover:text-gray-300 transition-colors duration-300">
            <p>&copy; 2024 EcoSwitch. All rights reserved. Making the world greener, one product at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
