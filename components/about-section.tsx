"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Globe, Zap } from "lucide-react"

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+", gradient: "from-blue-500 to-cyan-500" },
  { icon: Award, label: "Projects Completed", value: "1000+", gradient: "from-purple-500 to-pink-500" },
  { icon: Globe, label: "Countries Served", value: "25+", gradient: "from-green-500 to-emerald-500" },
  { icon: Zap, label: "Years Experience", value: "8+", gradient: "from-orange-500 to-red-500" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="text-white">Excellence</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                At Digivelopers, we're not just developers – we're digital architects who transform ambitious visions
                into reality. Our journey began with a simple belief: technology should empower businesses to achieve
                the extraordinary.
              </p>
              <p>
                Today, we're a team of passionate innovators, designers, and strategists who combine cutting-edge
                technology with human-centered design to create solutions that don't just meet expectations – they
                exceed them.
              </p>
              <p>
                From startups disrupting industries to enterprises scaling globally, we've been the trusted partner
                behind some of the most successful digital transformations of the past decade.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              To democratize access to world-class digital solutions by combining innovative technology, exceptional
              design, and strategic thinking to help businesses of all sizes thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
