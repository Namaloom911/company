"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Digivelopers transformed our online presence completely. Their AI-powered solutions increased our conversion rate by 300% and the website performance is outstanding.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthCorp",
    content:
      "The team delivered exceptional results on our digital marketing campaign. Their SEO expertise helped us rank #1 for our target keywords within 3 months.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, EcoSolutions",
    content:
      "Working with Digivelopers was a game-changer. They built us a beautiful, responsive website and implemented chatbot automation that saves us 20 hours per week.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Thompson",
    role: "CTO, InnovateLab",
    content:
      "Their technical expertise is unmatched. The custom web application they developed for us handles thousands of users seamlessly and the code quality is exceptional.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Park",
    role: "Operations Manager, RetailPlus",
    content:
      "The AI consulting services helped us automate our inventory management. We've seen a 40% reduction in operational costs and improved accuracy across all processes.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "James Wilson",
    role: "Brand Manager, CreativeStudio",
    content:
      "The design team created a stunning brand identity and website that perfectly captures our vision. Our client inquiries increased by 250% after the launch.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
            What Our <span className="gradient-text-purple">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with Digivelopers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                    <div className="text-gray-400">{testimonial.role}</div>
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
