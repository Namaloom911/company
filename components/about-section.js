"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: <CheckCircle className="w-6 h-6" />, number: "150+", label: "Projects Completed" },
    { icon: <Users className="w-6 h-6" />, number: "50+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "5+", label: "Years Experience" },
    { icon: <Clock className="w-6 h-6" />, number: "24/7", label: "Support Available" },
  ]

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Digivelopers</h2>
            <p className="font-body text-lg text-slate-600 mb-6 leading-relaxed">
              We are a team of passionate developers, designers, and digital strategists dedicated to creating
              exceptional digital experiences. Our mission is to help businesses transform their ideas into powerful
              digital solutions that drive growth and success.
            </p>
            <p className="font-body text-lg text-slate-600 mb-8 leading-relaxed">
              With years of experience in web development, mobile apps, and digital strategy, we combine technical
              expertise with creative vision to deliver results that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-slate-900">{stat.number}</div>
                    <div className="font-body text-sm text-slate-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-0">
                <h3 className="font-display text-2xl font-semibold text-slate-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    "Expert team with proven track record",
                    "Modern technologies and best practices",
                    "Agile development methodology",
                    "Transparent communication throughout",
                    "Post-launch support and maintenance",
                    "Competitive pricing and flexible packages",
                  ].map((item, index) => (
                    <li key={index} className="font-body text-slate-700 flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
