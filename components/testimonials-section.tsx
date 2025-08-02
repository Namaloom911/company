"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Inc.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Digivelopers transformed our startup vision into a scalable platform that attracted $2M in Series A funding. Their AI integration expertise was game-changing for our business model.",
    company: "TechStart Inc.",
    result: "300% user growth in 6 months",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO, GlobalCorp",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The automation solutions they built saved us 40 hours per week and reduced operational costs by 60%. Their team understood our complex requirements perfectly.",
    company: "GlobalCorp",
    result: "60% cost reduction",
  },
  {
    name: "Emily Watson",
    role: "Marketing Director, BrandForward",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Our website redesign and SEO optimization led to a 250% increase in organic traffic. The chatbot they developed handles 80% of our customer inquiries automatically.",
    company: "BrandForward",
    result: "250% traffic increase",
  },
  {
    name: "David Kim",
    role: "Founder, EcoSolutions",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "From concept to launch in just 3 months. Their agile approach and constant communication made the entire process seamless. The app now has 50K+ active users.",
    company: "EcoSolutions",
    result: "50K+ active users",
  },
  {
    name: "Lisa Thompson",
    role: "VP Operations, RetailMax",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The digital marketing campaign they created generated 400% ROI in the first quarter. Their data-driven approach and creative execution exceeded all expectations.",
    company: "RetailMax",
    result: "400% ROI achieved",
  },
  {
    name: "Alex Johnson",
    role: "Product Manager, FinanceFlow",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Their AI consulting helped us identify automation opportunities we never considered. The implementation roadmap they provided is now our strategic blueprint for the next 2 years.",
    company: "FinanceFlow",
    result: "2-year strategic roadmap",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Client</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with Digivelopers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Result */}
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-3 mb-6">
                  <p className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Result: {testimonial.result}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
