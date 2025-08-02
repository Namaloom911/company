"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Expert Team Members",
  },
  {
    icon: Award,
    number: "500+",
    label: "Successful Projects",
  },
  {
    icon: Clock,
    number: "5+",
    label: "Years of Experience",
  },
  {
    icon: Globe,
    number: "25+",
    label: "Countries Served",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              About <span className="gradient-text-purple">Digivelopers</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a forward-thinking digital agency specializing in creating exceptional web experiences and
              AI-powered solutions. Our team combines creativity with cutting-edge technology to deliver results that
              exceed expectations.
            </p>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              From startups to enterprise clients, we've helped businesses transform their digital presence and achieve
              sustainable growth through innovative design, development, and marketing strategies.
            </p>

            {/* Mission */}
            <div className="glass p-8 rounded-2xl border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower businesses with intelligent digital solutions that drive growth, enhance user experiences,
                and create lasting competitive advantages in an increasingly digital world.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center glass border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-full mb-6">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
