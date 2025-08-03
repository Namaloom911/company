"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Digivelopers transformed our outdated website into a modern, high-performing platform. The team's expertise and attention to detail exceeded our expectations.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoSolutions",
      content:
        "Working with Digivelopers was a game-changer for our business. They delivered a mobile app that perfectly captured our vision and improved our customer engagement significantly.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content:
        "The digital strategy consultation provided by Digivelopers helped us streamline our processes and increase our online presence. Highly recommended!",
      rating: 5,
      avatar: "/placeholder-user.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="font-body text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-body text-slate-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-body font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="font-body text-sm text-slate-600">{testimonial.role}</div>
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
